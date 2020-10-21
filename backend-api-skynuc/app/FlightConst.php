<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FlightConst extends BaseModel {

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'flight_num';

    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = false;

    /**
     * The "type" of the auto-incrementing ID.
     *
     * @var string
     */
    protected $keyType = 'string';

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

    /** //FIXME - Revisar relaciones - Facundo
     * Get the departure airport for the given flight const.
     * It says: One flight const has one departure airport
     */
    public function dptAirport()
    {
        return $this->hasOne('App\Airport', 'dpt_airport_iata');
    }

    /** //FIXME - Revisar relaciones - Facundo
     * Get the arrival airport for the given flight const.
     * It says: One flight const has one arrival airport
     */
    public function arrAirport()
    {
        return $this->hasOne('App\Airport', 'arr_airport_iata');
    }

//    public function isArrival($arrival)
//    {
//        return $this->arrAirport()->
//    }
//
//    public function isDeparture($departure)
//    {
//
//    }
}
