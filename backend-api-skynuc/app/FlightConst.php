<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FlightConst extends Model {

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'flight_num', 'airline_two_letter_code', 'dpt_airport_iata', 'arr_airport_iata'
    ];

    /**
     * Get the airline that owns the flight const.
     * It says: One flight const belongs to an airline
     */
    public function airline()
    {
        return $this->belongsTo('App\Airline');
    }

    /**
     * Get the flight instances for the given flight const.
     * It says: One flight const has many flight instances
     */
    public function flightInstances()
    {
        return $this->hasMany('App\FlightInstance');
    }

    /**   ??????????? // FIXME
     * Get the airports that own the flight const.
     * It says: One flight const belongs to many airports
     */
    public function airports()
    {
        return $this->belongsToMany('App\Airport');
    }
}
