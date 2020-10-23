<?php

namespace App\Http\Controllers;

use App\FlightInstance;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Exception;
use Validator;


class FlightInstanceController extends Controller {

    /**
     * Show a list of all of the application's flight instances
     *
     * @return JsonResponse
     */
    public function all()
    {
        Log::info('Retrieving all flight instances');
        return response()->json(FlightInstance::all());
    }

    /**
     * Return a given flight instance by id
     *
     * @param $id
     * @return Jsonresponse
     */
    public function getById($id)
    {
        Log::info('Retrieving flight instance by id: '.$id);
        $flightinstance = FlightInstance::where('id', $id)->first();
        return response()->json($flightinstance);
    }

    /**
     * Return a given flight instance by dpt datetime
     *
     * @param $dpt_datetime
     * @return Jsonresponse
     */
    public function getByDptDatetime($dpt_datetime)
    {
        Log::info('Retrieving flight instance by dpt datetime: '.$dpt_datetime);
        $flightinstance = FlightInstance::where('dpt_datetime', $dpt_datetime)->first();
        return response()->json($flightinstance);
    }

    /**
     * Return a given flight instance by arr datetime
     *
     * @param $arr_datetime
     * @return Jsonresponse
     */
    public function getByArrDatetime($arr_datetime)
    {
        Log::info('Retrieving flight instance by arr datetime: '.$arr_datetime);
        $flightinstance = FlightInstance::where('arr_datetime', $arr_datetime)->first();
        return response()->json($flightinstance);
    }

    /**
     * Return a given flight instance by flight num
     *
     * @param $flight_const_flight_num
     * @return Jsonresponse
     */
    public function getByFlightNum($flight_const_flight_num)
    {
        Log::info('Retrieving flight instance by flight num: '.$flight_const_flight_num);
        $flightinstance = FlightInstance::where('flight_const_flight_num', $flight_const_flight_num)->first();
        return response()->json($flightinstance);
    }

    /**
     * Return a given flight instance by price
     *
     * @param $price_eur
     * @return Jsonresponse
     */
    public function getByPrice($price_eur)
    {
        Log::info('Retrieving flight instance by price: '.$price_eur);
        $flightinstance = FlightInstance::where('price_eur', $price_eur)->first();
        return response()->json($flightinstance);
    }

    /**
     * Show a list of all of the application's airlines
     * with their corresponding flight consts
     * and the corresponding flight instances of these flight consts
     *
     * @return JsonResponse
     */
    public function flightCardData()
    {
        Log::info('Retrieving all flight instances with the flight consts they belong to and the corresp. airlines these flight consts belong to');
        $flightinstance = FlightInstance::with('flightConst.airline')->get();
        return response()->json($flightinstance);
    }

    /*  FIXME: FlightCardData by Airline ---> HOW TO??? It works but info is incomplete... */
    /**
     * Show a list of all of one single airline
     * with its corresponding flight consts
     * and their corresponding flight instances
     *
     * @param $two_letter_code
     * @return JsonResponse
     */
    public function flightCardDataByAirline($two_letter_code)
    {
        Log::info('Retrieving info for flightCard filtered by airline two letter code');
        $flightinstance = FlightInstance::whereHas('flightConst', function ($query) use ($two_letter_code)
        {
            $query->where('airline_two_letter_code', $two_letter_code);
        })->get();

        // $flightinstanceFiltered = FlightInstance::with('flightConst.airline') && FlightInstance::where('id', $flightinstance->id)->get();

        return response()->json($flightinstanceFiltered);
    }

    /**
     * Create a new flight instance.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function create(Request $request)
    {
        /**
         * Validate the request with Laravel VALIDATORS
         * Primero lo crea, lo guarda en una variable y
         * luego lo valida
         */

        $body = $request->all();
        $flightInstanceValidator = Validator::make($body, [
            // 'dpt_datetime' => ['required', 'date_format:YYYY-MM-DD HH:mm:ss'],
            // 'arr_datetime' => ['required', 'date_format:YYYY-MM-DD HH:mm:ss'],
            // 'flight_const_flight_num' => ['required', 'numeric', 'max:4'],
            'price_eur' => ['required', 'numeric'],

        ]);

        if($flightInstanceValidator->fails()) {
            $errors = $flightInstanceValidator->errors()->getMessages();
            $code = Response::HTTP_NOT_ACCEPTABLE; // 406
            return response()->json(['error' => $errors, 'code' => $code], $code);
        } else {
            $flightInstance = FlightInstance::create([
                'dpt_datetime' => $request->dpt_datetime,
                'arr_datetime' => $request->arr_datetime,
                'flight_const_flight_num' => $request->flight_const_flight_num,
                'price_eur' => $request->price_eur,
            ]);

            /** Después de crear la flight instance, la guarda en la DB */
            $flightInstance->save();
            return response()->json(["Flight instance created and saved", $flightInstance], 201);
        }
    }

    // FIXME: Pasar este CREATE de arriba a Try/catch!




}
