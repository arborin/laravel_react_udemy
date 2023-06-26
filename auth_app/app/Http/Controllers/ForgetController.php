<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\User;
use App\Mail\ForgetMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\ForgetRequest;
use Illuminate\Support\Facades\Mail;

class ForgetController extends Controller
{
    public function ForgetPassword(ForgetRequest $request)
    {
        $email = $request->email;

        if (User::where('email', $email)->doesntExist()) {
            return response([
                'message' => 'Email is invalid'
            ], 401);
        }

        // generate random token
        $token = rand(10, 100000);
        try {
            DB::table('password_reset_tokens')->insert([
                'email' => $email,
                'token' => $token
            ]);

            Mail::to($email)->send(new ForgetMail($token));

            return response([
                'message' => "Reset password send"
            ], 200);
        } catch (Exception $exception) {
            return response([
                'message' => $exception->getMessage()
            ], 401);
        }
    } // end method
}
