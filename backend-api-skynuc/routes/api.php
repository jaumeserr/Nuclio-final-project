<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
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



/*
|--------------------------------------------------------------------------
| Country Routes
|--------------------------------------------------------------------------
*/

Route::group([

    'prefix' => 'countries'

], function ($router) {

    Route::get('', 'CountryController@all');
    Route::get('{a3_iso_code}', 'CountryController@getByCode');
    // Route::get('{name}', 'CountryController@getByName');


    Route::get('search/{query}', 'CountryController@search');


});


/*
|--------------------------------------------------------------------------
| City Routes
|--------------------------------------------------------------------------
*/

Route::group([

    'prefix' => 'cities'

], function ($router) {

    Route::get('', 'CityController@all');

});


/*
|--------------------------------------------------------------------------
| Airport Routes
|--------------------------------------------------------------------------
*/

Route::group([

    'prefix' => 'airports'

], function ($router) {

    Route::get('', 'AirportController@all');

});


/*
|--------------------------------------------------------------------------
| Airline Routes
|--------------------------------------------------------------------------
*/

Route::group([

    'prefix' => 'airlines'

], function ($router) {

    Route::get('', 'AirlineController@all');

});


/*
|--------------------------------------------------------------------------
| Flight Consts Routes
|--------------------------------------------------------------------------
*/

Route::group([

    'prefix' => 'flight_consts'

], function ($router) {

    Route::get('', 'FlightConstController@all');

});


/*
|--------------------------------------------------------------------------
| Flight Instances Routes
|--------------------------------------------------------------------------
*/

Route::group([

    'prefix' => 'flight_instances'

], function ($router) {

    Route::get('', 'FlightInstanceController@all');

});
