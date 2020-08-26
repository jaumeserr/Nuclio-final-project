<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Airport extends Model {


     /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'iata';

     /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */

    public $incrementing = false;

    /**
     * The "type" of the auto-incrementing ID.

     * @var string
     */
    protected $keyType = 'string';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'iata', 'city_name',
    ];

    /**   ??????????? // FIXME
     * Get the flight consts for the given airport.
     * It says: One airport has many flight consts
     */
    public function flightConsts()
    {
        return $this->hasMany('App\FlightConsts');
    }
}
