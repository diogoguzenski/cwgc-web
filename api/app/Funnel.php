<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Funnel extends Model
{
    public function funnelLevel(){
        return $this->hasMany('App\FunnelLevel');
    }
    
    protected $fillable = [
        'name', 
        'description',
        'status'
    ];
    
}
