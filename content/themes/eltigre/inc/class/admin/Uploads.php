<?php

namespace Eltigre\Admin;

if ( ! class_exists( 'Eltigre\Admin\Uploads' ) ) {

	class Uploads {
	
		public function __construct() {      
			add_filter( 'upload_mimes', array( $this, 'allow_svg' ) );
			add_filter( 'sanitize_file_name', array( $this, 'remove_filename_accents' ), 10 );

		}

		public function allow_svg($mimes) {
			$mimes['svg'] = 'image/svg+xml';
			return $mimes;
		}

		public function remove_filename_accents( $filename ) {
			$filename = mb_convert_encoding( $filename, 'UTF-8' );
		
			$accent_characters = array('/À/','/Á/','/Â/','/Ã/','/Ä/','/Å/','/Ç/','/È/','/É/','/Ê/','/Ë/','/Ì/','/Í/','/Î/','/Ï/','/Ò/','/Ó/','/Ô/','/Õ/','/Ö/','/Ù/','/Ú/','/Û/','/Ü/','/Ý/','/à/','/á/','/â/','/ã/','/ä/','/å/','/ç/','/è/','/é/','/ê/','/ë/','/ì/','/í/','/î/','/ï/','/ð/','/ò/','/ó/','/ô/','/õ/','/ö/','/ù/','/ú/','/û/','/ü/','/ý/','/ÿ/', '/©/');

			$clean_characters = array('a','a','a','a','a','a','c','e','e','e','e','i','i','i','i','o','o','o','o','o','u','u','u','u','y','a','a','a','a','a','a','c','e','e','e','e','i','i','i','i','o','o','o','o','o','o','u','u','u','u','y','y','copy');
		
			$fixed_filename = preg_replace( $accent_characters, $clean_characters, $filename );
			$fixed_filename = utf8_decode( $fixed_filename );
			$fixed_filename = preg_replace( '/\?/', '', $fixed_filename );
			$fixed_filename = strtolower( $fixed_filename );
		
			return $fixed_filename;
		}
	}
	
	new Uploads();
}