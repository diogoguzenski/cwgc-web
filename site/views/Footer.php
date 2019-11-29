
<!-- Footer-->
<footer id="Footer" class="clearfix">
<!--             <div class="footer_action">
                <div class="container">
                    <div class="column one column_column">
                        <a href="http://bit.ly/1M6lijQ" class="flv_footer_grey" target="_blank"><span class="flv_font_18">If you are interested in <span class="themecolor">Be|</span><span class="flv_color_white">theme</span>, do not wait and <span class="flv_color_white">BUY IT NOW!</span></span></a>
                    </div>
                </div>
            </div> -->
            <div class="widgets_wrapper">
                <div class="container">
                    <div class="one-third column">
                        <aside id="text-7" class="widget widget_text">
                            <div class="logo">
                                <a id="logo" href="home" title=""><img class="scale-with-grid" src="<?=$options["darklogo"]?>" alt="" />
                                </a>
                            </div>
                        </aside>
                    </div>
                    <div class="one-third column">
                        <aside class="widget widget_mfn_recent_posts">
                            <h4>Publicações recentes</h4>
                            <div class="Recent_posts">
                                <ul>
                                    <li class="post ">
                                        <a href="blog-single-content-builder.html">
                                            <div class="photo"><img width="80" height="80" src="<?= $this -> siteurl?>/site/content/images/beauty_portfolio_2-80x80.jpg" class="scale-with-grid wp-post-image" alt="beauty_portfolio_2" /><span class="c">4</span>
                                            </div>
                                            <div class="desc">
                                                <h6>Content builder for posts</h6><span class="date"><i class="icon-clock"></i>May 13, 2015</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="post format-image">
                                        <a href="blog-single-vertical-photo.html">
                                            <div class="photo"><img width="80" height="80" src="<?= $this -> siteurl?>/site/content/images/blog_vertical-80x80.jpg" class="scale-with-grid wp-post-image" alt="blog_vertical" /><span class="c">0</span>
                                            </div>
                                            <div class="desc">
                                                <h6>Post with vertical photo</h6><span class="date"><i class="icon-clock"></i>May 13, 2015</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                    <div class="one-third column">
                        <aside id="text-8" class="widget widget_text">
                            <h4>Some features</h4>
                            <div class="textwidget">
                                <ul class="list_mixed">
                                    <li class="list_check">
                                        Suspendisse a pellentesque dui, non felis.
                                    </li>
                                    <li class="list_star">
                                        Quisque lorem tortor fringilla sed.
                                    </li>
                                    <li class="list_idea">
                                        Quisque cursus et, porttitor risus.
                                    </li>
                                    <li class="list_check">
                                        Nulla ipsum dolor lacus, suscipit.
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
            <!-- Footer copyright-->
            <div class="footer_copy">
                <div class="container">
                    <div class="column one">
                        <a id="back_to_top" href="#" class="button button_left button_js"><span class="button_icon"><i class="icon-up-open-big"></i></span></a>
                        <div class="copyright">
                            &copy; <?=date("Y")?> <?=$options["sitename"]?> - Todos os direitos reservados.
                        </div>
                        <!--Social info area-->
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
        </footer>
    </div>


    <!-- JS -->

    <script src="<?= $this -> siteurl?>/site/content/js/jquery-2.1.4.min.js"></script>

    <script src="<?= $this -> siteurl?>/site/content/js/mfn.menu.js"></script>
    <script src="<?= $this -> siteurl?>/site/content/js/jquery.plugins.js"></script>
    <script src="<?= $this -> siteurl?>/site/content/js/jquery.jplayer.min.js"></script>
    <script src="<?= $this -> siteurl?>/site/content/js/animations/animations.js"></script>
    <script src="<?= $this -> siteurl?>/site/content/js/email.js"></script>
    <script src="<?= $this -> siteurl?>/site/content/js/scripts.js"></script>



    <script>
        jQuery(window).load(function() {
            var retina = window.devicePixelRatio > 1 ? true : false;
            if (retina) {
                var retinaEl = jQuery("#logo img");
                var retinaLogoW = retinaEl.width();
                var retinaLogoH = retinaEl.height();
                retinaEl.attr("src", "<?= $this -> siteurl?>/site/content/images/logo-retina.png").width(retinaLogoW).height(retinaLogoH)
            }
        });
    </script>

</body>

</html>