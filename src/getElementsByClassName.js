// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var nodeList = [];

  function check(element){
  	var classes = className.split(" ");
  	
    if(element.classList){
      classes.forEach(function(val){
        if(element.classList.contains(val)){
          nodeList.push(element);
        }
      });
    }
    for(var i = 0; i < element.childNodes.length; i++){
     check(element.childNodes[i]);
   }
 };
 check(document.body);
 return nodeList;
};

//document.body, element.childNodes, and element.classList
