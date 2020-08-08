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

}

