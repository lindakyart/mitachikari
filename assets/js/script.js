            

            $(function() {
                (function(d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) return;
                    js = d.createElement(s);
                    js.id = id;
                    js.src = 'https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v3.1';
                    fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));
            });

            $(function() {
                window.twttr = (function(d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0],
                        t = window.twttr || {};
                    if (d.getElementById(id)) return t;
                    js = d.createElement(s);
                    js.id = id;
                    js.src = "https://platform.twitter.com/widgets.js";
                    fjs.parentNode.insertBefore(js, fjs);

                    t._e = [];
                    t.ready = function(f) {
                        t._e.push(f);
                    };

                    return t;
                }(document, "script", "twitter-wjs"));

            });
            $(function() {
                $(".scrollBox").mCustomScrollbar({
                    theme: "dark-3"
                });
            });

            $(function() {
                $('.ratebox').raterater({
                    starWidth: 10,
                    spaceWidth: 3,
                    numStars: 5
                });
            });

            $(function() {
                $("#gotop").click(function() {
                    jQuery("html,body").animate({
                        scrollTop: 0
                    }, 1000);
                });
                $(window).scroll(function() {
                    if ($(this).scrollTop() > 300) {
                        $('#gotop').fadeIn("fast");
                    } else {
                        $('#gotop').stop().fadeOut("fast");
                    }
                });
            });

            $(function() {
                $("#gotop").click(function() {
                    jQuery("html,body").animate({
                        scrollTop: 0
                    }, 1000);
                });
                $(window).scroll(function() {
                    if ($(this).scrollTop() > 300) {
                        $('#gotop').fadeIn("fast");
                    } else {
                        $('#gotop').stop().fadeOut("fast");
                    }
                });
            });


            function fixedHeader() {
                if ($(window).scrollTop() > 100) {
                    if (!$(".mainmenu").hasClass("fixedHeader")) {
                        $('.mainmenu').addClass("fixedHeader");
                        $('.fixedHeader').animate({
                            top: "0"
                        }, 500);
                    }
                } else {
                    $('.mainmenu').removeClass("fixedHeader");
                    $('.mainmenu').removeAttr("style");
                }
            }
            $(window).scroll(function() {
                fixedHeader()
            });



            $(function() {
                $("#searchBtn").click(function() {
                    var $this = $(this);
                    $(".rightBox").toggleClass("addRightBox");
                    $("footer").toggleClass("addfooterBox");
                    $this.toggleClass('SeeMore2');
                    if ($this.hasClass('SeeMore2')) {
                        $this.text('開啟進階搜尋條件');
                    } else {
                        $this.text('關閉進階搜尋條件');
                    }
                });
            });

            function windowSize() {
                if ($(window).width() < 992) {
                    $('.leftBox').removeClass('in');
                    $('.serchBtn').addClass('collapsed');
                    $('.serchBtn').addClass('SeeMore2');
                    $("#searchBtn").text('開啟進階搜尋條件')

                } else {
                    $('.leftBox').addClass('in');
                    $('.serchBtn').removeClass('collapsed');
                    $('.serchBtn').removeClass('SeeMore2');
                    $("#searchBtn").text('關閉進階搜尋條件')
                }
            };
            $(window).resize(function() {
                windowSize();
            });
            windowSize();


            $("#treeview").hummingbird();
            $('.example-bootstrap').barrating({
                theme: 'bootstrap-stars',
                showSelectedRating: false,
            });
            $('.example-bootstrapB').barrating({
                theme: 'bootstrap-stars',
                readonly: true,
            });
            $('.starClear a').barrating('clear');