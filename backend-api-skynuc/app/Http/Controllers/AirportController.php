<?php

namespace App\Http\Controllers;

use App\Airport;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;

class AirportController extends Controller {

    /**
     * Show a list of all of the application's airports.
     *
     * @return JsonResponse
     */
    public function all()
    {
        Log::info('Retrieving all airports');
        return response()->json(Airport::all());
    }

    /**
     * Return a given airport by iata
     * 
     * @param $iata
     * @return Jsonresponse
     */


    public function getByIata($iata)
    {
        Log::info('Retrieving Airport by iata: '.$iata);
        $airport = Airport::where('iata', $iata)->first();
        return response()->json($airport);
    }


     /**
     * Return a given airport by name
     * 
     * @param $name
     * @return Jsonresponse
     */

    public function getByCity_Name($city_name)
    {
        Log::info('Retrieving Airport by City_name: '.$city_name);
        $airport = Airport::where('city_name', $city_name)->first();
        return response()->json($airport);
        
    }

    
}

