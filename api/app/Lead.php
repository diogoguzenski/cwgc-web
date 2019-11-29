<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lead extends Model
{
    protected $fillable = [
        'id', 
        'name',
        'email',
        'phone',
        'city',
        'address',
        'funnel_level_id',
        'origin',
        'comments',
    ];
}
