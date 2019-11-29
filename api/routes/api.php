<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('auth/login','Api\AuthController@login');
Route::post('auth/refresh','Api\AuthController@refresh');
Route::get('auth/logout','Api\AuthController@logout');

Route::group(['Middleware'=>'jwt.auth','namespace'=> 'Api\\'], function(){
    Route::get('auth/me', 'AuthController@me');
});
Route::post('file/upload','Api\FileController@upload');

//Route::namespace('API')->name('api.')->middleware('jwt.auth')->group(function(){
Route::namespace('API')->name('api.')->group(function(){
    Route::prefix('/auth')->group(function(){
        //Route::get('/me','Api\AuthController@me');
    });
    Route::prefix('/users')->group(function(){
        Route::get('/','UserController@index')->name('leads');
        Route::get('/{id}','UserController@show')->name('lead');
        Route::post('/', 'UserController@store')-> name('store_leads');
        Route::put('/{id}', 'UserController@update')-> name('update_lead');
        Route::delete('/{id}', 'UserController@delete')-> name('delete_lead');
    });
    Route::prefix('/metas')->group(function(){
        Route::get('/','PostMetaController@index')->name('metas');
        Route::post('/','PostMetaController@store') -> name("store_metas");
        Route::put('/{id}', 'PostMetaController@update')-> name('update_metas');
        Route::get('/permalinks','PostMetaController@permalinks')->name('permalinks');
        Route::get('/permalinksmenu','PostMetaController@permalinksMenu')->name('permalinksmenu');
    });
    Route::prefix('/posts')->group(function(){
        Route::get('/','PostController@index')->name('posts');
        Route::get('/page','PostController@pages')->name('pages');
        Route::get('/lpost','PostController@posts')->name('lposts');
        Route::get('/{id}','PostController@show')->name('post');
        Route::get('/getcontent/{id}','PostController@getcontent')->name('get_post_content');
        Route::post('/', 'PostController@store')-> name('store_posts');
        Route::put('/{id}', 'PostController@update')-> name('update_posts');
        Route::put('/updatecontent/{id}', 'PostController@updateContent')-> name('update_post_content');
        Route::delete('/{id}', 'PostController@delete')-> name('delete_posts');
    });
    Route::prefix('/funnels')->group(function(){
        Route::get('/','FunnelController@index')->name('leads');
        Route::get('/{id}','FunnelController@show')->name('lead');
        Route::post('/', 'FunnelController@store')-> name('store_leads');
        Route::put('/{id}', 'FunnelController@update')-> name('update_lead');
        Route::delete('/{id}', 'FunnelController@delete')-> name('delete_lead');
    });
    Route::prefix('/funnelslevels')->group(function(){
        Route::get('/','FunnellevelController@index')->name('leads');
        Route::get('/{id}','FunnellevelController@getByFunnelId')->name('funnlelevels');//
        Route::post('/', 'FunnellevelController@store')-> name('store_leads');
        Route::put('/{id}', 'FunnellevelController@update')-> name('update_lead');
        Route::delete('/{id}', 'FunnellevelController@delete')-> name('delete_lead');
    });
    Route::prefix('/leads')->group(function(){
        Route::get('/byfl/{id}','LeadController@getByFunnelLevelId')->name('leadsperfunnellevel');
        Route::get('/','LeadController@index')->name('leads');
        Route::get('/{id}','LeadController@show')->name('lead');
        Route::post('/', 'LeadController@store')-> name('store_leads');
        Route::put('/{id}', 'LeadController@update')-> name('update_lead');
        Route::delete('/{id}', 'LeadController@delete')-> name('delete_lead');
    });
    Route::prefix('/options')->group(function(){
        Route::get('/','OptionsController@index')->name('options');
        Route::get('/{option}','OptionsController@show')->name('option');
        Route::post('/', 'OptionsController@store')-> name('store_options');
        Route::put('/{option}', 'OptionsController@update')-> name('update_option');
        Route::delete('/{option}', 'OptionsController@delete')-> name('delete_option');
        // Route::get('/menu','OptionsController@ShowMenu')->name('menu');
    });
    
    Route::prefix('/forms')->group(function(){
        Route::get('/','FormController@index')->name('forms');
        Route::get('/{id}','FormController@show')->name('form');
        Route::post('/', 'FormController@store')-> name('store_form');
        Route::put('/{id}', 'FormController@update')-> name('update_form');
        Route::delete('/{id}', 'FormController@delete')-> name('delete_form');
    });
});