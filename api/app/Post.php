<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    public function postMeta(){
        return $this->hasMany('App\PostMeta');
    }
    
    protected $fillable = [
        'name', 
        'content',
        'type',
        'meta_key',
        'comments_status',
        'status',
        'menu_item',
        'excerpt'
    ];
}
