<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class ResetController extends Controller
{
    public function ResetPassword(Request $request)
    {
        $email = $request->email;
        $token = $request->token;

        $password = Hash::make($request->password);

        $email_check = DB::table("password_reset_tokens")->where('email', $email)->first();
        $pin_check = DB::table("password_reset_tokens")->where('token', $token)->first();

        if (!$email_check) {
            return response([
                'message' => 'Email not found'
            ]);
        }

        if (!$pin_check) {
            return response([
                'message' => 'Pin code invalid'
            ]);
        }

        DB::table('users')->where('email', $email)->update([
            'password' => $password
        ]);

        // delete
        DB::table("password_reset_tokens")->where('email', $email)->delete();

        return response([
            'message' => 'Password reset!'
        ]);
    }
}
