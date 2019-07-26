var nombreAleatoire = Math.round(Math.random() * 100);

var nombreUtilisateur = prompt('Quel est votre chiffre');
console.log(nombreUtilisateur);

for(var i = 0; i < 10; i++){
    
    var nombreEssai = i;
    if(nombreAleatoire == nombreUtilisateur){
        alert('Bravo tu as le chiffre ' + nombreAleatoire + ' en ' + nombreEssai + ' !');
        break;
    }else if(nombreAleatoire !== nombreUtilisateur){
        nombreEssai = i + 1;
        var nombreUtilisateur = prompt('Essaye encore ! Tu es actuellement sur ' + nombreEssai + '/10.');
        console.log(nombreEssai);
        if(nombreEssai == 9){
            nombreEssai = nombreEssai + 1;
            alert('Perdu ! Tu n\'as plus d\'essai ! Tu es actuellement sur ' + nombreEssai + '/10.');
            break;
        }
    }else{
        alert('Une erreur est survenue !');
        break;
    }
}