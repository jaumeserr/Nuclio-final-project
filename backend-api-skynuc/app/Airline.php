<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Airline extends BaseModel {

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'two_letter_code';

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
        'two_letter_code', 'name', 'logo_url',
    ];

    /**
     * Get the flight consts for the given airline.
     * It says: One airline has many flight consts
     */
    public function flightConsts()
    {
        return $this->hasMany('App\FlightConst');
    }
}
