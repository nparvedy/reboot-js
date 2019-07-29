var nombreAleatoire = Math.round(Math.random() * 100);

var nombreUtilisateur = prompt('Quel est votre chiffre');

for(var i = 0; i < 10; i++){
    
    var nombreEssai = i + 1;
    if(nombreAleatoire == nombreUtilisateur && nombreEssai === 1){
        alert('Bravo tu as trouvé du premier coup !');
        break;
    }else if(nombreAleatoire == nombreUtilisateur){
        alert('Bravo tu as le chiffre ' + nombreAleatoire + ' en ' + nombreEssai + ' essais !');
        break;
    }else if(nombreEssai == 10){
        alert('Perdu ! Tu n\'as plus d\'essai ! Tu es actuellement sur ' + nombreEssai + '/10.');
        break;
    }else if (nombreAleatoire < nombreUtilisateur){
        var nombreUtilisateur = prompt('plus petit ' + nombreEssai + '/10.');
    }else if (nombreAleatoire > nombreUtilisateur){
        var nombreUtilisateur = prompt('plus grand ' + nombreEssai + '/10.');
    }else{
        alert('Une erreur est survenue');
        break;
    }
}


