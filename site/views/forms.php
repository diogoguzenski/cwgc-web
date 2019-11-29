<?php 
$name = true ;
$email= true;
$phone= true;
$city= true;
$address= true;
$comments= true;
$funnel_level_id= '';
$origin = '';
$funnel_id = '';
foreach ($forms as $f){
	if($f["short_tag"] == $tag){
		$array = explode(',', $f["inputs"]);
		// print_r($array);
		foreach ($array as $item){
			if (strpos($item, "funnel_level_id") !== false){
				$funnel_level_id =  explode(':', $item);
				$funnel_level_id = $funnel_level_id[1];
			}else if(strpos($item, "funnel_id") !== false){
				$funnel_id =  explode(':', $item);
				$funnel_id = $funnel_id[1];
			}else if(strpos($item, "origin") !== false){
				$origin =  explode(':', $item);
				$origin = $origin[1];
			}
			else if (strpos($item, "true") !== false){
				if (strpos($item, "name") !== false){
					$name = true;
				}
				if (strpos($item, "email") !== false){
					$email = true;
				}
				if (strpos($item, "phone") !== false){
					$phone = true;
				}
				if (strpos($item, "city") !== false){
					$city = true;
				}
				if (strpos($item, "address") !== false){
					$address = true;
				}
				if (strpos($item, "comments") !== false){
					$comments = true;
				}
			}
			else{
				if (strpos($item, "name") !== false){
					$name = false;
				}
				if (strpos($item, "email") !== false){
					$email = false;
				}
				if (strpos($item, "phone") !== false){
					$phone = false;
				}
				if (strpos($item, "city") !== false){
					$city = false;
				}
				if (strpos($item, "address") !== false){
					$address = false;
				}
				if (strpos($item, "comments") !== false){
					$comments = false;
				}
			}
		}
	}
		// print_r($array);
	$form = array(
		[
			'label' => 'Nome completo',
			'name' => 'name',
			'type' => 'text',
			'required' => 'true',
			'status' => $name
		],
		[
			'label' => 'Telefone',
			'name' => 'phone',
			'type' => 'text',
			'required' => 'true',
			'status' => $phone
		],
		[
			'label' => 'Cidade',
			'name' => 'city',
			'type' => 'text',
			'required' => 'true',
			'status' => $city
		],
		[
			'label' => 'Endereço',
			'name' => 'address',
			'type' => 'text',
			'required' => 'true',
			'status' => $address
		],
		[
			'label' => 'E-mail',
			'name' => 'email',
			'type' => 'email',
			'required' => 'true',
			'status' => $email
		],
		[
			'label' => 'Mensagem',
			'name' => 'comments',
			'type' => 'textarea',
			'required' => 'false',
			'status' => $comments
		]
	);
} ?>

<div id="contactWrapper">
	<form action="site/controllers/enviaform.php" method="post" id="contactform">
		<input type="hidden" name="origin" value="<?=$origin?>">
		<input type="hidden" name="funnel_id" value="<?=$funnel_id?>">
		<input type="hidden" name="funnel_level_id" value="<?=$funnel_level_id?>">
		<?php foreach ($form as $f) { 
			if ($f["type"]!== "textarea") {
				if ($f["status"]!== false){?>
					<div class="column one-third">
						<label><?=$f["label"]?></label>
						<span>
							<input type="<?=$f["type"]?>" name="<?=$f["name"]?>" <?=$f["required"]=='true' ?'required': ''?> size="40" aria-required="true" aria-invalid="false" />
						</span>
					</div>
				<?php } 
			} else if ($f["status"]!== false){?>
				<div class="column one">
					<label><?=$f["label"]?></label><span> 																
						<textarea name="<?=$f["name"]?>" <?=$f["required"]=='true' ?'required': ''?> class="flv_style_38" rows="10" aria-invalid="false"></textarea>
					</span>
				</div>
			<?php }
		} ?>

		<div class="column one">
			<input type="submit" class="btn" value="Enviar" id="submit">
		</div>
	</form>
</div>