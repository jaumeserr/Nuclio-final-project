<?php

namespace App\Http\Controllers;

use App\City;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;

class CityController extends Controller {

    /**
     * Show a list of all of the application's cities.
     *
     * @return JsonResponse
     */
    public function all()
    {
        Log::info('Retrieving all cities');
        return response()->json(City::all());
    }

    /**
     * Return a given cities by Id.
     * 
     * @param $id
     * @return Jsonresponse
     */

    public function getById($id)
    {
        Log::info('Retrieving City by id: '.$id);
        $city = City::where('id', $id)->first();
        return response()->json($city);
    }

     /**
     * Return a given cities by name.
     * 
     * @param $name
     * @return Jsonresponse
     */

    public function getByName($name)
    {
        Log::info('Retrieving City by name: '.$name);
        $city = City::where('name', $name)->first();
        return response()->json($city);
    }

     /**
     * Return a given cities by country_a3_iso_code.
     * 
     * @param $country_a3_iso_code
     * @return Jsonresponse
     */

    public function getByCode($country_a3_iso_code)
    {
        Log::info('Retrieving City by country_a3_iso_code: '.$country_a3_iso_code);
        $city = City::where('country_a3_iso_code', $country_a3_iso_code)->first();
        return response()->json($city);
    }
}

