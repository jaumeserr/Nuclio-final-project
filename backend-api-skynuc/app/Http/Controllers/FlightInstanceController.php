<?php

namespace App\Http\Controllers;

use App\FlightInstance;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;

class FlightInstanceController extends Controller {

    /**
     * Show a list of all of the application's flight Consts.
     *
     * @return JsonResponse
     */
    public function all()
    {
        Log::info('Retrieving all flight instances');
        return response()->json(FlightInstance::all());
    }

    /**
     * Return a given airport by id.
     * 
     * @param $id
     * @return Jsonresponse
     */


    public function getById($id)
    {
        Log::info('Retrieving flightinstance by id: '.$id);
        $flightinstance = FlightInstance::where('id', $id)->first();
        return response()->json($flightinstance);
    }

    /**
     * Return a given flightinstance by dpt_datetime.
     * 
     * @param $dpt_datetime
     * @return Jsonresponse
     */


    public function getByDpt($dpt_datetime)
    {
        Log::info('Retrieving flightinstance by dpt_datetime: '.$dpt_datetime);
        $flightinstance = FlightInstance::where('dpt_datetime', $dpt_datetime)->first();
        return response()->json($flightinstance);
    }

    /**
     * Return a given flightinstance by arr_datetime.
     * 
     * @param $arr_datetime
     * @return Jsonresponse
     */


    public function getByArr($arr_datetime)
    {
        Log::info('Retrieving flightinstance by arr_datetime: '.$arr_datetime);
        $flightinstance = FlightInstance::where('arr_datetime', $arr_datetime)->first();
        return response()->json($flightinstance);
    }

    /**
     * Return a given flightinstance by flight_consts_flight_num.
     * 
     * @param $flight_consts_flight_num
     * @return Jsonresponse
     */


    public function getByFlight($flight_consts_flight_num)
    {
        Log::info('Retrieving flightinstance by flight_consts_flight_num: '.$flight_consts_flight_num);
        $flightinstance = FlightInstance::where('flight_consts_flight_num', $flight_consts_flight_num)->first();
        return response()->json($flightinstance);
    }

    /**
     * Return a given flightinstance by price_eur.
     * 
     * @param $price_eur
     * @return Jsonresponse
     */


    public function getByPrice($price_eur)
    {
        Log::info('Retrieving flightinstance by price_eur: '.$price_eur);
        $flightinstance = FlightInstance::where('price_eur', $price_eur)->first();
        return response()->json($flightinstance);
    }

}
