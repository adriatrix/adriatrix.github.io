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

    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #000}";
        document.body.appendChild(css);
    };

});
