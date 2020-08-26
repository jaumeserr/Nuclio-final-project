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

    public function getByName(Request $name)
    {
        Log::info('Retrieving airline by name: '.$name);
        $name = $request->query('name');
        $airline = Airline::where('name', 'LIKE', '%' . $name . '%')->first();
        return response()->json($airline);
    }

    // ------> ANTIGUA - Usar como modelo para cambiar los otros controladores, HOSMAN:
    //FIXME: Jaume, ALL old versions deleted???
    // public function getByName($name)
    // {
    //     Log::info('Retrieving airline by name: '.$name);
    //     $airline = Airline::where('name', $name)->first();
    //     return response()->json($airline);
    // }

        // CONDICIONAL ! NO BORRAR!
        // --> Once PART 1 works, address this:
        // In order to have both PART 1 and 2 in this SAME FUNCTION we need to use CONDITIONALS
        // Ruth's guess:

        // $name = $request->query('name'); // <- si he añadido "?name=x", aquí recupero este "x"
        //     ->when($name . 'CONTIENE UN VALOR PORQUE HE AÑADIDO "?name=x"...'{
        //         Log::info('Retrieving data for country ->' .$name);
        //         $country = Country::where('name', $name)->get();
        //     });
        //     ->when($name 'NO CONTIENE NINGUN VALOR PORQUE NO HE AÑADIDO "?name=x"...'{
        //         Log::info('Retrieving all countries');
        //         $country = Country::all();
        //     });
        //     return response()->json($country);














    /**
     * Show a list of all of the application's airlines
     * with their corresponding flight consts
     * and the corresponding flight instances of these flight consts
     *
     * @return JsonResponse
     */
    // public function flightCardData()
    // {
    //     Log::info('Retrieving all airlines with corresp. flight consts and their corresp. flight instances');
    //     $airlines = Airline::with('flightConsts.flightInstances')->get();
    //     return response()->json($airlines);
    // }




}

