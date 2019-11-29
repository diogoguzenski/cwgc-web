<?php
function findTagAndInjectForm($post, $formsTags, $forms){
	foreach ($formsTags as $item) {
		$find = strpos($post["post"]["content"],$item);
		if($find != false){
			$post["post"]["content"] = str_replace($item, '',$post["post"]["content"]);
			echo (substr($post["post"]["content"], 0, $find));
			$tag = $item;
			require_once("forms.php");
			echo (substr($post["post"]["content"], $find));
			return true;
		}
	}
	return false;
}

?>
<div id="Content">
	<div class="container content_wrapper clearfix">
		<div class="sections_group">
			<div class="entry-content">
				<div class="section">
					<?php if (findTagAndInjectForm($post, $formsTags, $forms)){}
					else{?>
						<?=$post["post"]["content"]?>
					<?php } ?>
				</div>
			</div>
		</div>
	</div>
</div>