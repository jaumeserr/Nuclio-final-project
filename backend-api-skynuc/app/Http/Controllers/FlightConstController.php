<?php

namespace App\Http\Controllers;

use App\FlightConst;
use App\Airline;
use Exception;
use Validator;
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

    /**
     * Return a given flight const by airline
     *
     * @param $flights
     * @return Jsonresponse
     */
    public function getByAirline($two_letter_code)
    {
        Log::info ('Retrieving all flight by airline');
        $flights=FlightConst::where('two_letter_code', $two_letter_code)->get();
    }

    /**
     * Create a new flight const.
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

        /** // FIXME: AIXÒ NO SÉ SI ESTÀ BÉ - types??? !!! */
        $body = $request->all();
        $flightConstValidator = Validator::make($body, [
            'flight_num' => ['required', 'string', 'max:4'],
            'airline_two_letter_code' => ['required', 'string', 'max:2'],
            'dpt_airport_iata' => ['required', 'string', 'max:3'],
            'arr_airport_iata' => ['required', 'string', 'max:3'],
        ]);

        if($flightConstValidator->fails()) {
            $errors = $flightConstValidator->errors()->getMessages();
            $code = Response::HTTP_NOT_ACCEPTABLE; // 406
            return response()->json(['error' => $errors, 'code' => $code], $code);
        } else {
            //$airline = Airline::where('two_letter_code', $request->airline_two_letter_code)->firstOrFail();
            $flightConst = FlightConst::create([
                'airline_two_letter_code' => $request->airline_two_letter_code,
                'flight_num' => $request->flight_num,
                'dpt_airport_iata' => $request->dpt_airport_iata,
                'arr_airport_iata' => $request->arr_airport_iata,
            ]);

            /** Después de crear la flightConst, la guarda en la DB */
            $flightConst->save();
            return response()->json(["FlightConst created and saved", $flightConst], 201);
        }
    }
}
