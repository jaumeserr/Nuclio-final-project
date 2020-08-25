<?php

namespace App\Http\Controllers;

use App\FlightConst;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;

class FlightConstController extends Controller {

    /**
     * Show a list of all of the application's flight consts
     *
     * @return JsonResponse
     */
    public function all()
    {
        Log::info('Retrieving all flight consts');
        return response()->json(FlightConst::all());
    }

}
