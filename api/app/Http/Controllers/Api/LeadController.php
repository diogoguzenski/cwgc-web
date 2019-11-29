<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Lead;
use Illuminate\Http\Request;
use App\API\ApiError;

class LeadController extends Controller
{
    public function __construct(Lead $lead){
		response();
		$this->lead = $lead;
    }
    public function index(){
        $data = $this->lead->all(); 
        return response()->json($data);
	}
	
	public function getByFunnelLevelId($id){
        $data = $this->lead -> where('funnel_level_id', $id)->get();
        return response()->json($data);
    }

    public function show($id){
		$lead = $this -> lead -> find($id);
		if(! $lead){
			return response()->json(ApiError::errorMessage('lead não encontrado',4040),404);
		}
		
		$data = ['data' => $lead];
    	return response()-> json($data);
    }
    public function store(Request $request){
    	try{
    		$leadData = $request->all();
    		$this -> lead->create($leadData);
    		$return =['data' => ['msg' => 'lead criado com sucesso!']];
    		return response()-> json ($return,201);
    	}catch(\Exception $e){
    		if (config('app.debug')){
    			return response() -> json(ApiError::errorMessage($e->getMessage(),1010),500);
    		}
    		return response()-> json(ApiError::errorMessage('Houve um erro ao realizar operação',1010),500);
    	}
    }

    public function update(Request $request, $id){
    	try{
    		$leadData = $request->all();
    		$lead = $this -> lead->find($id);
    		$lead -> update($leadData);
    		$return =['data' => ['msg' => 'lead Atualizado com sucesso!']];
    		return response()-> json ($return,201);
    	}catch(\Exception $e){
    		if (config('app.debug')){
    			return response() -> json(ApiError::errorMessage($e->getMessage(),1011));
    		}
    		return response()-> json(ApiError::errorMessage('Houve um erro ao realizar operação',1011),500);
    	}
    }
    public function delete (lead $id){
    	try{
    		$id -> delete();
    		return response() -> json(['data' => ['msg' => 'lead '. $id->name .' removido com sucesso!']],200);
    	}catch(\Exception $e){
    		if (config('app.debug')){
    			return response() -> json(ApiError::errorMessage($e->getMessage(),1012),500);
    		}
    		return response()-> json(ApiError::errorMessage('Houve um erro ao realizar operação',1012),500);
    	}
    }
}
