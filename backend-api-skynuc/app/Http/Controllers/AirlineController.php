<?php

namespace App\Http\Controllers;

use App\Airline;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;

class AirlineController extends Controller {

    /**
     * Show a list of all of the application's airlines.
     *
     * @return JsonResponse
     */
    public function all()
    {
        Log::info('Retrieving all airlines');
        return response()->json(Airline::all());
    }

    /**
     * Return a given airline by two_letter_code
     *
     * @param $two_letter_code
     * @return JsonResponse
     */
    public function getByCode($two_letter_code)
    {
        Log::info('Retrieving Airline by two_letter_code: '.$two_letter_code);
        $airline = Airline::where('two_letter_code', $two_letter_code)->first();
        return response()->json($airline);
    }

    /**
     * Return a given airline by name
     *
     * @param $name
     * @return JsonResponse
     */
    public function getByName($name)
    {
        Log::info('Retrieving Airline by name: '.$name);
        $airline = Airline::where('name', $name)->first();
        return response()->json($airline);
    }
}

