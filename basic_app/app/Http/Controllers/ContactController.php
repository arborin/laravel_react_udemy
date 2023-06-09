<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class ContactController extends Controller
{
    public function index()
    {
        return view('contact');
    }


    public function logout()
    {
        Auth::logout();
        return Redirect()->route('login')->with("success", "Log out!");
    }
}
