var nomDeLaVariable = prompt('Bonjour tu vas bien ?');
if (nomDeLaVariable === 'oui'){
    nomDeLaVariable = prompt('Tu préfères le rouge ou le bleu ?');
    if (nomDeLaVariable === "rouge"){
        nomDeLaVariable = prompt('Comme la mer ?')
        if (nomDeLaVariable === "oui"){
            alert('Ah! Super j\'adore la mer');
        }else{
            alert('Oh ! Moi qui préfère la mer !');
        }
    }else if (nomDeLaVariable === "bleu"){
        nomDeLaVariable = prompt('Comme le sang ?');
        if (nomDeLaVariable === 'oui'){
            alert('Ola la il fait tout rouge !');
        }else {
            alert('Pfiou moi qui n\'aime pas la vue du sang');
        }
    } else {
        alert('Une erreur s\'est produit');
    }
}else if (nomDeLaVariable === 'non'){
    nomDeLaVariable = prompt('Tu préfères les chiens ou chat ?');
    if (nomDeLaVariable === 'chiens'){
        alert('waouf');
    } else if (nomDeLaVariable === 'chats'){
        alert('miaou');
    } else {
        alert('Une erreur est survenue !');
    }
} else {
    alert('Une erreur est survenue !');
}