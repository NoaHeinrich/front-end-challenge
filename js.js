$(document).ready(function(){
  if ($(window).width() < 767) {
      $("button").hide()
      $("#nav-menu").removeClass("dropdown-menu")
    } else {
      $("button").show()
      $("#nav-menu").addClass("dropdown-menu")
    }
  $(window).resize(function(){
    if ($(window).width() < 767) {
      $("button").hide()
      $("#nav-menu").removeClass("dropdown-menu")
    } else {
      $("button").show()
      $("#nav-menu").addClass("dropdown-menu")
    }
  })

});