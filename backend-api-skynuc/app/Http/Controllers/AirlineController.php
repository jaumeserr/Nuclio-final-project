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
        $name = $request->query('name');
        Log::info('Retrieving airline by name: '.$name);
        $airline = Airline::where('name', 'LIKE', '%' . $name . '%')->get();
        return response()->json($airline);
    }

    // ----> CONDICIONAL !!! NO BORRAR!
    // public function getAllOrByNameConditional(Request $request)
    // {
    //     // si he añadido "?name=x", en la línea siguiente recupero este "x"
    //     $name = $request->query('name');
    //     //  ->when($name . 'CONTIENE UN VALOR PORQUE HE AÑADIDO "?name=x"...'{
    //         ->when(request()->has('name'), function($name){
    //             Log::info('Retrieving airline by name: '.$name);
    //             $airline = Airline::where('name', 'LIKE', '%' . $name . '%')->get();
    //         });
    //         ->when($name 'NO CONTIENE NINGUN VALOR PORQUE NO HE AÑADIDO "?name=x"...'{
    //             Log::info('Retrieving all airlines');
    //             $airline = Airline::all();
    //         });
    //         return response()->json($airline);
    // }




    // ------> ANTIGUA - Usar como modelo para cambiar los otros controladores, HOSMAN:
    //FIXME: Jaume, ALL old versions deleted???
    // public function getByName($name)
    // {
    //     Log::info('Retrieving airline by name: '.$name);
    //     $airline = Airline::where('name', $name)->first();
    //     return response()->json($airline);
    // }



}

