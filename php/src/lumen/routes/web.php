<?php

/** @var \Laravel\Lumen\Routing\Router $router */

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('/hello/', function () use ($router) {
  return "<h1>Olá mundo!!!</h1>";
});

$router->get('/pessoa', 'PessoaController@index');
$router->get('/pessoa/{id}', 'PessoaController@show');
$router->post('/pessoa', 'PessoaController@create');
$router->put('/pessoa/{id}', 'PessoaController@update');
$router->delete('/pessoa/{id}', 'PessoaController@delete');
