var name = prompt('Bonjour !');
if (name === "bonjour"){
    var commentCaVa = prompt('Bonjour ca va ?!');
    if (commentCaVa === "oui"){
        alert("Je suis content pour toi !")
    }else{
        alert('Désolé faut que je file!');
    }
} else if (name === "tu vas bien ?"){
    alert('Bien, et toi ?');
} else{
    alert('Désolé, je n\'ai pas compris...');
}

