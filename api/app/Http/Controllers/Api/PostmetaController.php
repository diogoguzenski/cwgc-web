<?php

namespace App\Http\Controllers\Api;

use App\Postmeta;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\API\ApiError;

class PostmetaController extends Controller
{
        public function __construct(Postmeta $meta){
		response();
		$this->meta = $meta;
        }
        public function index(){
                // $data = $this->meta->join('posts','postmetas.post_id','=','posts.id')->get();
		$data = $this->meta->all();
                return response()->json($data);
        }
        public function permalinks(){
		$data = $this->meta->where('metakey','=','permalink')->get();
                return response()->json($data);
	}
        public function permalinksMenu(){
                $data = $this->meta->join('posts','postmetas.post_id','=','posts.id')
                ->where('posts.menu_item','=','Sim')
                ->where('metakey','=','permalink')
                ->get();
                return response()->json($data);
        }

        public function store(Request $request){
                try{
                        $postData = $request->all();
                        $this -> meta->create($postData);
                        $return =['data' => ['msg' => 'Meta criado com sucesso!']];
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
                        $metaData = $request->all();
                        $meta = $this -> meta->find($id);
                        $meta -> update($metaData);
                        $return =['data' => ['msg' => 'Post Atualizado com sucesso!']];
                        return response()-> json ($return,201);
                }catch(\Exception $e){
                if (config('app.debug')){
                        return response() -> json(ApiError::errorMessage($e->getMessage(),1011));
                }
                        return response()-> json(ApiError::errorMessage('Houve um erro ao realizar operação',1011),500);
                }
        }
        public function getByPostId($id){
                $postmeta = PostMeta::where('post_id', $id)->get();
                return $postmeta;
        }
        
}
