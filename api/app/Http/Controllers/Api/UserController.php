<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use App\API\ApiError;

class UserController extends Controller
{
    public function __construct(User $user){
		response();
		$this->user = $user;
    }
    public function index(){
        $data = $this->user->all(); 
        return response()->json($data);
    }
}
