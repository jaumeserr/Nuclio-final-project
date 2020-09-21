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
| Airport Routes
|--------------------------------------------------------------------------
*/

Route::group([

    'prefix' => 'airports'

], function ($router) {

    Route::get('', 'AirportController@all');
    Route::get('iata/{iata}', 'AirportController@getByIata');
    Route::get('city_name/{city_name}', 'AirportController@getByCityName');

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
    Route::get('code/{two_letter_code}', 'AirlineController@getByCode');

    Route::get('name', 'AirlineController@getByName');
    Route::get('nameconditional', 'AirlineController@getAllOrByNameConditional');

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
    Route::get('id/{id}', 'FlightInstanceController@getById');
    Route::get('dpt_datetime/{dpt_datetime}', 'FlightInstanceController@getByDptDatetime');
    Route::get('arr_datetime/{arr_datetime}', 'FlightInstanceController@getByArrDatetime');
    Route::get('flight_num/{flight_const_flight_num}', 'FlightInstanceController@getByFlightNum');
    Route::get('price_eur/{price_eur}', 'FlightInstanceController@getByPrice');
    Route::get('flightcarddata', 'FlightInstanceController@flightCardData');

});

/*
|--------------------------------------------------------------------------
| Search Routes
|--------------------------------------------------------------------------
*/

Route::group([

    'prefix' => 'search'

], function ($router) {

    Route::get('{dpt}/{arr}', 'SearchController@search');

});
