 function ageindays(){
 var birthyear = prompt("what year you born?");
 var ageindayss = (2020 - birthyear)*365;
 var h2 = document.createElement('h2');
 var textanswer= document.createTextNode('i am' + ageindayss + 'days old');
 h2.setAttribute('id','ageindayss');
 h2.appendChild(textanswer);
 document.getElementById('flex-box-result').appendChild(h2);
  }
  function reset(){
      document.getElementById('ageindayss').remove()
  }


  function generateCat(){
     var image= document.createElement('img');
     var div = document.getElementById('flex-cat-gen');
     image.src = "https://2dimes.com/sites/default/files/media/cat.gif";
     div.appendChild(image);
  }