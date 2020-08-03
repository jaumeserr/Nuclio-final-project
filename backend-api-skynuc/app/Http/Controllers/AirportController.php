<?php

namespace App\Http\Controllers;

use App\Airport;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;

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

}

