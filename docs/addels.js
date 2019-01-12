(() => {
  console.log("running");
  function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }

  var list = ["poolgame", "poolgame722", "poolgame746", "poolgameNEW", "poolgameoptimise", "poolgametrying"];
  var body = document.getElementsByTagName("body")[0];
  for (var i = 0; i < list.length; i++) {
    var div = document.createElement('div');
    var embed = document.createElement('embed');
    setAttributes(embed, {'src': './swf/'+list[i]+'.swf', width: 640, height: 480});
    div.appendChild(embed);
    body.appendChild(div);
  }

})();
console.log("RUN");