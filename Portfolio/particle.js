particlesJS("particles-js",
 {"particles":{"number":{
     "value":90,"density":{
         "enable":true,"value_area":868.0624057955}},"color":{"value":"#090606"},"shape":{
             "type":"polygon","stroke":{"width":1,"color":"white"},"polygon":{
                 "nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},
                 "opacity":{"value":0.5,"random":false,"anim":{
                     "enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{
                         "value":4.008530152163807,"random":true,"anim":{"enable":false,"speed":20,"size_min":0.1,"sync":false}},"line_linked":
                         {"enable":true,"distance":128.27296486924183,"color":"#ffffff","opacity":0.8,"width":3},"move":
                         {"enable":true,"speed":10.637532669520752,"direction":"none","random":false,
                         "straight":false,"out_mode":"out","bounce":true,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}}
                         ,"interactivity":{
                             "detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{
                                 "enable":true,"mode":"bubble"},"resize":true},"modes":{"grab":{
                                     "distance":400,"line_linked":{"opacity":1}},"bubble":{
                                         "distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{
                                             "distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},
                                             "retina_detect":true});
                                             var count_particles, stats, update; stats = new Stats;
                                              stats.setMode(0); 
                                              stats.domElement.style.position = 'absolute'; 
                                              stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px';
                                               document.body.appendChild(stats.domElement);
                                                count_particles = document.querySelector('.js-count-particles');
                                                 update = function() { stats.begin(); stats.end(); 
                                                    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) 
                                                    { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;




                                                   // Progress bars
    
      $(function() {

        $(".progress").each(function() {
      
          var value = $(this).attr('data-value');
          var left = $(this).find('.progress-left .progress-bar');
          var right = $(this).find('.progress-right .progress-bar');
      
          if (value > 0) {
            if (value <= 50) {
              right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
            } else {
              right.css('transform', 'rotate(180deg)')
              left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
            }
          }
      
        })
      
        function percentageToDegrees(percentage) {
      
          return percentage / 100 * 360
      
        }
      
      });


     

     
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});




