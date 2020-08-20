<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Country extends Model {


    /**
     * To assign a primary key other than 'id'
     *
     * @var
     */
    protected $primaryKey = 'a3_iso_code';
    public $incrementing = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'a3_iso_code', 'name',
    ];

}
