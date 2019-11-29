<?php
class SiteController{
	var $siteurl;
	var $siteoptionsModel;
	function __construct(){
		require_once($_SERVER['DOCUMENT_ROOT']."/tcc/site/models/SiteModel.php");
		$this -> SiteModel = new SiteModel();
		$this -> siteurl = "http://localhost/tcc";
	}
	public function index(){
		$URL = explode('/', substr($_SERVER['REQUEST_URI'], 5));
		$permalinks = $this -> SiteModel -> permalinks();
		// print_r($URL);
		// print_r($permalinks);
		if($URL[0]==''){
			$post = $this -> SiteModel -> getPost(array_search('home', $permalinks)); 
			if($post["post"]["type"]=='page' and $post["post"]["status"]=='Ativo'){
				$this -> page($post);
			}else{
				$this -> pageNotFound();
			}
			$this ->home();
		}
		else{
			switch ($URL[0]) {
				case 'home':
					$post = $this -> SiteModel -> getPost(array_search($URL[0], $permalinks)); 
					if($post["post"]["type"]=='page' and $post["post"]["status"]=='Ativo'){
						$this -> page($post);
					}else{
						$this -> pageNotFound();
					}
					$this ->home();
				break;

				case 'blog':
				if (isset($URL[1])){
					if (in_array($URL[1], $permalinks)){
						$post = $this -> SiteModel -> getPost(array_search($URL[1], $permalinks)); 
						if($post["post"]["type"]=='post' and $post["post"]["status"]=='Ativo'){
							$this -> post($post);
						}else{
							$this -> pageNotFound();
						}
					}
				}else if (in_array($URL[0], $permalinks)){
					$post = $this -> SiteModel -> getPost(array_search($URL[0], $permalinks)); 
					if($post["post"]["type"]=='page' and $post["post"]["status"]=='Ativo'){
						$this -> page($post);
					}
				}
				break;
				
				default:
				if (in_array($URL[0], $permalinks)){
					$post = $this -> SiteModel -> getPost(array_search($URL[0], $permalinks)); 
					if($post["post"]["type"]=='page' and $post["post"]["status"]=='Ativo'){
						$this -> page($post);
					}else{
						$this -> pageNotFound();
					}
				}
				break;
			}
		}
	}
	public function home(){
		$options = $this -> SiteModel -> headerOptions();
		$permalinks = $this -> SiteModel -> menu();
		$forms = $this -> SiteModel -> forms();
		$formsTags = $this -> SiteModel -> formsTags();
		require_once("site/views/Header.php");
		require_once("site/views/single-post.php");
		require_once("site/views/Footer.php");
	}
	public function page($post){
		$options = $this -> SiteModel -> headerOptions();
		$permalinks = $this -> SiteModel -> menu();
		$forms = $this -> SiteModel -> forms();
		$formsTags = $this -> SiteModel -> formsTags();
		require_once("site/views/Header.php");
		require_once("site/views/single-post.php");
		require_once("site/views/Footer.php");
	}
	public function post($post){

		$options = $this -> SiteModel -> headerOptions();
		$permalinks = $this -> SiteModel -> menu();
		$forms = $this -> SiteModel -> forms();
		$formsTags = $this -> SiteModel -> formsTags();
		require_once("site/views/Header.php");
		require_once("site/views/single-post.php");
		require_once("site/views/Footer.php");
	}

	public function enviaForm(){
		$options = $this -> SiteModel -> headerOptions();

		$permalinks = $this -> SiteModel -> menu();
		require_once($_SERVER['DOCUMENT_ROOT']."/tcc/site/views/Header.php");
		require_once($_SERVER['DOCUMENT_ROOT']."/tcc/site/views/Enviado.php");
		require_once($_SERVER['DOCUMENT_ROOT']."/tcc/site/views/Footer.php");
		$this -> SiteModel -> enviaForm($_POST);

	}
	public function pageNotFound(){
		echo "404";
	}
}
