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

    public function getByName($name)
    {
        Log::info('Retrieving Airport by name: '.$name);
        $airport = Airport::where('name', $name)->first();
        return response()->json($airport);
        
    }

     /**
     * Return a given airport by city_id
     * 
     * @param $city_id
     * @return Jsonresponse
     */

    public function getByCityId($city_id)
    {
        Log::info('Retrieveing Airport by city_id: '.$city_id);
        $airport = Airport::where('city_id', $city_id)->first();
        return response()->json($airport);
    }
}

