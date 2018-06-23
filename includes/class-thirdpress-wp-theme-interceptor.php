<?php

class Thirdpress_WP_Theme_Interceptor {
  private $original_wp;
  private $original_wp_query;

  public function __construct () {
    add_filter('theme_root', [$this, 'Intercept_WP_Theme']);
    add_filter('template_directory', [$this, 'Intercept_WP_Template_Dir']);
    add_filter('template', [$this, 'Intercept_WP_Template']);
  }

  public function Intercept_WP_Theme ($theme) {
    return plugin_dir_path(__FILE__).'../public/'; 
  }

  public function Intercept_WP_Template_Dir ($template_dir) {
    return plugin_dir_path(__FILE__).'../public/';
  }

  public function Intercept_WP_Template ($template) {
    return 'index.php';
  }

}