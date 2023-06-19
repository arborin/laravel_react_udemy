<?php

use App\Http\Controllers\Api\SectionController;
use App\Http\Controllers\Api\StudentClasssController;
use App\Http\Controllers\Api\SubjectController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// class
Route::get("/class", [StudentClasssController::class, 'index']);
Route::post("/class/store", [StudentClasssController::class, 'store']);
Route::get("/class/edit/{id}", [StudentClasssController::class, 'edit']);
Route::post("/class/update/{id}", [StudentClasssController::class, 'update']);
Route::get("/class/delete/{id}", [StudentClasssController::class, 'delete']);


// Subject
Route::get("/subject", [SubjectController::class, 'index']);
Route::post("/subject/store", [SubjectController::class, 'store']);
Route::get("/subject/edit/{id}", [SubjectController::class, 'edit']);
Route::post("/subject/update/{id}", [SubjectController::class, 'update']);
Route::get("/subject/delete/{id}", [SubjectController::class, 'delete']);

// Section
Route::get('/section', [SectionController::class, 'index']);
Route::get('/section/delete/{id}/{name}', [SectionController::class, 'delete']);
Route::post('/section/add', [SectionController::class, 'add']);
Route::post('/section/edit/{id}', [SectionController::class, 'edit']);
