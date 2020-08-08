<?php

namespace App\Http\Controllers;

use App\Country;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;

class CountryController extends Controller {


    /** PINS !!!!!
     * Show a list of all of the countries matching the search.
     *
     * @param $query
     * @return JsonResponse
     */
    public function search($query)
    {
        Log::info('Retrieving all countries related to ->' .$query);
        $countries = Country::where('name', 'LIKE', '%' . $query . '%')->get();
        // Same as:
        // $boards = DB::select('
        // SELECT * FROM countries
        // WHERE name LIKE '%green%'
        // ');

        Log::info('Retrieving query ->' . $countries);
        return response()->json($countries);
    }




    /**
     * Show a list of all of the application's countries.
     *
     * @return JsonResponse
     */
    public function all()
    {

        $name = $request->query('name'); // <- si he añadido "?name=x", aquí recupero este "x"
        //$countries = Countries::where('name', $name)->get();
        //$countries = Countries::where('name', 'hola')->get();

        Log::info('Retrieving all countries');
        $country = Country::all();
        return response()->json($country);
    }

    /**
     * Return a given country by a3_iso_code
     *
     * @param $a3_iso_code
     * @return JsonResponse
     */
    public function getByCode($a3_iso_code)
    {
        Log::info('Retrieving country with a3_iso_code: ' .$a3_iso_code);
        $country = Country::findOrFail($a3_iso_code);
        return response()->json($country);
    }

    /**
     * Return a given country by name
     *
     * @param $name
     * @return JsonResponse
     */
    // public function getByName($name)
    // {
    //     Log::info('Retrieving country with name: ' .$name);
    //     $country = Country::findOrFail($name);
    //     return response()->json($country);
    // }
}

