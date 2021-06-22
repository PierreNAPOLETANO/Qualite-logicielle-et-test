function panier(produit)
{
    // Vérification si le montant à payer existe ou non
    if (!produit)
    {
        return false;
    }
    
    var resultat = '';

    for (let i = 0; i < 10; i++) {
        var nbProduit = '';

        switch (i) {
            case 0:
                nbProduit = i;
                nbProduit = 'Vous avez' + i + ' produit dans votre panier';
                break;
            case 1:
                nbProduit = i;
                nbProduit = 'Vous avez' + i + ' produit dans votre panier';
                break;
            case 2:
                nbProduit = i;
                nbProduit = 'Vous avez' + i + ' produit dans votre panier';
            default:
                break;
        }

        resultat += nbProduit;
    }

    return resultat;
}