function estMort(joueur) {
    if(joueur.dieu == true) return false;
    if (joueur.objets && joueur.objet.anneauImmortel) return false;
    return joueur.pv <= 0;
}
  
module.exports = estMort;