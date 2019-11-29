<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Funnel;
use App\API\ApiError;

class FunnelController extends Controller
{
	public function __construct(Funnel $funnel){
		response();
		$this->funnel = $funnel;
	}
	public function index(){
		$data = $this->funnel->all();
        //$data = ['data' =>$this->post->paginate(10)]; // post-> all() /sem paginate
		return response()->json($data);
	}
	public function store(Request $request){
		try{
			$data = $request->all();
			$this ->funnel->create($data);
			$return =['data' => ['msg' => $request]];
			return response()-> json ($return,201);
		}catch(\Exception $e){
			if (config('app.debug')){
				return response() -> json(ApiError::errorMessage($e->getMessage(),1010),500);
			}
			return response()-> json(ApiError::errorMessage('Houve um erro ao realizar operação',1010),500);
		}
	}
    // public function show($id){
	// 	// $FunnelLevel = new FunnellevelController();
	// 	// $funnel = $this -> post -> find($id);
	// 	// $funnellevel = $FunnelLevel->getByPostId($id);
	// 	// if(! $funnel){
	// 	// 	return response()->json(ApiError::errorMessage('Funil não encontrado',4040),404);
	// 	// }

	// 	$data = ['data' => $funnel, 'meta' => $funnellevel];
    // 	return response()-> json($data);
    // }
}
