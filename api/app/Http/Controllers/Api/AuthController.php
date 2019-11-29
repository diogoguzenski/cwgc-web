<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Tymon\JWTAuth\JWTAuth;
class AuthController extends Controller
{

    /**
     * @var JWTauth
     */
    private $jwtAuth;
    
    public function __construct(JWTauth $jwtAuth){
        $this -> jwtAuth = $jwtAuth;
    }

    public function login(Request $request)
    {
        // grab credentials from the request
        $credentials = $request->only('email', 'password');

            // attempt to verify the credentials and create a token for the user
            if (! $token = $this->jwtAuth->attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
            // all good so return the token
            $user = $this->jwtAuth->user();
            return response()->json(compact('token','user'));
    }
    
    public function refresh(){
        $token = $this->jwtAuth->getToken();
        $token = $this->jwtAuth->refresh($token);
        
        return response()-> json(compact('token'));
    }

    public function logout(){
        $token = $this->jwtAuth->getToken();
        $this->jwtAuth->invalidate($token);
        
        return response()-> json('logout');

    }

    public function me(){
        if (! $user = $this->jwtAuth->parseToken()->authenticate()) {
            return response()->json(['error' => 'user_not_found'], 404);
        }
        // the token is valid and we have found the user via the sub claim
        return response()->json(compact('user'));
    }

}
