<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Postmeta extends Model
{
    public function post(){
        return $this->belongsTo('App\Post');
    }
    protected $fillable = [
    	'post_id',
        'metavalue',
        'metakey'
    ];
}
