$( document ).ready(function() {
    console.log( "script ready!" );

    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    });

    $('.navbar-nav').find('a').on('click', function(e){
      $('.navbar-toggler').trigger('click');
    });

    $("#btnCube").hover(function () {
      $(".works-image").stop(true, true);
      $(".works-image").fadeTo('slow', 0, function() {
        $(".works-image").css({ "background-image": "url('./img/cube-image.jpg')" });
        $(".works-text").css({ "background-color": "rgba(0, 0, 0, 0.7)" });
        $(".works-title").html("Adrian's Cube");
        $(".works-desc").html("What started out as a simple to-do list app has become a full-blown Order Management System (OMS) website.<br>This is my first attempt (nor the last) to use Laravel PHP framework.");
      }).fadeTo('slow', 0.70);
    },
    function () {
      $(".works-image").stop(true, true);
      $(".works-image").fadeTo(0, 0, function() {
        $(".works-image").css({ "background-image": "url('./img/work.jpg')" });
        $(".works-text").css({ "background-color": "rgba(0, 0, 0, 0)" });
        $(".works-title").html("<span class='h5'>my</span> Works");
        $(".works-desc").html("");
      }).fadeTo(0, 0.70);
    });

    $("#btnPop").hover(function () {
      $(".works-image").stop(true, true);
      $(".works-image").fadeTo('slow', 0, function() {
        $(".works-image").css({ "background-image": "url('./img/popstop-image.jpg')" });
        $(".works-text").css({ "background-color": "rgba(0, 0, 0, 0.7)" });
        $(".works-title").html("PopStopShop");
        $(".works-desc").html("My real-world implementation of a workable E-commerce website.<br>Lovingly built on Bulma CSS framework with a bit of Javascript magic and alot of vanilla PHP.");
      }).fadeTo('slow', 0.70);
    },
    function () {
      $(".works-image").stop(true, true);
      $(".works-image").fadeTo('slow', 0, function() {
        $(".works-image").css({ "background-image": "url('./img/work.jpg')" });
        $(".works-text").css({ "background-color": "rgba(0, 0, 0, 0)" });
        $(".works-title").html("<span class='h5'>my</span> Works");
        $(".works-desc").html("");
      }).fadeTo(0, 0.70);
    });

    $("#btnOver").hover(function () {
      $(".works-image").stop(true, true);
      $(".works-image").fadeTo('slow', 0, function() {
        $(".works-image").css({ "background-image": "url('./img/overbreak-image.jpg')" });
        $(".works-text").css({ "background-color": "rgba(0, 0, 0, 0.7)" });
        $(".works-title").html("Team OverBreak");
        $(".works-desc").html("My very first static website built on HTML, CSS and Javascript.<br>From someone who just started out in web development, I am proud of what I've created<br><small>(even though it obviously needs a lot more work to be done).</small>");
      }).fadeTo('slow', 0.70);
    },
    function () {
      $(".works-image").stop(true, true);
      $(".works-image").fadeTo('slow', 0, function() {
        $(".works-image").css({ "background-image": "url('./img/work.jpg')" });
        $(".works-text").css({ "background-color": "rgba(0, 0, 0, 0)" });
        $(".works-title").html("<span class='h5'>my</span> Works");
        $(".works-desc").html("");
      }).fadeTo(0, 0.70);
    });

});
