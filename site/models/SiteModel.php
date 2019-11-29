<?php 
class SiteModel{
	var $url = "http://127.0.0.1:8000/api/";
	public function headerOptions(){
		$consult = $this -> getResult('options');
		$array;
		foreach ($consult as $item) {
			$array[$item -> option]= $item -> option_value;
			// print_r($item);
		}
		return $array;
	}
	public function getPostId($post){
		$consult = $this -> getResult('metas/permalinks');
		foreach ($consult as $item){
			if($item->metavalue){
				return $item -> post_id;
			}
		}
	}
	public function getPost($post_id){		
		$consult = $this ->getResult('posts/'.$post_id);
		$array;
		foreach ($consult as $item) {
			if (is_array($item)){
				foreach ($item as $i) {
					$array["meta"][$i -> metakey] = get_object_vars($i); 
				}
			}else{
				// $array["post"] = str_replace("&nbsp;", "<br>", get_object_vars($item));
				$array["post"] = get_object_vars($item);
			}
		}
		
		return $array;
	}
	public function menu(){
		$consult = $this -> getResult('metas/permalinksmenu');
		$array;
		foreach ($consult as $item) {
			$array[$item -> id] = [
				"post_id" => $item -> post_id,
				"name" => $item -> name,
				"permalink" => $item -> metavalue,
			];
		}
		return $array;
	}
	public function permalinks(){
		$consult = $this -> getResult('metas/permalinks');
		$array;
		foreach ($consult as $item) {
			$array[$item -> post_id] = $item -> metavalue;
		}
		return $array;
	}
	public function permalinksWithName(){
		$consult = $this -> getResult('metas/permalinks');
		$array;
		foreach ($consult as $item) {
			$array[$item -> post_id] =[
				"link" =>  $item -> metavalue,
				"title" => $item -> metakey
			];
		}
		return $array;
	}
	public function forms(){
		$consult = $this -> getResult('forms');
		$array;
		$i=0;
		foreach ($consult as $item){
			// print_r($item);
			$array[$i] = get_object_vars($item);
			$i++;
		}
		return $array;
	}
	public function formsTags(){
		$consult = $this -> getResult('forms');
		$array;
		foreach ($consult as $item){
			$array[$item -> id] =  $item -> short_tag;
			// $array["tags"] = get_object_vars($item);
		}
		return $array;
	}
	public function enviaForm($content){
		$data = $content;
		//  array(
		// 	'election' => 1,
		// 	'name' => 'Test'
		// );
		$url = "http://127.0.0.1:8000/api/leads";
		$ch = curl_init($url);
		$postString = http_build_query($data, '', '&');
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $postString);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		$response = curl_exec($ch);
		curl_close($ch);
	}
	public function getResult($parameter){
		return json_decode(file_get_contents($this -> url.$parameter));
	}
}