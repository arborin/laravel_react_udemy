<?php

use App\Http\Controllers\Api\SectionController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\CategoryController;
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

Route::get('/', [SectionController::class, 'sections']);


Route::get('/home', function () {
    echo "HOME";
});

Route::get('/about', function () {
    return view("about");
})->middleware('check');

Route::get('/contact', [ContactController::class, 'index'])->name('contact');

Route::get('/category/all', [CategoryController::class, 'index'])->name('all.category');
Route::post('/category/add', [CategoryController::class, 'addCategory'])->name('add.category');
Route::get('/category/edit/{id}', [CategoryController::class, 'editCategory'])->name('edit.category');
Route::post('/category/update/{id}', [CategoryController::class, 'updateCategory'])->name('update.category');
Route::get('/softdelete/category/{id}', [CategoryController::class, 'softDelete'])->name('soft.delete.category');


Route::middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified'])->group(function () {
    Route::get('/dashboard', function () {

        // elequant
        // $users = User::all();

        // query builder
        // $users = DB::table('users')->get();

        return view('admin.index');
    })->name('dashboard');

    Route::get('/category/all', [CategoryController::class, 'index'])->name('all.category');
});


Route::get('/user/logout', [ContactController::class, 'logout'])->name('user.logout');

Route::get('/brand/all', [BrandController::class, 'index'])->name('all.brand');
Route::get('/multi/image', [BrandController::class, 'multipic'])->name('multi.image');

Route::post('/brand/store', [BrandController::class, 'store'])->name('store.brand');
Route::get('/brand/edit/{id}', [BrandController::class, 'edit'])->name('edit.brand');

Route::post('/brand/update/', [BrandController::class, 'update'])->name('update.brand');
Route::get('/brand/delete/{id}', [BrandController::class, 'delete'])->name('delete.brand');

Route::post('/store/images', [BrandController::class, 'storeImages'])->name('store.images');
