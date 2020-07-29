<?php

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
| Flight Instances Routes
|--------------------------------------------------------------------------
*/
Route::group([

    'prefix' => 'flight_instances'

], function ($router) {

    Route::get('', 'FlightInstanceController@all');

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
