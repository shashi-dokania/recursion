// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  //checking corner cases
  if(obj === null || obj === NaN){return "null";};
  if(typeof obj === 'function' || typeof obj === undefined){return undefined;}
  if(typeof obj === 'boolean' || typeof obj === 'number'){return obj.toString();}
  if(typeof obj === 'string'){return '"' + obj + '"';}
  
  if (typeof obj === 'object'){
  //if the function parameter is an array
  	if (Array.isArray(obj)){
  		var stringify = '[';

  		obj.forEach(function(val, index){
  			var value = stringifyJSON(val);
  			if(value === "null" || value === undefined){
  				stringify += 'null';
  			}
  			else{
  				stringify += value;
  			}
  			if(index <= obj.length - 2){
  				stringify += ',';
  			}
  		})
  		stringify += ']';
  	}
  	//if the function parameter is an Object
  	else {
  		stringify = "{";
  		var count = Object.keys(obj).length;
  		for(var key in obj){
  			value = stringifyJSON(obj[key]);
  			if(value === undefined){
  				count--;
  			}
  			else{
  				stringify += '"'+ key.toString() + '"' + ':' + value;
  			}
  			if(count >= 2){
  				stringify += ',';
  				count--;
  			}
  		}
  		stringify += '}';
  	}
  }
  return stringify;
};



