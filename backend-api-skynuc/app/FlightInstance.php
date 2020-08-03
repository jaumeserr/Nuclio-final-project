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

}
