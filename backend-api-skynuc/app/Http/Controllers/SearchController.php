<?php


namespace App\Http\Controllers;

use App\FlightInstance;
use Illuminate\Support\Facades\Log;


class SearchController extends Controller
{
    public function search() {
        $results = [];
        $dep = "BCN";
        $arr = "MAD";
        $date = "miercoles de mierda";

        Log::info("[SearchController] Searching by DEP:{$dep} ARR:{$arr} DATE:{$date}");
        $flightInstances = FlightInstance::with('flightConst.airline')->get();

        foreach ($flightInstances as $flightInstance)
        {
            Log::info("[SearchController] Filtering Flight -> {$flightInstance}");

//            if ($flightInstance->flightConst()->dptAirport()->iata == $dep
//            && $flightInstance->flightConst()->arrAirport()->iata == $arr)
//            {
//                Log::info("[SearchController] Selected Flight -> {$flightInstance}");
//                array_push($results, $flightInstance);
//            }
        }

        Log::info("[SearchController] Results -> {$results}");
        return response()->json($results);
    }
}
