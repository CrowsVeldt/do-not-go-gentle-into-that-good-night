function playScript() {
  var audio = document.getElementById('gentle');
  //thanks to: http://patrickmuff.ch/blog/2014/03/12/for-loop-with-delay-in-javascript/
  var maxLoops = 18;
  var counter = 0;

  (function next() {
    if (counter++ > maxLoops) return;

    setTimeout(function() {
      var idName = 'p' + counter;
      document.getElementById(idName).className += " fade";
      audio.play();
      next();
    }, 5000);
  })();

}
