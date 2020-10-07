// _-_-_-_-_-_-_-_BASE DE DONNE_-_-_-_-_-_-_-_-
//Chaud
var chaud1 = {
    "nom": "Thermos 1",
    "categorie": "chaud",
    "prix": "10.90"
};
var chaud2 = {
    "nom": "Thermos 2",
    "categorie": "chaud",
    "prix": "10.90"
};
var chaud3 = {
    "nom": "Thermos 3",
    "categorie": "chaud",
    "prix": "10.90"
};

//Froid
var froid1 = {
    "nom": "Thermos 4",
    "categorie": "froid",
    "prix": "11.60"
};
var froid2 = {
    "nom": "Thermos 5",
    "categorie": "froid",
    "prix": "11.60"
};
var froid3 = {
    "nom": "Thermos 6",
    "categorie": "froid",
    "prix": "11.60"
};

//Standard
var standard1 = {
    "nom": "Thermos 7",
    "categorie": "standard",
    "prix": "21.60"
};
var standard2 = {
    "nom": "Thermos 8",
    "categorie": "standard",
    "prix": "21.60"
};
var standard3 = {
    "nom": "Thermos 9",
    "categorie": "standard",
    "prix": "21.60"
};

//Accessoires
var accessoire1 = {
    "nom": "Accessoire 1",
    "categorie": "Accessoires",
    "prix": "15.90"
};
var accessoire2 = {
    "nom": "Accessoire 2",
    "categorie": "Accessoires",
    "prix": "15.90"
};
var accessoire3 = {
    "nom": "Accessoire 3",
    "categorie": "Accessoires",
    "prix": "15.90"
};

var produit = [
    //Chaud 0
    [chaud1, chaud2, chaud3],
    //Froid 1
    [froid1, froid2, froid3],
    //Standard 2    
    [standard1, standard2, standard3],
    //Accessoire 3
    [accessoire1, accessoire2, accessoire3]
];

// Fonction qui va chercher tous les produit avec comme entrer "produit[x]"
function searchProduct(a) {
    for (var i = 0; i < produit[a].length; i++) {
        var nom = produit[a][i].nom;
        var categorie = produit[a][i].categorie;
        var prix = produit[a][i].prix;
        addHtmlProduct(nom, prix);

    }
};

/* Fonction qui créé et implante du code html avec les valeurs de la fonction ci-dessus 
! ATTENTION ! Cette fonction devra être appeler dans la boucle for de searchProdudct()*/
function addHtmlProduct(nom, prix) {
    var parent = document.querySelector("#shop_container");
    parent.insertAdjacentHTML('beforeend', '<div class="shop_grid_produit"><img src="https://picsum.photos/200" class="shop_grid_produit_img" alt=""><h2 class="shop_grid_produit_nom">' + nom + '</h2><h2 class="shop_grid_produit_prix">' + prix + 'K €</h2><div class="shop_grid_produit_btn_grp"><a class="shop_grid_produit_detail" href="fiche_produit.html">Détails</a><button class="shop_grid_produit_add"><img src="../icon/panier_add.svg" alt=""></button></div></div>');
};

// Fonction qui supprime du html par class
function removeElementsByClass(classname) {
    var elements = document.getElementsByClassName(classname);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}
// AddEventlistener qui appel les deux fonctions ci-dessus
searchProduct(0);


var chaud = document.querySelector('#shop_btn_chaud');
var froid = document.querySelector('#shop_btn_froid');
var standard = document.querySelector('#shop_btn_standard');
var access = document.querySelector('#shop_btn_access');

function buttonColor(a){

    var list = [chaud, froid, standard, access];

    for(var i = 0; i < list.length; i++){
        list[i].classList.remove("shop_nav_btn_click");
        list[i].classList.remove("shop_nav_btn");
        list[i].classList.add("shop_nav_btn");
    }
    a.classList.remove("shop_nav_btn");
    a.classList.add("shop_nav_btn_click");
}

chaud.addEventListener("click", function (e) {
    buttonColor(chaud);
    removeElementsByClass("shop_grid_produit");
    searchProduct(0);

});

froid.addEventListener("click", function (e) {
    buttonColor(froid);
    removeElementsByClass("shop_grid_produit");
    searchProduct(1);
});

standard.addEventListener("click", function (e) {
    buttonColor(standard);
    removeElementsByClass("shop_grid_produit");
    searchProduct(2);
});

access.addEventListener("click", function (e) {
    buttonColor(access);
    removeElementsByClass("shop_grid_produit");
    searchProduct(3);
});