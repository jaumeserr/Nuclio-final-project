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
        return response()->json(Country::all());
    }

    public function getByCode($a3_iso_code)
    {
        Log::info('Retrieving country with a3_iso_code: ' .$a3_iso_code);
        $country = Country::findOrFail($a3_iso_code);
        return response()->json($country);
    }

}

