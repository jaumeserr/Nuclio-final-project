<?php

namespace App\Http\Controllers;

use App\FlightConst;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;

class FlightConstController extends Controller {

    /**
     * Show a list of all of the application's flight Consts.
     *
     * @return JsonResponse
     */
    public function all()
    {
        Log::info('Retrieving all flight const');
        return response()->json(FlightConst::all());
    }

}
