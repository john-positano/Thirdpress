<?php

require_once plugin_dir_path(__FILE__).'../includes/class-thirdpress-wp-theme-interceptor.php';

class Thirdpress_Public {

	private $plugin_name;
	private $version;
	private $WP_Theme_Interceptor;

	public function __construct( $plugin_name, $version ) {
		$this->plugin_name = $plugin_name;
		$this->version = $version;
		$this->WP_Theme_Interceptor = new Thirdpress_WP_Theme_Interceptor();

	}

	public function enqueue_styles() {
		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/thirdpress-public.css', array(), $this->version, 'all' );
	}

	public function enqueue_scripts() {
		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/thirdpress-public.js', array( 'jquery' ), $this->version, false );
	}
}
