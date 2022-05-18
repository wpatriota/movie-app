<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
//use App\Http\Controllers\ApiController;

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

/*Route::controller(ApiController::class)->group(function () {
    Route::prefix('api')->group(function () {
        Route::get('desenvolvedores', 'getAllDesenvolvedores')->name('desenvolvedores');
    });
    //Route::get('/api/desenvolvedores', 'getAllDesenvolvedores');
    //Route::post('/orders', 'store');
});*/

Route::get('desenvolvedores', 'ApiController@getAllDesenvolvedores');
Route::get('desenvolvedor/{id}', 'ApiController@getDesenvolvedor');
Route::post('desenvolvedor', 'ApiController@createDesenvolvedor');
Route::put('desenvolvedor/{id}', 'ApiController@updateDesenvolvedor');
Route::delete('desenvolvedor/{id}','ApiController@deleteDesenvolvedor');


Route::get('niveis', 'ApiController@getAllNiveis');
Route::get('nivel/{id}', 'ApiController@getNivel');
Route::post('nivel', 'ApiController@createNivel');
Route::put('nivel/{id}', 'ApiController@updateNivel');
Route::delete('nivel/{id}','ApiController@deleteNivel');