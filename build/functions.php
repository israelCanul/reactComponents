<?php

/*
* Add your own functions here. You can also copy some of the theme functions into this file. 
* Wordpress will use those functions instead of the original functions then.
*/

function overwrite_language_file_child_theme() {
    $lang = get_stylesheet_directory().'/lang';
    return $lang;
} 
add_filter('ava_theme_textdomain_path', 'overwrite_language_file_child_theme');

/* register js 
wp_enqueue_script('script_child_theme',$child_theme_url.'/js/script_child_theme.js',array(''),2, true ); 
*/

   function valid_news_url($val)
{
   $news=explode('/',$val);
   if($news[1]=='news'){
      return true;
   }else{
      return false;
   }
   //print_r($news);

}




function add_customjs() {

   //se agrega jquery UI a la pagina
   wp_enqueue_script( 'jquery-ui', 'https://code.jquery.com/ui/1.11.4/jquery-ui.min.js' , array('jquery'),3, true );    
   //se agrega jquery UI a la pagina
   //wp_enqueue_script( 'datepicker',get_stylesheet_directory_uri().'/js/datepicker/datepicker-min.js', array('jquery'),3, true ); 
   //se agrega el plugin pickadate a la pagina
   wp_enqueue_script( 'datepicker',get_stylesheet_directory_uri().'/js/pickadate/picker-min.js', array('jquery'),3, true ); 
   wp_enqueue_script( 'datepicker-date',get_stylesheet_directory_uri().'/js/pickadate/picker.date-min.js', array('jquery'),3, true ); 
   wp_enqueue_script( 'datepicker-time',get_stylesheet_directory_uri().'/js/pickadate/picker.time.js', array('jquery'),3, true );
   
   //se agregan los js del tema hijo   
   wp_enqueue_script( 'customjs', get_stylesheet_directory_uri().'/js/script_child_theme.js', array('jquery'),4, true );
   //se agrega el js para el bookin   
   wp_enqueue_script( 'bookin2', get_stylesheet_directory_uri().'/js/bookin.js', array('jquery'),4, true ); 
   wp_enqueue_script( 'validate', get_stylesheet_directory_uri().'/js/jquery.validate-min.js', array('jquery'),4, true ); 
   

     if($_SERVER['REQUEST_URI']=='/blog-and-newsletter/' ||  valid_news_url($_SERVER['REQUEST_URI']) ){  
         
         wp_enqueue_script( 'contact-form', get_stylesheet_directory_uri().'/react-components/js/contact.js' , array('jquery'),3, true );
         wp_enqueue_style( 'css-react' , get_stylesheet_directory_uri()."/react-components/widget-contact.css", array(),'3', 'all' );  
   
   }

   // se agregan los css para los iconos
   wp_enqueue_style( 'iconos' , "https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css", array(),'3', 'all' );
   //se agrega el css para el header
   wp_enqueue_style( 'header' , get_stylesheet_directory_uri()."/css/header.css", array(),'4', 'all' );
   // se agrega el css para el estilo del footer
   wp_enqueue_style( 'footer' , get_stylesheet_directory_uri()."/css/footer.css", array(),'4', 'all' );
   // se agrega el css para el estilo del footer
   //wp_enqueue_style( 'restaurants' , get_stylesheet_directory_uri()."/css/home.css", array(),'4', 'all' );
   if($_SERVER['REQUEST_URI']=='/restaurants-bars/'){
      // se agrega el css para el estilo del footer
      wp_enqueue_style( 'home' , get_stylesheet_directory_uri()."/css/restaurants.css", array(),'4', 'all' );
   }
   if($_SERVER['REQUEST_URI']=='/rr2016/especial-events-payment/'){
      // se agrega el css para el estilo del footer
      wp_enqueue_style( 'Special_events_payments' , get_stylesheet_directory_uri()."/css/Special_events_payment.css", array(),'4', 'all' );
   }

   if($_SERVER['REQUEST_URI']=='/forgot-pin/'){
      // se agrega el css para el estilo del footer
      wp_enqueue_style( 'forgot-pin' , get_stylesheet_directory_uri()."/css/forgot-pin.css", array(),'4', 'all' );
   }   
   if($_SERVER['REQUEST_URI']=='/register-email/'){
      // se agrega el css para el estilo del footer
      wp_enqueue_style( 'register-email' , get_stylesheet_directory_uri()."/css/register-email.css", array(),'4', 'all' );
   }
   if($_SERVER['REQUEST_URI']=='/home-members/'){
      // se agrega el css para el estilo del footer
      wp_enqueue_style( 'members' , get_stylesheet_directory_uri()."/css/home-members.css", array(),'4', 'all' );
   }   
   if($_SERVER['REQUEST_URI']=='/contact-question-form/'){
      // se agrega el css para el estilo del footer
      wp_enqueue_style( 'question-form' , get_stylesheet_directory_uri()."/css/question-form.css", array(),'4', 'all' );
   }      
   if($_SERVER['REQUEST_URI']=='/guest-services-and-amenities/airport-transfers/'){
      // se agrega el css para el estilo del footer
      wp_enqueue_style( 'airport-transfers' , get_stylesheet_directory_uri()."/css/airport-transfers.css", array(),'4', 'all' );
   }   
   if($_SERVER['REQUEST_URI']=='/guest-services-and-amenities/free-shuttle-in-cancun/'){
      // se agrega el css para el estilo del footer
      wp_enqueue_style( 'free-shuttle-in-cancun' , get_stylesheet_directory_uri()."/css/free-shuttle-in-cancun.css", array(),'4', 'all' );
   }      
   if($_SERVER['REQUEST_URI']=='/guest-services-and-amenities/the-royal-market/'){
      // se agrega el css para el estilo del footer
      wp_enqueue_style( 'the-royal-market' , get_stylesheet_directory_uri()."/css/the-royal-market.css", array(),'4', 'all' );
   }   
   if($_SERVER['REQUEST_URI']=='/kitchen_stuffers/'){
      // se agrega el css para el estilo del footer
      wp_enqueue_style( 'kitchen_stuffers' , get_stylesheet_directory_uri()."/css/kitchen_stuffers.css", array(),'4', 'all' );
   } 
   if($_SERVER['REQUEST_URI']=='/register_email_address/'){
      // se agrega el css para el estilo del footer
      wp_enqueue_style( 'registeremail' , get_stylesheet_directory_uri()."/css/registeremail.css", array(),'4', 'all' );
   }

   if($_SERVER['REQUEST_URI']=='/discover-royal-resorts/the-royal-cancun/'){
      // js de los resorts
      wp_enqueue_script( 'resorts', get_stylesheet_directory_uri().'/js/resorts-min.js', array('jquery'),4, true ); 
      // se agrega el css para el estilo del footer
      wp_enqueue_style( 'the-royal-sands' , get_stylesheet_directory_uri()."/css/the-royal-sands.css", array(),'4', 'all' );
   } 
   if($_SERVER['REQUEST_URI']=='/discover-royal-resorts/the-royal-sands/'){
      // js de los resorts
      wp_enqueue_script( 'resorts', get_stylesheet_directory_uri().'/js/resorts-min.js', array('jquery'),4, true ); 
      // se agrega el css para el estilo del footer
      wp_enqueue_style( 'the-royal-sands' , get_stylesheet_directory_uri()."/css/the-royal-sands.css", array(),'4', 'all' );
   } 
   if($_SERVER['REQUEST_URI']=='/discover-royal-resorts/the-royal-haciendas/'){
      // js de los resorts
      wp_enqueue_script( 'resorts', get_stylesheet_directory_uri().'/js/resorts-min.js', array('jquery'),4, true ); 
      // se agrega el css para el estilo del footer
      wp_enqueue_style( 'the-royal-sands' , get_stylesheet_directory_uri()."/css/the-royal-sands.css", array(),'4', 'all' );
   } 
   if($_SERVER['REQUEST_URI']=='/discover-royal-resorts/the-royal-caribbean/'){
      // js de los resorts
      wp_enqueue_script( 'resorts', get_stylesheet_directory_uri().'/js/resorts-min.js', array('jquery'),4, true ); 
      // se agrega el css para el estilo del footer
      wp_enqueue_style( 'the-royal-sands' , get_stylesheet_directory_uri()."/css/the-royal-sands.css", array(),'4', 'all' );
   } 
   if($_SERVER['REQUEST_URI']=='/discover-royal-resorts/grand-residences/'){
      // js de los resorts
      wp_enqueue_script( 'resorts', get_stylesheet_directory_uri().'/js/resorts-min.js', array('jquery'),4, true ); 
      // se agrega el css para el estilo del footer
      wp_enqueue_style( 'the-royal-sands' , get_stylesheet_directory_uri()."/css/the-royal-sands.css", array(),'4', 'all' );
   } 
   if($_SERVER['REQUEST_URI']=='/discover-royal-resorts/the-royal-islander/'){
      // js de los resorts
      wp_enqueue_script( 'resorts', get_stylesheet_directory_uri().'/js/resorts-min.js', array('jquery'),4, true ); 
      // se agrega el css para el estilo del footer
      wp_enqueue_style( 'the-royal-sands' , get_stylesheet_directory_uri()."/css/the-royal-sands.css", array(),'4', 'all' );
   }
   if($_SERVER['REQUEST_URI']=='/discover-royal-resorts/'){
      // js de los resorts
      wp_enqueue_script( 'resorts', get_stylesheet_directory_uri().'/js/resorts-min.js', array('jquery'),4, true ); 
      // se agrega el css para el estilo del footer
      wp_enqueue_style( 'discover-royal-resorts' , get_stylesheet_directory_uri()."/css/discover-royal-resorts.css", array(),'4', 'all' );
   }
   if($_SERVER['REQUEST_URI']=='/guest-services-and-amenities/restaurants-in-cancun-playa-del-carmen/'){
      // se agrega el css para el estilo del footer
      wp_enqueue_style( 'restaurants-in-cancun-playa-del-carmen' , get_stylesheet_directory_uri()."/css/restaurants-in-cancun-playa-del-carmen.css", array(),'4', 'all' );
      wp_enqueue_style( 'estilo' , get_stylesheet_directory_uri()."/css/estilo.css", array(),'4', 'all' );

         wp_enqueue_script( 'bookin-reservations', get_stylesheet_directory_uri().'/js/bookin-reservations.js', array('jquery'),4, true );

   } 
   if($_SERVER['REQUEST_URI']=='/guest-services-and-amenities/capitains-cove/'){
      // se agrega el css para el estilo del footer
      wp_enqueue_style( 'restaurants-and-bars' , get_stylesheet_directory_uri()."/css/restaurants-and-bars.css", array(),'4', 'all' );
   } 
 

   if($_SERVER['REQUEST_URI']=='/destinations/weather-in-cancun-and-riviera-maya/' || $_SERVER['REQUEST_URI']=='/weather-and-webcams-in-cancun-and-riviera-maya/'){
      //
      wp_enqueue_style( 'css-normalize' , "/weather1/demo/css/normalize.css", array(),'4', 'all' );
      wp_enqueue_style( 'css-apis' , "https://fonts.googleapis.com/css?family=Roboto:400,100,300,700,500,900", array(),'4', 'all' );
      wp_enqueue_style( 'css-demo' , "/weather1/demo/css/demo.css", array(),'4', 'all' );
      wp_enqueue_style( 'css-style' , "/weather1/demo/css/style1.css", array(),'4', 'all' );
      wp_enqueue_style( 'css-style-weather' , get_stylesheet_directory_uri()."/css/css-style-weather.css", array(),'4', 'all' );
      wp_enqueue_script( 'animacion-js', get_stylesheet_directory_uri().'/js/animacion-js-min.js', array('jquery'),4, true );
      wp_enqueue_script( 'animacion', '/weather1/demo/js/index.js', array('animacion-js'),4, true );
      wp_enqueue_script('index-weather', "https://query.yahooapis.com/v1/public/yql?q=SELECT * FROM weather.forecast WHERE woeid='114632' and u='c'&format=json&callback=callbackFunction", array('animacion-js'),4, true );
      wp_enqueue_style( 'clima' , get_stylesheet_directory_uri()."/css/clima.css", array(),'4', 'all' );
   }

   /*  24/02/16 and 25/02/16 */

   if($_SERVER['REQUEST_URI']=='/cakes/'){
      wp_enqueue_style( 'cakes' , get_stylesheet_directory_uri()."/css/cakes.css", array(),'4', 'all' );
   }
   if($_SERVER['REQUEST_URI']=='/check-out-ksk/'){
      wp_enqueue_style( 'market-chekout' , get_stylesheet_directory_uri()."/css/market-chekout.css", array(),'4', 'all' );
   } 
   if($_SERVER['REQUEST_URI']=='/check-out-multi/'){
      wp_enqueue_style( 'market-chekout-multi' , get_stylesheet_directory_uri()."/css/market-checkout-multi.css", array(),'4', 'all' );
   } 
   if($_SERVER['REQUEST_URI']=='/check-out/'){
       wp_enqueue_style( 'market-chekout-multi' , get_stylesheet_directory_uri()."/css/market-checkout-multi.css", array(),'4', 'all' );
   } 
   if($_SERVER['REQUEST_URI']=='/gift-certificates/'){
      wp_enqueue_style( 'gift-certificates' , get_stylesheet_directory_uri()."/css/gift-certificates.css", array(),'4', 'all' );
   } 
   if($_SERVER['REQUEST_URI']=='/order-confirmation/'){
      wp_enqueue_style( 'order-confirmation' , get_stylesheet_directory_uri()."/css/order-confirmation.css", array(),'4', 'all' );
   }    
   if($_SERVER['REQUEST_URI']=='/request-status/'){
      wp_enqueue_style( 'request-status' , get_stylesheet_directory_uri()."/css/request-status.css", array(),'4', 'all' );
   } 
   if($_SERVER['REQUEST_URI']=='/shopping-cart/'){
      wp_enqueue_style( 'shopping-cart' , get_stylesheet_directory_uri()."/css/shopping-cart.css", array(),'4', 'all' );
   } 
   if($_SERVER['REQUEST_URI']=='/spa-gift-certificates/'){
      wp_enqueue_style( 'spa-gift-certificates' , get_stylesheet_directory_uri()."/css/spa-gift-certificates.css", array(),'4', 'all' );
   } 
   if($_SERVER['REQUEST_URI']=='/motorized-wheelchair/'){
      wp_enqueue_style( 'motorized-wheelchair' , get_stylesheet_directory_uri()."/css/motorized-wheelchair.css", array(),'4', 'all' );
   }    
   if($_SERVER['REQUEST_URI']=='/special-gifts/'){
      wp_enqueue_style( 'special-gifts' , get_stylesheet_directory_uri()."/css/special-gifts.css", array(),'4', 'all' );
   }
   if($_SERVER['REQUEST_URI']=='/' || $_SERVER['REQUEST_URI']==''){
      // se agrega el css para el estilo del footer
      wp_enqueue_style( 'home' , get_stylesheet_directory_uri()."/css/home.css", array(),'4', 'all' );
   } 


   if($_SERVER['REQUEST_URI']=='/guest-services-and-amenities/weddings-and-special-events/'){
      // se agrega el css para el estilo del footer
      wp_enqueue_style( 'weddings-and-special-events' , get_stylesheet_directory_uri()."/css/weddings-and-special-events.css", array(),'4', 'all' );
   }
   if($_SERVER['REQUEST_URI']=='/guest-services-and-amenities/spa/'){
      // se agrega el css para el estilo del footer
      wp_enqueue_style( 'spa' , get_stylesheet_directory_uri()."/css/spa.css", array(),'4', 'all' );
   }




   if($_SERVER['REQUEST_URI']=='/special-offers/'){
      // js de los resorts
      wp_enqueue_script( 'promociones', get_stylesheet_directory_uri().'/js/promociones.js', array('jquery'),4, true );       
      // se agrega el css para el estilo del footer
      wp_enqueue_style( 'royal-resorts-specials' , get_stylesheet_directory_uri()."/css/royal-resorts-specials.css", array(),'4', 'all' );
   }
   if($_SERVER['REQUEST_URI']=='/destinations/our-recommendations/'){
      // js de los resorts
      //wp_enqueue_script( 'promociones', get_stylesheet_directory_uri().'/js/promociones-min.js', array('jquery'),4, true );       
      // se agrega el css para el estilo del footer
      wp_enqueue_style( 'our-recommendations' , get_stylesheet_directory_uri()."/css/our-recommendations.css", array(),'4', 'all' );
   }



   if($_SERVER['REQUEST_URI']=='/directory/'){
     // se agrega el css para el estilo del footer
      wp_enqueue_style( 'directory' , get_stylesheet_directory_uri()."/css/directory.css", array(),'4', 'all' );
   }
   if($_SERVER['REQUEST_URI']=='/about-royal-resorts/'){
      // se agrega el css para el estilo del footer
      wp_enqueue_style( 'about-royal-resorts' , get_stylesheet_directory_uri()."/css/about-royal-resorts.css", array(),'4', 'all' );
   }
   if($_SERVER['REQUEST_URI']=='/press-releases/'){
      // se agrega el css para el estilo del footer
      wp_enqueue_style( 'press-releases' , get_stylesheet_directory_uri()."/css/press-releases.css", array(),'4', 'all' );
   }
   if($_SERVER['REQUEST_URI']=='/privacy-policy/'){
      // se agrega el css para el estilo del footer
      wp_enqueue_style( 'privacy-policy' , get_stylesheet_directory_uri()."/css/privacy-policy.css", array(),'4', 'all' );
   }
   if($_SERVER['REQUEST_URI']=='/faq/'){
      // se agrega el css para el estilo del footer
      wp_enqueue_style( 'faq' , get_stylesheet_directory_uri()."/css/faq.css", array(),'4', 'all' );
   }
   if($_SERVER['REQUEST_URI']=='/family-friendly-resorts-cancun/downloads/'){
      // se agrega el css para el estilo del footer
      wp_enqueue_style( 'interval-calendar' , get_stylesheet_directory_uri()."/css/interval-calendar.css", array(),'4', 'all' );
   }
   if($_SERVER['REQUEST_URI']=='/ask-joanna/'){
      // se agrega el css para el estilo del footer
      wp_enqueue_style( 'ask-joanna' , get_stylesheet_directory_uri()."/css/ask-joanna.css", array(),'4', 'all' );
   }  
   if($_SERVER['REQUEST_URI']=='/guest-services-and-amenities/fitness-center/'){
      // se agrega el css para el estilo del footer
      wp_enqueue_style( 'fitness-center' , get_stylesheet_directory_uri()."/css/fitness-center.css", array(),'4', 'all' );
   }
   if($_SERVER['REQUEST_URI']=='/guest-services-and-amenities/gift-shops/'){
      // se agrega el css para el estilo del footer
      wp_enqueue_style( 'gift-shops' , get_stylesheet_directory_uri()."/css/gift-shops.css", array(),'4', 'all' );
   }
   if($_SERVER['REQUEST_URI']=='/guest-services-and-amenities/refine-all-inclusive-package/'){
      // se agrega el css para el estilo del footer
      wp_enqueue_style( 'all-inclusive-package' , get_stylesheet_directory_uri()."/css/all-inclusive-package.css", array(),'4', 'all' );
   }
   if($_SERVER['REQUEST_URI']=='/royal-resorts-vacation-experience/'){
      // se agrega el css para el estilo del footer
      wp_enqueue_style( 'vacation-experience' , get_stylesheet_directory_uri()."/css/vacation-experience.css", array(),'4', 'all' );
   }

   if($_SERVER['REQUEST_URI']=='/guest-services-and-amenities/refine-all-inclusive-package/refine-all-inclusive-rules/'){
      // se agrega el css para el estilo del footer
      wp_enqueue_style( 'all-inclusive-rules' , get_stylesheet_directory_uri()."/css/all-inclusive-rules.css", array(),'4', 'all' );
   }
   if($_SERVER['REQUEST_URI']=='/guest-services-and-amenities/refine-all-inclusive-package/refine-all-inclusive-policies/'){
      // se agrega el css para el estilo del footer
      wp_enqueue_style( 'all-inclusive-rules' , get_stylesheet_directory_uri()."/css/all-inclusive-rules.css", array(),'4', 'all' );
   }
   if($_SERVER['REQUEST_URI']=='/guest-services-and-amenities/refine-all-inclusive-package/all-inclusive-faqs/'){
      wp_enqueue_style( 'all-inclusive-rules' , get_stylesheet_directory_uri()."/css/all-inclusive-rules.css", array(),'4', 'all' );
   }
   if($_SERVER['REQUEST_URI']=='/guest-services-and-amenities/refine-all-inclusive-package/refine-all-inclusive-rates/'){
      wp_enqueue_style( 'all-inclusive-rates' , get_stylesheet_directory_uri()."/css/all-inclusive-rates.css", array(),'4', 'all' );
   }
   if($_SERVER['REQUEST_URI']=='/coco-bongo-show-and-disco/'){
      wp_enqueue_style( 'destinations' , get_stylesheet_directory_uri()."/css/destinations.css", array(),'4', 'all' );
   }   

   if($_SERVER['REQUEST_URI']=='/luxury-avenue/'){
      wp_enqueue_style( 'destinations' , get_stylesheet_directory_uri()."/css/destinations.css", array(),'4', 'all' );
   }
   if($_SERVER['REQUEST_URI']=='/jewelry-collection-last-lifetime/'){
      wp_enqueue_style( 'destinations' , get_stylesheet_directory_uri()."/css/destinations.css", array(),'4', 'all' );
   }

   if($_SERVER['REQUEST_URI']=='/weather-and-webcams-in-cancun-and-riviera-maya/the-royal-caribbean-webcam/' || $_SERVER['REQUEST_URI']=='/weather-and-webcams-in-cancun-and-riviera-maya/the-royal-sands-webcam/' || $_SERVER['REQUEST_URI']=='/weather-and-webcams-in-cancun-and-riviera-maya/the-royal-haciendas-webcam/' || $_SERVER['REQUEST_URI']=='/weather-and-webcams-in-cancun-and-riviera-maya/the-royal-cancun-webcam/' || $_SERVER['REQUEST_URI']=='/weather-and-webcams-in-cancun-and-riviera-maya/the-royal-islander-webcam/'){

      wp_enqueue_style( 'camaras', get_stylesheet_directory_uri()."/css/camarassection.css", array(),'4', 'all' );
   
   }


   /*  16/03/16 and 17/02/16 */
   if($_SERVER['REQUEST_URI']=='/online-preregistration-details/'){
      wp_enqueue_style( 'online-preregistration-details' , get_stylesheet_directory_uri()."/css/online-preregistration-details.css", array(),'4', 'all' );
   }
   if($_SERVER['REQUEST_URI']=='/destinations/'){
      wp_enqueue_style( 'destinations' , get_stylesheet_directory_uri()."/css/destinations.css", array(),'4', 'all' );
   }

   if($_SERVER['REQUEST_URI']=='/destinations/riviera-maya-destination-guide/'){
      wp_enqueue_style( 'destinations' , get_stylesheet_directory_uri()."/css/destinations.css", array(),'4', 'all' );
   }
   if($_SERVER['REQUEST_URI']=='/destinations/cancun-destination-guide/'){
      wp_enqueue_style( 'destinations' , get_stylesheet_directory_uri()."/css/destinations.css", array(),'4', 'all' );
   }
   if($_SERVER['REQUEST_URI']=='/destinations/yucatan-destination-guide/'){
      wp_enqueue_style( 'destinations' , get_stylesheet_directory_uri()."/css/destinations.css", array(),'4', 'all' );
   }
   if($_SERVER['REQUEST_URI']=='/royal-resorts-signature-club/'){
      wp_enqueue_style( 'royal-resorts-signature-club' , get_stylesheet_directory_uri()."/css/royal-resorts-signature-club.css", array(),'4', 'all' );
   }
   if($_SERVER['REQUEST_URI']=='/vacation-ownership-rights/'){
      wp_enqueue_style( 'royal-resorts-signature-club' , get_stylesheet_directory_uri()."/css/royal-resorts-signature-club.css", array(),'4', 'all' );
   }
   if($_SERVER['REQUEST_URI']=='/how-to-become-a-member/'){
      wp_enqueue_style( 'royal-resorts-signature-club' , get_stylesheet_directory_uri()."/css/royal-resorts-signature-club.css", array(),'4', 'all' );
   }

   if($_SERVER['REQUEST_URI']=='/guest-services-and-amenities/'){

      wp_enqueue_style( 'royal-resorts-signature-club' , get_stylesheet_directory_uri()."/css/royal-resorts-signature-club.css", array(),'4', 'all' );
   }
   if($_SERVER['REQUEST_URI']=='/guest-services-and-amenities/activities-sports/'){

      wp_enqueue_style( 'activities-sports' , get_stylesheet_directory_uri()."/css/activities-sports.css", array(),'4', 'all' );   
   }
   // se agrega el css para el bookin
   wp_enqueue_style( 'bookin' , get_stylesheet_directory_uri()."/css/bookin.css", array(),'4', 'all' );
   // se agregan los css del pickadate
   wp_enqueue_style( 'datepicker' , get_stylesheet_directory_uri()."/css/pickadate/default.css", array(),'4', 'all' ); 
   wp_enqueue_style( 'datepicker-theme' , get_stylesheet_directory_uri()."/css/pickadate/default.date.css", array(),'4', 'all' );
   wp_enqueue_style( 'datepicker-themetime' , get_stylesheet_directory_uri()."/css/pickadate/default.time.css", array(),'3', 'all' ); 


   wp_enqueue_script( 'jquery' );
}



add_action( 'wp_enqueue_scripts', 'add_customjs', 100 );







