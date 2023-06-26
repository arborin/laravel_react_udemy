<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ResetController;
use App\Http\Controllers\ForgetController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


// Login Routes
Route::post('/login', [AuthController::class, 'Login']);

// Register user
Route::post('/register', [AuthController::class, 'Register']);

// Forget password
Route::post('/forget-password', [ForgetController::class, 'ForgetPassword']);

// Reset password
Route::post('/reset-password', [ResetController::class, 'ResetPassword']);

// Current user route
Route::post('/user', [UserController::class, 'User']);
