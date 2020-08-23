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
    public function all()
    {
        Log::info('Retrieving all countries');
        $countries = Country::all();
        return response()->json(['data' => $countries]);
    }

    /**
     * Return a given country by a3_iso_code
     *
     * @param $a3_iso_code
     * @return JsonResponse
     */
    public function getByCode($a3_iso_code)
    {
        Log::info('Retrieving country with a3_iso_code: ' .$a3_iso_code);
        $country = Country::findOrFail($a3_iso_code);
        return response()->json($country);
    }

    /**
     * Return a given country by name
     *
     * @param $name
     * @return JsonResponse
     */
    public function getByName($name)
    {
        Log::info('Retrieving country with name: ' .$name);
        $country = Country::findOrFail($name);
        return response()->json($country);
    }
}

