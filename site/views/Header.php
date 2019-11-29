<!DOCTYPE html>
<html lang="pt-br">
<head>
    <?php require('head.php'); ?>
</head>

<body class="page-parent template-slider layout-full-width header-classic subheader-transparent sticky-header sticky-white subheader-title-left">
    <div id="Wrapper">
        <div id="Header_wrapper">
            <header id="Header">
                <div id="Action_bar">
                    <div class="container">
                        <div class="column one">
                            <ul class="contact_details">
                                <li class="phone">
                                    <i class="icon-phone"></i><a href="tel:+<?=$options["enterprisephone"]?>"><?=$options["enterprisephone"]?></a>
                                </li>
                                <li class="mail">
                                    <i class="icon-mail-line"></i><a href="mailto:<?=$options["enterpriseemail"]?>"><?=$options["enterpriseemail"]?></a>
                                </li>
                            </ul>
                            <ul class="social">
                                <li class="facebook">
                                    <a href="<?=$options["enterprisefacebook"]?>" target="_blank" title="Facebook"><i class="icon-facebook"></i></a>
                                </li>
                                <li class="instagram">
                                    <a href="<?=$options["enterpriseinstagram"]?>" target="_blank" title="Instagram"><i class="icon-instagram"></i></a>
                                </li>
                                <li class="googleplus">
                                    <a href="<?=$options["enterprisegoogleplus"]?>" target="_blank" title="Google+"><i class="icon-gplus"></i></a>
                                </li>
                                <li class="twitter">
                                    <a href="<?=$options["enterprisetwitter"]?>" target="_blank" title="Twitter"><i class="icon-twitter"></i></a>
                                </li>
                                <li class="vimeo">
                                    <a href="<?=$options["enterprisevimeo"]?>" target="_blank" title="Vimeo"><i class="icon-vimeo"></i></a>
                                </li>
                                <li class="youtube">
                                    <a href="<?=$options["enterpriseyoutube"]?>" target="_blank" title="YouTube"><i class="icon-play"></i></a>
                                </li>
                                <li class="pinterest">
                                    <a href="<?=$options["enterprisepinterest"]?>" target="_blank" title="Pinterest"><i class="icon-pinterest"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="Top_bar">
                    <div class="container">
                        <div class="column one">
                            <div class="top_bar_left clearfix">
                                <div class="logo">
                                    <a id="logo" href="<?=$this -> siteurl?>" title=""><img class="scale-with-grid" src="<?=$options["lightlogo"]?>" alt="" />
                                    </a>
                                </div>
                                <div class="menu_wrapper">
                                    <nav id="menu">
                                        <ul id="menu-main-menu" class="menu">
                                            <?php foreach ($permalinks as $item) { ?>
                                                <li>
                                                    <a href="<?=$this -> siteurl.'/'.$item["permalink"]?>"><span><?=$item["name"]?></span></a>
                                                </li>
                                            <?php } ?>
                                        </ul>
                                    </nav><a class="responsive-menu-toggle" href="#"><i class="icon-menu"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
        
        