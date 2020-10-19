<?php


namespace App\Http\Controllers;

use App\FlightConst;
use App\FlightInstance;
use App\Airline;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
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
        $airlines = $request->query('airlines');

        Log::info("[SearchController] Searching by DPT:{$dpt} ARR:{$arr} DATE:{$date}");
        $flightInstanceQuery = FlightInstance::with('flightConst.airline')
            ->whereDate('dpt_datetime', $date);

        if (!(is_null($startTime))) {
            $startTime = Carbon::createFromTime($startTime);
            $flightInstanceQuery->whereTime('dpt_datetime', '>=', $startTime);
        }

        if (!(is_null($endTime))) {
            $endTime = Carbon::createFromTime($endTime)->toTimeString();
            $flightInstanceQuery->whereTime('dpt_datetime', '<=', $endTime);
        }

        $flightInstances = $flightInstanceQuery->get();

        foreach ($flightInstances as $flightInstance)
        {
            $filtersOk = true;

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

            if (!(is_null($airlines)) && !in_array($flightInstance->flightConst->airline_two_letter_code, explode(",", $airlines))) {
                $filtersOk = false;
            }

            Log::info("[SearchController] Airlines FlightConst -> {$flightInstance->flightConst->airline_two_letter_code}");
            Log::info("[SearchController] Min Price -> {$minPrice}");
            Log::info("[SearchController] Max Price -> {$maxPrice}");
            Log::info("[SearchController] Price -> {$flightInstance->price_eur}");
            Log::info("[SearchController] Airlines -> {$airlines}");
            Log::info("[SearchController] Start Time -> {$startTime}");
            Log::info("[SearchController] Dpt Time -> {$flightInstance->dpt_datetime}");
            Log::info("[SearchController] End Time -> {$endTime}");
            Log::info("[SearchController] Arr Time -> {$flightInstance->arr_datetime}");

            if ($filtersOk) {
                array_push($results, $flightInstance);
            }
        }

        Log::info("[SearchController] Results -> " . count($results));
        return response()->json($results);
    }

    public function getAirlineCodes()
    {
        return ['TP','VY', 'IB', 'KL', 'AF'];
    }
}
