<?php

namespace Eltigre\Admin;

if ( ! class_exists( 'Eltigre\Admin\Support' ) ) {

  class Support {
  
      public function __construct() {      
        add_action( 'admin_menu', array( $this, 'add_support_form' ) );
        add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
      }

      public static function enqueue_scripts( $hook ) {
        if ( $hook === 'toplevel_page_eltigre-support' ) {
          wp_enqueue_script( 'admin-support', get_template_directory_uri() . '/inc/js/admin-support.js' );
          wp_enqueue_style( 'admin-support', get_template_directory_uri() . '/inc/css/admin-support.css' );
        }
      }

      public static function add_support_form() {
        add_menu_page( 
          'eltigre-support', 
          __( 'Support', 'eltigre' ), 
          'edit_pages', 
          'eltigre-support', 
          array( $this, 'display_form' ), 
          get_template_directory_uri() . '/static/logo30x30.png',
          99 
        );
      }

      public static function display_form() { ?>
        <div class="container-fluid container">
          <h1 class="title"><?php _e( 'Contactez-nous !', 'eltigre' ); ?></h1>

          <form id="support-form" method="post">
            <div class="input-wrapper">
              <label style="display: block;" for="subject"><?php _e( 'Sujet', 'eltigre' ); ?></label>
              <input type="text" name="subject" />
            </div>

            <div class="input-wrapper">
              <label style="display: block;" for="subject"><?php _e( 'Message', 'eltigre' ); ?></label>
              <textarea name="message" placeholder="<?php _e( 'Message', 'eltigre' ); ?>"></textarea>
            </div>
          
            <?php submit_button( __( 'Envoyer', 'eltigre' ), 'secondary large' ); ?>
          </form>
        </div> <?php
      }
  }
  
  new Support();
}