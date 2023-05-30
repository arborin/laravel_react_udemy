<?php

use App\Http\Controllers\ContactController;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/home', function () {
    echo "HOME";
});

Route::get('/about', function () {
    return view("about");
})->middleware('check');

Route::get('/contact', [ContactController::class, 'index'])->name('contact');

Route::middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified'])->group(function () {
    Route::get('/dashboard', function () {

        // elequant
        // $users = User::all();

        // query builder
        $users = DB::table('users')->get();

        return view('dashboard', [
            'users' => $users
        ]);
    })->name('dashboard');
});
