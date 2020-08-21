<?php

namespace App\Http\Controllers;

use App\Country;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;

class CountryController extends Controller {

    /**
     * Show a list of all of the application's countries.
     *
     * @return JsonResponse
     */
    public function all(){
        Log::info('Retrieving all countries');
        $country = Country::all();
        return response()->json($country);
    }

    /**
     * Return a given country by a3_iso_code
     *
     * @param $a3_iso_code
     * @return JsonResponse
     */
    public function getByCode($a3_iso_code) {
        Log::info('Retrieving a country by a3_iso_code: '.$a3_iso_code);
        $country = Country::where('a3_iso_code', $a3_iso_code)->first();
        return response()->json($country);
    }

    /**
     * Return a given country by name
     *
     * @param $name
     * @return JsonResponse
     */
    public function getByName($name) {
        Log::info('Retrieving a country by name: '.$name);
        $country = Country::where('name', $name)->first();
        return response()->json($country);
    }
}

