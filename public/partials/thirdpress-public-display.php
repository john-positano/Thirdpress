<?php
  function vendor_style ($path) {
    echo '<style>'.file_get_contents( plugin_dir_path(__FILE__).'../../vendor/'.$path ).'</style>';
  }

  function vendor_script ($path) {
    echo THIRDPRESS_SCRIPT_DEBUG
      ? '<script>'.file_get_contents( plugin_dir_path(__FILE__).'../../vendor/'.$path ).'</script>'
      : '<script src="data:text/javascript;base64,'.base64_encode( file_get_contents( plugin_dir_path(__FILE__).'../../vendor/'.$path ) ).'"></script>'
    ;
  }

  function internal_style ($path) {
    echo '<style>'.file_get_contents( plugin_dir_path(__FILE__).'../css/'.$path ).'</style>';
  }

  function internal_script ($path) {
    echo THIRDPRESS_SCRIPT_DEBUG
      ? '<script>'.file_get_contents( plugin_dir_path(__FILE__).'../js/'.$path ).'</script>'
      : '<script src="data:text/javascript;base64,'.base64_encode( file_get_contents( plugin_dir_path(__FILE__).'../js/'.$path ) ).'"></script>'
    ;
  }

  function node_style ($path) {
    echo '<style>'.file_get_contents( plugin_dir_path(__FILE__).'../../node_modules/'.$path ).'</style>';
  }

  function node_script ($path) {
    echo THIRDPRESS_SCRIPT_DEBUG
      ? '<script>'.file_get_contents( plugin_dir_path(__FILE__).'../../node_modules/'.$path ).'</script>'
      : '<script src="data:text/javascript;base64,'.base64_encode( file_get_contents( plugin_dir_path(__FILE__).'../../modules/'.$path ) ).'"></script>'
    ;
  }
?>
