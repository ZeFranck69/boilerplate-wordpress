<?php

namespace Eltigre\Admin;

if ( ! class_exists( 'Eltigre\Admin\ACF' ) ) {

  class ACF {
  
      public function __construct() {
        add_filter( 'tiny_mce_before_init', array( $this,'custom_wysiwyg_colors' ) );
        add_action( 'acf/input/admin_enqueue_scripts', array( $this, 'register_scripts' ) );
      }

      public static function register_scripts() {
        wp_enqueue_script ( 'acf-admin', get_template_directory_uri() . '/inc/js/acf-admin.js' );
        wp_localize_script( 'acf-admin', 'acfAdminColors', COLORS );
      }

      public static function custom_wysiwyg_colors( $init ) {
          $colors = array();
          foreach( COLORS as $hex => $color ) {
              if ( $color[ 'name' ] ) {
                  array_push( $colors, "'$hex', '" . $color['name'] . "'" );
              }
          }
  
          $textcolor_map = implode( ',', $colors );
  
      $init['textcolor_map'] = '['.$textcolor_map.']';
      $init['textcolor_rows'] = 8; 
      
      return $init;
    }
  
  }
  
  new ACF();
  
}