(function ($) {
    
   
    
    var Preloader = function () {
        $("html").addClass('preload');
        $(window).on('load', function () {
            // $('html, body').animate({
            //     scrollTop: 0
            // }, 'normal');
            $("#loader").fadeOut("slow", function () {
                $("#preloader").delay(300).fadeOut("slow");
            });
            $("html").removeClass('preload');
            $("html").addClass('loaded');
        });
    };
    var Animation = function () {
        var SEPARATION = 150,
            AMOUNTX = 30,
            AMOUNTY = 30;
        var camera, scene, renderer;
        var particles, particle, count = 0;
        var windowHalfX = window.innerWidth / 2;
        var windowHalfY = window.innerHeight / 2;
        var mouseX = -windowHalfX,
            mouseY = -windowHalfY;
        
        function init() {
            camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 1, 1E5);
            camera.position.z = 1000;
            
            scene = new THREE.Scene();
            
            particles = new Array();
            var PI2 = Math.PI * 2;
            var material = new THREE.SpriteCanvasMaterial({
                color: 0xEEEEEE,
                program: function (context) {
                    context.beginPath();
                    context.arc(0, 0, 0.25, 0, PI2, true);
                    context.fill();
                }
            });
            var i = 0;
            for (var ix = 0; ix < AMOUNTX; ix++) {
                for (var iy = 0; iy < AMOUNTY; iy++) {
                    particle = particles[i++] = new THREE.Sprite(material);
                    particle.position.x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
                    particle.position.z = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);
                    scene.add(particle);
                }
            }
            renderer = new THREE.CanvasRenderer();
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            
            $('#wave').prepend(renderer.domElement);
            $(document).on('mousemove', function (event) {
                mouseX = event.clientX * 0.5 - windowHalfX;
                // mouseY = event.clientY * 0.3 - windowHalfY;
            }).trigger('mousemouve');
            $(window).on('resize', function () {
                windowHalfX = window.innerWidth / 2;
                windowHalfY = window.innerHeight / 2;
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
            render();
        }
        
        function render() {
            camera.position.x += (mouseX - camera.position.x) * .05;
            camera.position.y += (-mouseY - camera.position.y) * .03;
            camera.position.z = 750;
            camera.lookAt(scene.position);
            
            var i = 0;
            for (var ix = 0; ix < AMOUNTX; ix++) {
                for (var iy = 0; iy < AMOUNTY; iy++) {
                    particle = particles[i++];
                    particle.position.y = (Math.sin((ix + count) * 0.25) * 50) + (Math.sin((iy + count) * 0.5) * 50);
                    particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.25) + 1) * 4 + (Math.sin((iy + count) * 0.5) + 1) * 4;
                }
            }
            renderer.render(scene, camera);
            count += 0.05;
            requestAnimationFrame(render);
        }
        
        return init();
    }
    var SmoothScroll = function () {
        $('.smoothscroll').on('click', function (e) {
            var $target = $(this.hash);
            e.preventDefault();
            e.stopPropagation();
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 800, 'swing');
        });
    };
    var AOSStart = function () {
        AOS.init({
            offset: 100,
            duration: 500,
            easing: 'ease-in-sine',
            delay: 250,
            once: true,
            disable: 'mobile'
        });
    };
  
    var PageTrack = function () {
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
        ga('create', 'UA-50190232-1', 'akshatmittal.com');
        ga('require', 'displayfeatures');
        ga('send', 'pageview');
        
        if (window.location.protocol != "https:") window.location.href = "https:" + window.location.href.substring(window.location.protocol.length);
        if (self != top) top.location = self.location;
    };
    (function () {
        Preloader();
        PageTrack();
        Animation();
        SmoothScroll();
        AOSStart();
    })();
})(jQuery);

