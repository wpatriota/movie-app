# Fullstack-gazin
Este é o teste de avaliação para o ingresso de novos desenvolvedores junto a Gazin&lt;Tech>

Tecnologias Utilizadas:
Laravel
React
Mysql

Construção de API

Foi feita uma API em laravel com as todos os endpoints solicitados:
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

Crieis as model, migrate, apicontroller em laravel

O frontend foi feito com componentes react exibindo os dados e operações crud consumindo a API

Utilizei o github para gerenciar
Disponibilizado no heroku

REPO GITHUB = https://github.com/wpatriota/Fullstack-gazin
URL HEROKU = http://teste-gazin.herokuapp.com/
