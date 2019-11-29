<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Funnellevel;
use App\API\ApiError;


class FunnellevelController extends Controller
{
    public function __construct(Funnellevel $funnellevel){
		response();
		$this->funnellevel = $funnellevel;
    }
    public function index(){
		$data = $this->funnellevel->all();
        //$data = ['data' =>$this->post->paginate(10)]; // post-> all() /sem paginate
        return response()->json($data);
    }
    public function getByFunnelId($id){
        $data = funnellevel::where('funnel_id', $id)->get();
        return response()->json($data);
    }
    public function store(Request $request){
    	try{
    		$data = $request->all();
    		$this -> funnellevel->create($data);
    		$return =['data' => ['msg' => 'Etapa de funil criado com sucesso!']];
    		return response()-> json ($return,201);
    	}catch(\Exception $e){
    		if (config('app.debug')){
    			return response() -> json(ApiError::errorMessage($e->getMessage(),1010),500);
    		}
    		return response()-> json(ApiError::errorMessage('Houve um erro ao realizar operação',1010),500);
    	}
    }
}
