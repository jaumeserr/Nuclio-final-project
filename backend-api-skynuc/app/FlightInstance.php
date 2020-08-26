<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FlightInstance extends Model {

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'dpt_datetime', 'arr_datetime', 'flight_consts_flight_num', 'price_eur'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'dpt_datetime' => 'datetime',
        'arr_datetime' => 'datetime',
    ];

    /**
     * Get the flight const that owns the flight instance.
     * It says: One flight instance belongs to a flight const
     */
    public function flightConst()
    {
        return $this->belongsTo('App\FlightConst');
    }

}
