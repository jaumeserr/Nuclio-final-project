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

}
