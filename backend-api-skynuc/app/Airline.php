<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Airline extends Model {

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'two_letter_code', 'name', 'logo_url',
    ];

}
