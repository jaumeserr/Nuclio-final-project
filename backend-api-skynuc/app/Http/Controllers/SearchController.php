<?php


namespace App\Http\Controllers;

use App\FlightInstance;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function search(Request $request, $dpt, $arr, $date) {
        $results = array();
        $date = Carbon::createFromFormat('Ymd', $date);
        $startTime = $request->query('startTime');
        $endTime = $request->query('endTime');
        $minPrice = $request->query('minPrice');
        $maxPrice = $request->query('maxPrice');

        Log::info("[SearchController] Searching by DPT:{$dpt} ARR:{$arr} DATE:{$date}");
        $flightInstances = FlightInstance::with('flightConst.airline')
            ->whereDate('dpt_datetime', $date)
            ->get();

        foreach ($flightInstances as $flightInstance)
        {
            $filtersOk = true;
            
            Log::info("[SearchController] Filtering Flight -> {$flightInstance->flightConst}");

            if (!($flightInstance->flightConst->dpt_airport_iata == $dpt
            && $flightInstance->flightConst->arr_airport_iata == $arr))
            {
                Log::info("[SearchController] Selected Flight -> {$flightInstance}");
                $filtersOk = false;
            }

            if (!(is_null($maxPrice)) && !($flightInstance->price_eur <= $maxPrice)) {
                $filtersOk = false;
            }

            if (!(is_null($minPrice)) && !($flightInstance->price_eur >= $minPrice)) {
                $filtersOk = false;
            }

            Log::info("[SearchController] Min Price -> {$minPrice}");
            Log::info("[SearchController] Max Price -> {$maxPrice}");
            Log::info("[SearchController] Price -> {$flightInstance->price_eur}");

            if ($filtersOk) {
                array_push($results, $flightInstance);
            }
        }

        Log::info("[SearchController] Results -> " . count($results));
        return response()->json($results);
    }
}
