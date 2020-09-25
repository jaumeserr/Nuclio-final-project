<?php


namespace App\Http\Controllers;

use App\FlightInstance;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;

class SearchController extends Controller
{
    public function search($dpt, $arr, $date) {
        $results = array();
        $date = Carbon::createFromFormat('Ymd', $date);

        Log::info("[SearchController] Searching by DPT:{$dpt} ARR:{$arr} DATE:{$date}");
        $flightInstances = FlightInstance::with('flightConst.airline')
            ->whereDate('dpt_datetime', $date)
            ->get();

        foreach ($flightInstances as $flightInstance)
        {
            Log::info("[SearchController] Filtering Flight -> {$flightInstance->flightConst}");

            if ($flightInstance->flightConst->dpt_airport_iata == $dpt
            && $flightInstance->flightConst->arr_airport_iata == $arr)
            {
                Log::info("[SearchController] Selected Flight -> {$flightInstance}");
                array_push($results, $flightInstance);
            }
        }

        Log::info("[SearchController] Results -> " . count($results));
        return response()->json($results);
    }
}
