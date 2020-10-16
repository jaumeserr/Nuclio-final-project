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
        $startTime = Carbon::createFromTime($request->query('startTime'))->toTimeString();
        $endTime = Carbon::createFromTime($request->query('endTime'))->toTimeString();
        $minPrice = $request->query('minPrice');
        $maxPrice = $request->query('maxPrice');
        $airlines = $request->query('airlines');

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

            /*if (!(is_null($startTime)) && !($flightInstance->dpt_datetime >= $startTime)) {
                $filtersOk = false;
            }

            if (!(is_null($endTime)) && !($flightInstance->dpt_datetime <= $endTime)) {
                $filtersOk = false;
            }*/

            $dt2 = new Carbon($flightInstance->dpt_datetime);
            $dt2->toTimeString();
            Log::info("[SearchController] Time String -> {$dt2}");

            Log::info("[SearchController] Min Price -> {$minPrice}");
            Log::info("[SearchController] Max Price -> {$maxPrice}");
            Log::info("[SearchController] Price -> {$flightInstance->price_eur}");
            Log::info("[SearchController] Airlines -> {$airlines}");
            Log::info("[SearchController] Start Time -> {$startTime}");
            Log::info("[SearchController] Dpt Time -> {$flightInstance->dpt_datetime}");
            Log::info("[SearchController] End Time -> {$endTime}");
            Log::info("[SearchController] Arr Time -> {$flightInstance->arr_datetime}");
            //Log::info("[SearchController] Dpt Time Form DB -> {$dptTime}");

            if ($filtersOk) {
                array_push($results, $flightInstance);
            }
        }

        Log::info("[SearchController] Results -> " . count($results));
        return response()->json($results);
    }
}
