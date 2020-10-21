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

    /** //FIXME - Revisar relaciones - Facundo
     * Get the flight consts that owns the departure airport.
     * It says: One departure airport belongs to many flight consts
     */
    public function flightConsts2()
    {
        return $this->belongsToMany('App\FlightConsts', 'iata');
    }

    /** //FIXME - Revisar relaciones - Facundo
     * Get the flight consts that owns the departure airport.
     * It says: One departure airport belongs to many flight consts
     */
    public function flightConsts3()
    {
        return $this->belongsToMany('App\FlightConsts', 'iata');
    }
}
