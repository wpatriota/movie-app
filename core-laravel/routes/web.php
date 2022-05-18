<?php

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

//Desenvolvedores
Route::get('/CreateDesenvolvedor', function () {
    return view('welcome');
});

Route::get('/UpdateDesenvolvedor/{id}', function () {
    return view('welcome');
});


Route::get('/DeleteDesenvolvedor', function () {
    return view('welcome');
});

//Niveis
Route::get('/CreateNivel', function () {
    return view('welcome');
});

Route::get('/UpdateNivel', function () {
    return view('welcome');
});

Route::get('/UpdateNivel', function () {
    return view('welcome');
});

Route::get('/DeleteNivel', function () {
    return view('welcome');
});
