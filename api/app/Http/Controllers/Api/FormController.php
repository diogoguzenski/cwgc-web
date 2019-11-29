<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Form;
use App\API\ApiError;

class FormController extends Controller
{
	public function __construct(Form $form){
		response();
		$this->form = $form;
	}
	public function index(){
		$data = $this->form->all();
        //$data = ['data' =>$this->post->paginate(10)]; // post-> all() /sem paginate
		return response()->json($data);
	}
	public function store(Request $request){
		try{
			$formData = $request->all();
			$this ->form->create($formData);
			$return =['data' => ['msg' => 'Form criado com sucesso!']];
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
			$formData = $request->all();
			$form = $this -> form->find($id);
			$form -> update($formData);
			$return =['data' => ['msg' => 'Form Atualizado com sucesso!']];
			return response()-> json ($return,201);
		}catch(\Exception $e){
			if (config('app.debug')){
				return response() -> json(ApiError::errorMessage($e->getMessage(),1011));
			}
			return response()-> json(ApiError::errorMessage('Houve um erro ao realizar operação',1011),500);
		}
	}
	public function delete (Form $id){
		try{
			$id -> delete();
			return response() -> json(['data' => ['msg' => 'Form '. $id->name .' removido com sucesso!']],200);
		}catch(\Exception $e){
			if (config('app.debug')){
				return response() -> json(ApiError::errorMessage($e->getMessage(),1012),500);
			}
			return response()-> json(ApiError::errorMessage('Houve um erro ao realizar operação',1012),500);
		}
	}
}