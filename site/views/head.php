 <meta charset="utf-8">
 <title><?=$options["sitename"]?></title>
 <meta name="description" content="<?=isset($post["post"]["excerpt"]) ? $post["post"]["excerpt"] : $options["sitedesc"]?>">
 <meta name="author" content="">
 <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

 <link rel="shortcut icon" href="<?= $this -> siteurl?>/site/content/images/favicon.ico">
 <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Roboto:100,300,400,400italic,700'>
 <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Patua+One:100,300,400,400italic,700'>

 <link rel='stylesheet' href='<?= $this -> siteurl?>/site/content/css/global.css'>
 <link rel='stylesheet' href='<?= $this -> siteurl?>/site/content/css/structure.css'>
 <link rel='stylesheet' id='style-static' href='<?= $this -> siteurl?>/site/content/css/be_style.css'>
 <link rel='stylesheet' href='<?= $this -> siteurl?>/site/content/css/custom.css'>

 <?php 
 echo '<style type="text/css">
        #Header .top_bar_left, #Header_creative, #Top_bar #menu, .header-below #Top_bar, .header-classic #Top_bar, .header-fixed #Top_bar, .header-stack #Top_bar {
 background-color:'.$options["headercolor"].';
}
                #Top_bar .menu > li.current-menu-ancestor > a, #Top_bar .menu > li.current-menu-item > a, #Top_bar .menu > li.current_page_ancestor > a, #Top_bar .menu > li.current_page_item > a, #Top_bar .menu > li.hover > a, #Top_bar .menu > li > a{
color:'.$options["headerlinkcolor"].';
}
a.button_theme, a.tp-button.button_theme, button, input[type=button], input[type=reset], input[type=submit] {
	color:'.$options["darktitlecolor"].' !important;
	background:'.$options["lighttitlecolor"].'!important;
}
a{
	color:'.$options["lighttitlecolor"].';
}
a:hover{
	color:'.$options["lightcontentcolor"].';	
}
.header-classic #Action_bar a, .header-stack #Action_bar a {
    color: #e2e2e2;
}
</style>';
?>