<?php

namespace Eltigre\Ajax;

class Contact {


    public function __construct() {
        add_action('wp_ajax_send_contact_mail', array( $this, 'send_contact_mail' ) );
        add_action('wp_ajax_nopriv_send_contact_mail', array( $this, 'send_contact_mail' ) );
    }


    public function send_contact_mail() {
        
        // Retrieve form fields
        $fields = $this->get_fields();

        if ( $this->validate_fields( $fields ) ) {

            // Format message
            $message = '';
            foreach ( $fields as $field ) {
                $message .= $field['label'] . ': ' . $field['value'] . "\n"; 
            }
            $message .= "Message: \n\n" . sanitize_textarea_field( $_POST['message'] );

    
            // Set E-Mail subject
            $subject = 'E-Mail Subject';
    
    
            // Set E-Mail recipients
            $recipients = array(
                get_bloginfo( 'admin_email' )
            );
    
    
            // Build email headers
            $headers = array();
            $headers[] = 'Content-Type: text/html; charset=UTF-8';
            $headers[] = 'From: ' . get_bloginfo( 'name' ) . ' <site@wordpress.com>';
            $headers[] = 'Reply-To: ' . $fields['firstname']['value'] . ' ' . $fields['lastname']['value'] . ' <' . $fields['email']['value'] . '>';
    
    
            // Send email
            if ( wp_mail( $recipients, $subject, $message, $headers ) ) {
                wp_send_json_success(' Success message' );
            } else {
                wp_send_json_error( 'Error message' );
            }
    
    
            wp_die();
        }
    }


    private function get_fields() {
        return array(
            'firstname' => array(
                'value' => sanitize_text_field( $_POST['firstname'] ),
                'label' => __( 'Prénom', 'eltigre' ),
                'required' => true
            ),
            'lastname' => array(
                'value' => sanitize_text_field( $_POST['lastname'] ),
                'label' => __( 'Nom', 'eltigre' ),
                'required' => true
            ),
            'email' => array(
                'value' => sanitize_email( $_POST['email'] ),
                'label' => __( 'Prénom', 'eltigre' ),
                'required' => true
            )
        );
    }


    private function validate_fields( $fields  = array() ) {
        foreach ( $fields as $key => $field ) {
            if ( $field['required'] && empty( $field['value'] ) ) {
                wp_send_json_error( "$key: cannot be empty" );
            }
        }

        return true;
    }
}

new Contact();