<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Option;
use App\Menu;
use Illuminate\Http\Request;
use App\API\ApiError;

class OptionsController extends Controller
{
    public function __construct(Option $option){
		response();
		$this->option = $option;
    }
    public function index(){
        $data = $this->option->all(); 
        return response()->json($data);
    }
    // public function showMenu(){
    //     $menu = Menu::menu->all();
    //     return response()-> json($menu);
    // }
    public function show($opt){
		$option = Option::where('option',$opt)->get();
		if(! $option){
			return response()->json(ApiError::errorMessage('option não encontrado',4040),404);
		}
    	return response()-> json($option[0]);
    }
    public function store(Request $request){
    	try{
    		$optionData = $request->all();
    		$this -> option->create($optionData);
    		$return =['data' => ['msg' => 'option criado com sucesso!']];
    		return response()-> json ($return,201);
    	}catch(\Exception $e){
    		if (config('app.debug')){
    			return response() -> json(ApiError::errorMessage($e->getMessage(),1010),500);
    		}
    		return response()-> json(ApiError::errorMessage('Houve um erro ao realizar operação',1010),500);
    	}
    }

    public function update(Request $request, $opt){
    	try{
			$optionData = $request->all();
			$option = Option::where('option',$opt)->get();
    		$option[0] -> update($optionData);
    		$return =['data' => ['msg' => 'option Atualizado com sucesso!']];
    		return response()-> json ($return,201);
    	}catch(\Exception $e){
    		if (config('app.debug')){
    			return response() -> json(ApiError::errorMessage($e->getMessage(),1011));
    		}
    		return response()-> json(ApiError::errorMessage('Houve um erro ao realizar operação',1011),500);
    	}
    }

    public function delete (option $id){
    	try{
    		$id -> delete();
    		return response() -> json(['data' => ['msg' => 'option '. $id->name .' removido com sucesso!']],200);
    	}catch(\Exception $e){
    		if (config('app.debug')){
    			return response() -> json(ApiError::errorMessage($e->getMessage(),1012),500);
    		}
    		return response()-> json(ApiError::errorMessage('Houve um erro ao realizar operação',1012),500);
    	}
    }
}
