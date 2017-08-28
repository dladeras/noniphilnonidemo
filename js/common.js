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

  // Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('header').outerHeight();

  $(window).scroll(function(event){
      didScroll = true;
  });

  setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }, 250);

  function hasScrolled() {
      var st = $(this).scrollTop();
      
      // Make sure they scroll more than delta
      if(Math.abs(lastScrollTop - st) <= delta)
          return;
      
      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > navbarHeight){
          // Scroll Down
          $('header').removeClass('nav-down').addClass('nav-up');
      } else {
          // Scroll Up
          if(st + $(window).height() < $(document).height()) {
              $('header').removeClass('nav-up').addClass('nav-down');
          }
      }
      
      lastScrollTop = st;
  }

  (function() {

    var navigationItems = document.getElementsByClassName('list__item__link');

    // Adds an active link to the Sidebar navigation
    for (var i = 0; i < navigationItems.length; i++) {
        if (navigationItems[i].href == document.URL) {
            navigationItems[i].className = 'list__item__link active';
        }
    }

  })();

  //Horizontal Tab
  $('#parentHorizontalTab').easyResponsiveTabs({
      type: 'default', //Types: default, vertical, accordion
      width: 'auto', //auto or any width like 600px
      fit: true, // 100% fit in a container
      tabidentify: 'hor_1', // The tab groups identifier
      activate: function(event) { // Callback function if tab is switched
          var $tab = $(this);
          var $info = $('#nested-tabInfo');
          var $name = $('span', $info);
          $name.text($tab.text());
          $info.show();
      }
  });

  // Child Tab
  $('#ChildVerticalTab_1').easyResponsiveTabs({
      type: 'vertical',
      width: 'auto',
      fit: true,
      tabidentify: 'ver_1', // The tab groups identifier
      activetab_bg: '#fff', // background color for active tabs in this group
      inactive_bg: '#F5F5F5', // background color for inactive tabs in this group
      active_border_color: '#c1c1c1', // border color for active tabs heads in this group
      active_content_border_color: '#5AB1D0' // border color for active tabs contect in this group so that it matches the tab head border
  });

  //Vertical Tab
  $('#parentVerticalTab').easyResponsiveTabs({
      type: 'vertical', //Types: default, vertical, accordion
      width: 'auto', //auto or any width like 600px
      fit: true, // 100% fit in a container
      closed: 'accordion', // Start closed if in accordion view
      tabidentify: 'hor_1', // The tab groups identifier
      activate: function(event) { // Callback function if tab is switched
          var $tab = $(this);
          var $info = $('#nested-tabInfo2');
          var $name = $('span', $info);
          $name.text($tab.text());
          $info.show();
      }
  });
});
