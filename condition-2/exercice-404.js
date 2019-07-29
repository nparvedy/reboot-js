 var word = "Dégage d'ici y'a rien pour toi <br> salut";
 var nb_car = word.length; 

 texte = new Array;
 var tableau = word.split(""); 
 var txt = '';
 var nb_msg = nb_car - 1; 

 for (i=0; i<nb_car; i++) { 
         texte[i] = txt+tableau[i]; 
         var txt = texte[i];
 }

 word = 0;

 function changeMessage()
{
    var phrase = document.getElementById('salut').childNodes; 
    phrase[1].innerText = texte[word]; 
    word++;  
    if(word >= texte.length){
    word = nb_msg;
    
    }
}
     if(document.getElementById){

        setInterval("changeMessage()",100);
    }

console.log(texte);