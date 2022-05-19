<?php

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

//desenvolvedores
Route::get('api_getAllDesenvolvedores', 'ApiController@api_getAllDesenvolvedores');
Route::get('api_getDesenvolvedor/{id}', 'ApiController@api_getDesenvolvedor');
Route::post('api_createDesenvolvedor', 'ApiController@api_createDesenvolvedor');
Route::put('api_updateDesenvolvedor/{id}', 'ApiController@api_updateDesenvolvedor');
Route::delete('api_deleteDesenvolvedor/{id}','ApiController@api_deleteDesenvolvedor');

//Niveis
Route::get('api_getAllNiveis', 'ApiController@api_getAllNiveis');
Route::get('api_getNivel/{id}', 'ApiController@api_getNivel');
Route::post('api_createNivel', 'ApiController@api_createNivel');
Route::put('api_updateNivel/{id}', 'ApiController@api_updateNivel');
Route::delete('api_deleteNivel/{id}','ApiController@api_deleteNivel');