		<div class="window-mobile inactivo">
			<div class="row_bookin" style="height: 90px;">
				<div class="col s12" >
					<a id="advanced_menu_hide1" href="#" aria-hidden="true" data-av_icon="" data-av_iconfont="entypo-fontello"></a>					
				</div>
			</div>
			<div class="row_bookin">
				<div class="col s12" id="contenedor-book-mobile">

				</div>
			</div>			
		</div>
		<div class="modal-webcam inactivo">
			<div class="row_bookin" style="height: 90px;">
				<div class="col s12" >
					<a id="hide-modal-webcam" href="#" aria-hidden="true" data-av_icon="" data-av_iconfont="entypo-fontello"></a>					
				</div>
			</div>
			<div class="row_bookin">
				<div class="col s12" id="contenedor-book-mobile">
					<div id="fancybox-content avia-image-container-inner" style="border-width: 5px;    text-align: center;/* width: 704px; *//* height: 480px; *//* z-index: 1102; */">
						<img id="fancybox-img" class="avia_image" src="" alt="" scale="0" style="position: relative;margin: 0 auto;">
					</div>
				</div>
			</div>			
		</div>	

		<div class="modal-text inactivo" style="
    overflow-y: auto;
">
			<div class="row_bookin" style="height: 90px;">
				<div class="col s12" >
					<a id="hide-modal-text" class="hide-modal-text" href="#" aria-hidden="true" data-av_icon="" data-av_iconfont="entypo-fontello"></a>					
				</div>
			</div>
			<div class="row_bookin">
				<div class="col s12" id="contenedor-book-mobile">
					<div id="fancybox-content avia-image-container-inner" class="contenido-fancybox-content" style="border-width:5px;text-align: center;">
						


					</div>
				</div>
			</div>			
		</div>	




		<?php
		do_action( 'ava_before_footer');	
			
		global $avia_config;
		$blank = isset($avia_config['template']) ? $avia_config['template'] : "";

		//reset wordpress query in case we modified it
		wp_reset_query();


		//get footer display settings
		$the_id 				= avia_get_the_id(); //use avia get the id instead of default get id. prevents notice on 404 pages
		$footer 				= get_post_meta($the_id, 'footer', true);
		$footer_widget_setting 	= !empty($footer) ? $footer : avia_get_option('display_widgets_socket');


		//check if we should display a footer
		if(!$blank && $footer_widget_setting != 'nofooterarea' )
		{
		/* Parte agregada [Inicio]*/
		// se agrega esta parte al footer como parte del diseño 
		?>

			<div id="sub_menu2" class="av-submenu-container main_color  avia-builder-el-67  el_after_av_section  avia-builder-el-last  submenu-not-first container_wrap fullsize" style="z-index:302"><div class="container av-menu-mobile-disabled "><ul id="menu-menu-footer" class="av-subnav-menu av-submenu-pos-center">
			<li id="menu-item-184" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-top-level menu-item-top-level-1"><a href="/" itemprop="url"><span class="avia-bullet"></span><span class="avia-menu-text">HOME</span><span class="avia-menu-fx"><span class="avia-arrow-wrap"><span class="avia-arrow"></span></span></span></a></li>
			<li id="menu-item-186" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-top-level menu-item-top-level-3"><a href="/about-royal-resorts/" itemprop="url"><span class="avia-bullet"></span><span class="avia-menu-text">ABOUT ROYAL RESORTS</span><span class="avia-menu-fx"><span class="avia-arrow-wrap"><span class="avia-arrow"></span></span></span></a></li>
			<li id="menu-item-187" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-top-level menu-item-top-level-4"><a href="/contact-us/" itemprop="url"><span class="avia-bullet"></span><span class="avia-menu-text">CONTACT US</span><span class="avia-menu-fx"><span class="avia-arrow-wrap"><span class="avia-arrow"></span></span></span></a></li>
			<li id="menu-item-188" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-top-level menu-item-top-level-5"><a href="/directory/" itemprop="url"><span class="avia-bullet"></span><span class="avia-menu-text">DIRECTORY</span><span class="avia-menu-fx"><span class="avia-arrow-wrap"><span class="avia-arrow"></span></span></span></a></li>
			<li id="menu-item-189" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-top-level menu-item-top-level-6"><a href="/faq/" itemprop="url"><span class="avia-bullet"></span><span class="avia-menu-text">FAQ</span><span class="avia-menu-fx"><span class="avia-arrow-wrap"><span class="avia-arrow"></span></span></span></a></li>
			<li id="menu-item-190" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-top-level menu-item-top-level-7"><a href="/privacy-policy/" itemprop="url"><span class="avia-bullet"></span><span class="avia-menu-text">PRIVACY POLICY</span><span class="avia-menu-fx"><span class="avia-arrow-wrap"><span class="avia-arrow"></span></span></span></a></li>
			<li id="menu-item-192" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-top-level menu-item-top-level-7"><a target="_blank" href="http://royalresortsfoundation.org/" itemprop="url"><span class="avia-bullet"></span><span class="avia-menu-text">ROYAL RESORTS FOUNDATION</span><span class="avia-menu-fx"><span class="avia-arrow-wrap"><span class="avia-arrow"></span></span></span></a></li>
			<li id="menu-item-193" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-top-level menu-item-top-level-8"><a href="/sitemap/" itemprop="url"><span class="avia-bullet"></span><span class="avia-menu-text">SITEMAP</span><span class="avia-menu-fx"><span class="avia-arrow-wrap"><span class="avia-arrow"></span></span></span></a></li>
			</ul></div></div>
 
		<?php	
		/* Parte agregada [Final]*/


			if( $footer_widget_setting != 'nofooterwidgets' )
			{
				//get columns
				$columns = avia_get_option('footer_columns');
		?>
				<div class='container_wrap footer_color' id='footer'>

					<div class='container'>

						<?php
						do_action('avia_before_footer_columns');

						//create the footer columns by iterating

						
				        switch($columns)
				        {
				        	case 1: $class = ''; break;
				        	case 2: $class = 'av_one_half'; break;
				        	case 3: $class = 'av_one_third'; break;
				        	case 4: $class = 'av_one_fourth'; break;
				        	case 5: $class = 'av_one_fifth'; break;
				        	case 6: $class = 'av_one_sixth'; break;
				        }
				        
				        $firstCol = "first el_before_{$class}";

						//display the footer widget that was defined at appearenace->widgets in the wordpress backend
						//if no widget is defined display a dummy widget, located at the bottom of includes/register-widget-area.php
						for ($i = 1; $i <= $columns; $i++)
						{
							$class2 = ""; // initialized to avoid php notices
							if($i != 1) $class2 = " el_after_{$class}  el_before_{$class}";
							echo "<div class='flex_column {$class} {$class2} {$firstCol}'>";
							if (function_exists('dynamic_sidebar') && dynamic_sidebar('Footer - column'.$i) ) : else : avia_dummy_widget($i); endif;
							echo "</div>";
							$firstCol = "";
						}

						do_action('avia_after_footer_columns');

						?>


					</div>


				<!-- ####### END FOOTER CONTAINER ####### -->
				</div>

	<?php   } //endif nofooterwidgets ?>



			

			<?php

			//copyright
			$copyright = do_shortcode( avia_get_option('micopyright', "&copy; ".__('Copyright','avia_framework')." ".date('Y')."  - <a href='".home_url('/')."'>".get_bloginfo('name')."</a>"));
			//print_r($copyright);
			// you can filter and remove the backlink with an add_filter function
			// from your themes (or child themes) functions.php file if you dont want to edit this file
			// you can also just keep that link. I really do appreciate it ;)
			$kriesi_at_backlink = kriesi_backlink(get_option(THEMENAMECLEAN."_initial_version"));


			//you can also remove the kriesi.at backlink by adding [nolink] to your custom copyright field in the admin area
			if($copyright && strpos($copyright, '[nolink]') !== false)
			{
				$kriesi_at_backlink = "";
				$copyright = str_replace("[nolink]","",$copyright);
			}

			if( $footer_widget_setting != 'nosocket' )
			{

			?>

				<footer class='container_wrap socket_color' id='socket' <?php avia_markup_helper(array('context' => 'footer')); ?>>
                    <div class='container center-aling'>

                        <span class='copyright '><?php echo $copyright; ?></span>

                        <?php
                        	if(avia_get_option('footer_social', 'disabled') != "disabled")
                            {
                            	$social_args 	= array('outside'=>'ul', 'inside'=>'li', 'append' => '');
								echo avia_social_media_icons($social_args, false);
                            }
                        
                            
                                $avia_theme_location = 'avia3';
                                $avia_menu_class = $avia_theme_location . '-menu';

                                $args = array(
                                    'theme_location'=>$avia_theme_location,
                                    'menu_id' =>$avia_menu_class,
                                    'container_class' =>$avia_menu_class,
                                    'fallback_cb' => '',
                                    'depth'=>1,
                                    'echo' => false,
                                    'walker' => new avia_responsive_mega_menu(array('megamenu'=>'disabled'))
                                );

                            $menu = wp_nav_menu($args);
                            
                            /*if($menu){ 
                            echo "<nav class='sub_menu_socket' ".avia_markup_helper(array('context' => 'nav', 'echo' => false)).">";
                            echo $menu;
                            echo "</nav>";
							}*/
                        ?>

                    </div>

	            <!-- ####### END SOCKET CONTAINER ####### -->
				</footer>


			<?php
			} //end nosocket check


		
		
		} //end blank & nofooterarea check
		?>
		<!-- end main -->
		</div>
		
		<?php
		//display link to previeous and next portfolio entry
		echo avia_post_nav();

		echo "<!-- end wrap_all --></div>";


		if(isset($avia_config['fullscreen_image']))
		{ ?>
			<!--[if lte IE 8]>
			<style type="text/css">
			.bg_container {
			-ms-filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='<?php echo $avia_config['fullscreen_image']; ?>', sizingMethod='scale')";
			filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='<?php echo $avia_config['fullscreen_image']; ?>', sizingMethod='scale');
			}
			</style>
			<![endif]-->
		<?php
			echo "<div class='bg_container' style='background-image:url(".$avia_config['fullscreen_image'].");'></div>";
		}
	?>

<div id="form-contact-react"></div>

<?php




	/* Always have wp_footer() just before the closing </body>
	 * tag of your theme, or you will break many plugins, which
	 * generally use this hook to reference JavaScript files.
	 */


	wp_footer();


?>
<a href='#top' title='<?php _e('Scroll to top','avia_framework'); ?>' id='scroll-top-link' <?php echo av_icon_string( 'scrolltop' ); ?>><span class="avia_hidden_link_text"><?php _e('Scroll to top','avia_framework'); ?></span></a>

<div id="fb-root"></div>
</body>
</html>

