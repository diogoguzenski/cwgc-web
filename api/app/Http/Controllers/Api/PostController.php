<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Post;
use App\Http\Controllers\Api\PostmetaController;
use Illuminate\Http\Request;
use App\API\ApiError;
use App\Postmeta;

class PostController extends Controller
{
	public function __construct(Post $post){
		response();
		$this->post = $post;
	}
	public function index(){
		$data = $this->post->all();
        //$data = ['data' =>$this->post->paginate(10)]; // post-> all() /sem paginate
        return response()->json($data);
	}
	public function pages(){
		$data = $this->post->where('type','=','page')->get();
        return response()->json($data);
	}
	public function posts(){
		$data = $this->post->where('type','=','post')->get();
        return response()->json($data);
    }
    public function show($id){
		$post = $this -> post -> find($id);
		$postmeta = PostMeta::where('post_id', $id)->get();
		if(! $post){
			return response()->json(ApiError::errorMessage('Post não encontrado',4040),404);
		}
		
		$data = ['data' => $post, 'meta' => $postmeta];
    	return response()-> json($data);
    }
    public function getcontent($id){
        header('Content-Type: application/json');
        // header('Access-Control-Allow-Origin: *'); 
        // header('Access-Control-Allow-Methods: *'); 
        // header('Access-Control-Allow-Headers: Origin, X-Requested-With,Authorization, Content-Type, Accept');
        // echo ("getContent chegou aqui");
        // $content = Posts::select('content')::where('id', $id)->get();
        // $contentPage = Contents::whereId($id)->first();
        $content = $this -> post->where('id',$id) -> get('content');
        // $postmeta = PostMeta::where('post_id', $id)->get();
        // if(! $content){
        //     return response()->json(ApiError::errorMessage('Post não encontrado',4040),404);
        // }
        // else{
        //     header('Content-Type: application/json');
        //     echo json_encode($content); 
        // }
        
        $data = $content;
        // if ($contentPage === null) {
        //     $contentPage = new ContentPage();
        //     Self::addContent($contentPage, $id, '');
        // }
        // $data = [
        //     'gjs-assets' =>  $contentPage->getAttribute('assets'),
        //     'gjs-css' =>  $contentPage->getAttribute('css'),
        //     'gjs-styles' =>  $contentPage->getAttribute('styles'),
        //     'gjs-html' =>  $contentPage->getAttribute('html'),
        //     'gjs-components' =>  $contentPage->getAttribute('components')
        // ];

        return response()-> json($data);
    }
    public function updateContent(Request $request, $id){
        // header('Access-Control-Allow-Origin: *'); 
        // header('Access-Control-Allow-Methods: *'); 
        // header('Access-Control-Allow-Headers: Origin, X-Requested-With,Authorization, Content-Type, Accept');
        echo ("updateContent chegou aqui");
        try{
            $postContent = $request->all();
            $post = $this -> post->find($id);
            $post -> update($postContent);
            $return =['data' => ['msg' => 'Post Atualizado com sucesso!']];
            return response()-> json ($return,201);
        }catch(\Exception $e){
            if (config('app.debug')){
                return response() -> json(ApiError::errorMessage($e->getMessage(),1011));
            }
            return response()-> json(ApiError::errorMessage('Houve um erro ao realizar operação',1011),500);
        }
    }
    public function store(Request $request){
    	try{
    		$postData = $request->all();
    		$id = $this -> post->insertGetId($postData);

    		// $return =['data' => ['msg' => 'Post criado com sucesso!', 'last_insert_id' => $id ]];
    		return response()-> json ($id, 201);
    	}catch(\Exception $e){
    		if (config('app.debug')){
    			return response() -> json(ApiError::errorMessage($e->getMessage(),1010),500);
    		}
    		return response()-> json(ApiError::errorMessage('Houve um erro ao realizar operação',1010),500);
    	}
    }

    public function update(Request $request, $id){
    	try{
    		$postData = $request->all();
    		$post = $this -> post->find($id);
    		$post -> update($postData);
    		$return =['data' => ['msg' => 'Post Atualizado com sucesso!']];
    		return response()-> json ($return,201);
    	}catch(\Exception $e){
    		if (config('app.debug')){
    			return response() -> json(ApiError::errorMessage($e->getMessage(),1011));
    		}
    		return response()-> json(ApiError::errorMessage('Houve um erro ao realizar operação',1011),500);
    	}
    }
    public function delete (Post $id){
    	try{
    		$id -> delete();
    		return response() -> json(['data' => ['msg' => 'Post '. $id->name .' removido com sucesso!']],200);
    	}catch(\Exception $e){
    		if (config('app.debug')){
    			return response() -> json(ApiError::errorMessage($e->getMessage(),1012),500);
    		}
    		return response()-> json(ApiError::errorMessage('Houve um erro ao realizar operação',1012),500);
    	}
    }

}

