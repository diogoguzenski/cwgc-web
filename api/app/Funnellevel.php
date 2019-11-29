<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Funnellevel extends Model
{
    public function funnel(){
        return $this->belongsTo('App\Funnel');
    }
        
    protected $fillable = [
        'name', 
        'description',
        'status',
        'funnel_id'
    ];
}
