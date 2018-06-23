<?php
  require_once plugin_dir_path(__FILE__).'partials/thirdpress-public-display.php';
?>
<!DOCTYPE html>
<html>
  <head>
    <?php vendor_script('components/jquery/jquery.min.js'); ?>
    <?php vendor_script('twbs/bootstrap/dist/js/bootstrap.min.js'); ?>
    <?php // vendor_script('components/three.js/three.min.js'); ?>
    <?php // internal_script('three.css3drenderer.js'); ?>
    <?php vendor_script('components/angular.js/angular.min.js') ?>

    <?php vendor_style('twbs/bootstrap/dist/css/bootstrap.min.css'); ?>
    <?php internal_style('thirdpress-public.css'); ?>

    <?php internal_script('init.js'); ?> 
  </head>
  <body ng-app="Thirdpress">
    <div class="container-fluid">
      <div class="row">
        <canvas thirdpress-canvas>
          <iframe></iframe>
        </canvas>
        <div class="ThirdpressCSS"></div>
      </div>
    </div>
    <?php internal_script('services/ThirdpressRenderWorkerService.js'); ?>

    <?php internal_script('controllers/ThirdpressWebGLRendererController.js'); ?>
    <?php internal_script('controllers/ThirdpressCSS3DRendererController.js'); ?>

    <?php internal_script('directives/ThirdpressWebGLRendererDirective.js'); ?>
  </body>
</html>