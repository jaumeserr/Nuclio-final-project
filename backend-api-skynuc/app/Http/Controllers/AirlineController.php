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
     * Show a list of all of the application's airlines
     *
     * @return JsonResponse
     */
    public function all()
    {
        Log::info('Retrieving all airlines');
        return response()->json(Airline::all());
    }

    /**
     * Return a given airline by code
     *
     * @param $two_letter_code
     * @return JsonResponse
     */
    public function getByCode($two_letter_code)
    {
        Log::info('Retrieving airline by code: '.$two_letter_code);
        $airline = Airline::where('two_letter_code', $two_letter_code)->first();
        return response()->json($airline);
    }

    /**
     * Return a given airline by name
     *
     * @param $name
     * @return JsonResponse
     */

    public function getByName(Request $request)
    {
        Log::info('Retrieving airline by name: '.$name);
        $name = $request->query('name');
        $airline = Airline::where('name', $name)->first();
        return response()->json($airline);
    }

        // ------> ANTIGUA - TO BE DELETED: //FIXME: Jaume, ALL old versions deleted???
    // public function getByName($name)
    // {
    //     Log::info('Retrieving airline by name: '.$name);
    //     $airline = Airline::where('name', $name)->first();
    //     return response()->json($airline);
    // }




    /**
     * Show a list of all of the application's airlines
     * with their corresponding flight consts
     * and the corresponding flight instances of these flight consts
     *
     * @return JsonResponse
     */
    public function flightCardData()
    {
        Log::info('Retrieving all airlines with corresp. flight consts and their corresp. flight instances');
        $airlines = Airline::with('flight_consts.flight_instances')->get();
        return response()->json($airlines);
    }




}

