<?php

use App\Http\Controllers\Auth;
use App\Http\Middleware\JWT;
use Illuminate\Support\Facades\Auth as FacadesAuth;
use Illuminate\Support\Facades\Route;
use Tymon\JWTAuth\Http\Middleware\Authenticate;

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


Route::get('/{path?}', function () {
    return view('welcome');
})->where('path', '.*');

Route::post('/auth/register', [App\Http\Controllers\Auth::class, "register"]);
Route::post('/auth/login', [App\Http\Controllers\Auth::class, "login"]);

// Route::middleware('jwt.auth')->post('/api/quiz', [App\Http\Controllers\QuizController::class, "store"]);
