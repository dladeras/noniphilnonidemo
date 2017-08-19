$(document).ready(function(){
  /*==============================
    Flippet Small Sliding Menu 
  ===============================*/ 
  
  var sideBar = $( '.main-layout-item-1' );

  function fliSmallMenu(){
    var $block = $( sideBar ),
        $bars = $( '.menu' ),
        $cross = $( '.navigation__close-btn' );
        $navOverlay = $( '.navigation-overlay' );

    $bars.on('click',function(e){
      e.preventDefault();
      if( $block.hasClass('active') ) {
        $block.removeClass('active');
        $bars.removeClass('active');
        $navOverlay.removeClass('active');
      } else {
        $block.addClass('active');
        $bars.addClass('active');
        $navOverlay.addClass('active');
      }
    });

    $cross.on('click',function(e){
      e.preventDefault();
      if( $block.hasClass('active') ) {
        $block.removeClass('active');
        $bars.removeClass('active');
        $navOverlay.removeClass('active');
      } else {
        $block.addClass('active');
        $bars.addClass('active');
        $navOverlay.addClass('active');
      }
    });

    $navOverlay.on('click',function(e){
      e.preventDefault();
      if($block.hasClass('active')){
        $block.removeClass('active');
        $bars.removeClass('close');
        $navOverlay.removeClass('active');
      }
    });
  }

  //call the menu function
  fliSmallMenu();

  // $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
  //   $(this).toggleClass('open');
  // });
});
