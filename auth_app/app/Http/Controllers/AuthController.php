<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;


class AuthController extends Controller
{
    public function Login(Request $request)
    {
        try {
            if (Auth::attempt($request->only('email', 'password'))) {
                /** @var \App\Models\User $user **/
                $user = Auth::user();
                $token = $user->createToken('app')->accessToken;

                return response([
                    'message' => "Successfylly login",
                    'token' => $token,
                    'user' => $user
                ], 200);
            }
        } catch (Exception $e) {
            return response([
                'message' => "Login error"
            ], 400);
        }

        return response([
            'message' => "Invalid email or password"
        ], 401);
    }


    public function Register(RegisterRequest $request)
    {
        try {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            $token = $user->createToken('app')->accessToken;

            return response([
                'message' => "Registration Seccessfull",
                'token' => $token,
                'user' => $user
            ]);
        } catch (Exception $e) {
            return response([
                'message' => "Register error"
            ], 400);
        }
    } // end method
}
