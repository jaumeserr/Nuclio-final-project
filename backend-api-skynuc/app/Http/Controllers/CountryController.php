<?php

namespace App\Http\Controllers;

use App\Country;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;

class CountryController extends Controller {

    /**
     * Show a list of all of the application's countries.
     *
     * @return JsonResponse
     */
    
    public function all()
    // public function all($name)
    // public function all(Request $name)

    {

        // PART 1 - Get according to a path param (query):

            // Consultar SOURCES below!
                // 1. Brief and clear example 
                // https://www.itsolutionstuff.com/post/how-to-get-query-strings-value-in-laravel-5example.html
                // 2. Laravel documentation (go to "Retrieving Input From The Query String"):
                // https://laravel.com/docs/7.x/requests#retrieving-input

        Log::info('Retrieving data for country ->' .$name);
        $name = $request->query('name'); // <- si he añadido "?name=x", aquÍ recupero este "x"
        $countries = Country::where('name', $name)->get();
        return response()->json($countries);


        // PART 2 - Get all countries (what we used to have in this function before):

        // Log::info('Retrieving all countries');
        // $country = Country::all();
        // return response()->json($country);

        // ---> HOW to have both PART 1 and 2 in this SAME FUNCTION? Should they be 2 SEPARATE functions?
    }



    // NOTE: Esta función de abajo FUNCIONA pero es temporal. Mirar nota en api.php

    /**
     * Show a list of all of the countries matching the search.
     *
     * @param $query
     * @return JsonResponse
     */
    public function search($query)
    {
        Log::info('Retrieving data for country ->' .$query);
        $countries = Country::where('name', $query)->get();
        // The line above is the same as:
            // $boards = DB::select('
            // SELECT * FROM countries
            // WHERE name = 'Germany' (<-- example)
            // ');

        Log::info('Retrieving query ->' . $countries);
        return response()->json($countries);
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

}

