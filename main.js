//Dzmitry Panamarenka, dzmitry.panamarenka@gmail.com
//https://jsfiddle.net/za48Ljtm/3/
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://gp-js-test.herokuapp.com/api', false);
xhr.send();

if (xhr.status != 200) {
  
  alert( xhr.status + ': ' + xhr.statusText ); 
} else {
  
  var arr = [],
      data = JSON.parse(xhr.responseText),
      count = 0,
      btn = document.getElementById("btn"),
      res = document.getElementById("result"),
      list = document.getElementById("list"),
      last = document.getElementById("last");
  
  btn.addEventListener("click", generate); 
}

function generate (){
    
    var adj = data.adjectives[Math.floor(Math.random() * data.adjectives.length)];
    adj = adj.charAt(0).toUpperCase() + adj.substr(1);
    var city = data.cities[Math.floor(Math.random() * data.cities.length)];
    last.value = adj + " " + city;
    var table = adj + " " + city;
      
    for(var i = 0; i < arr.length; i++){
      if(table == arr[i]){
        generate();
        return false;  
      } 
    }
    arr.push(table);
    list.innerHTML = arr.join('\n');
    count++;
    res.innerHTML = "Generated " + count + " of 10";
    if (count == 10){
      btn.setAttribute("disabled", true);  
    }  
}
