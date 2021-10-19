//body
let body = document.querySelector('body').style;
body.display = 'flex';
body.fontSize = '18px';

/**
 * la nav sera mise a la vertical a gauche
 * la nav sera fixe en desktop
 * .menu2 sera invisible tant que l'utilisateur n'aura pas mis ca souris
 * sur .menu1
 */

//nav
let nav = document.querySelector('nav');
nav.style.flex = 2;

/** quand la variable a plusieurs elements c'est forcement un tableau */
let ulMenu = document.querySelectorAll('.menuLu');
for (let i = 0; i < ulMenu.length; i++) {
    let style = ulMenu[i].style;
    style.display = "flex";
    style.flexDirection = "column";
    style.margin = 0;
    style.padding = 0;
}

let liMenu = document.querySelectorAll('.menuLi');
for (let j = 0; j < liMenu.length; j++) {
    let style = liMenu[j].style;
    style.display = 'inline-block';
    style.border = 'solid 1px';
    style.padding = '3px';
    style.textAlign = 'center';
    liMenu[j].addEventListener('click', clicker);
}

/**
 * je fais disparaitre le .menu2 et vais le faire reapparaitre avec 
 * un event sur le .menu1
 */

//.menu1 && .menu2
let menu1 = document.querySelector('.menu1');
let menu2 = document.querySelectorAll('.menu2');

/** il faut laisser le .menu2 en display='none' hors fonction pour en
 * faire des parametres par defaut
 */
for (let k = 0; k < menu2.length; k++) {
    let style = menu2[k].style;
    style.display = 'none';
}

//reutiliser les fonctions pour les faire sur d'autre secteur
function displayOn(){
    for (let k = 0; k < menu2.length; k++) {
        let style = menu2[k].style;
        style.display = 'inline-block';
    }
}
function displayOff(){
    for (let k = 0; k < menu2.length; k++) {
        let style = menu2[k].style;
        style.display = 'none';
    }
}

menu1.onmouseover = displayOn;
menu1.onmouseout = displayOff;

// menu1.addEventListener("onmouseover", displayOn, false);
// menu1.addEventListener("onmouseout", displayOff, false);


/*********** CONTENAIRE ***********/
let container = document.querySelector('.container').style;
container.textAlign = 'center';
container.flex = 10;
/**
 * j'ai créé un switch de passage de titre pour que quand l'on clic
 * sur un bouton ou une classe, on puisse changer de page virtuellement
 */

//h1
let titleSelector = document.getElementById('title');

//a
let selectorA = document.querySelector('a').style;
selectorA.textDecoration = 'none';
selectorA.color = 'black';

//.ulLeft
let ulLeft = document.querySelectorAll('.ulLeft');
for (let indexation = 0; indexation < ulLeft.length; indexation++) {
    let style = ulLeft[indexation].style;
    style.padding = 0;
    style.textAlign = 'left';
}

//.souligner
let soulign = document.querySelectorAll('.souligner');
for (let l = 0; l < soulign.length; l++) {
    let style = soulign[l].style;
    style.textDecoration = 'underline';
}

//paragraphe General
let paraDesc = document.getElementById('paraDescription');
let paraMotiv = document.getElementById('paraMotivations');
let paraParc = document.getElementById('paraParcours');
let paraComp = document.getElementById('paraCompetences');

//parcours
paraParc.style.width = '80%';

let fresqueDesign = document.getElementById('contentFresque').style;
fresqueDesign.width = '30%';
fresqueDesign.float = 'right';
let paragraphText = document.getElementById('contenText').style;
paragraphText.width = '60%';
paragraphText.float = 'left';
paragraphText.border = "1px solid";

//contenaireFresque
let contenaireFresque = document.getElementById('contenaireFresque').style;
let contenaireMax = contenaireFresque.height = '250px';
contenaireFresque.width = '20%';
contenaireFresque.margin = '2%';
contenaireFresque.padding = '1%';
contenaireFresque.display = 'flex';
contenaireFresque.flexDirection = 'column';
contenaireFresque.border = '1px solid';

//paragraphe context
let paraParcDate = document.getElementById('dateFresque');
let paraParcEntreprise = document.getElementById('entreprise');
let paraParcPoste = document.getElementById('poste');
let paraParcRealisation = document.getElementById('realisationPoste');

/**
 * je voulais de base utilisé les proprietes de la classe créé dans le html
 * mais le createElement ne vise que les classe natives
 */
// //itemsFresque
// let itemsFresque = document.querySelectorAll('.elementFresque');
// for (let n = 0; n < itemsFresque.length; n++) {
//     let style = itemsFresque[n].style;
//     style.width = '100%';
//     style.border = 'solid 1px';
//     style.backgroundColor = '#06A';
//     /** je fais un calcul pour que la hauteur d'un item soit toujours proportionnel
//      * au nombre qu'il y a dedans
//     */
//     let calcHeight = 100 / itemsFresque.length;
//     let resultCalcHeight = calcHeight+'%';
//     style.height = resultCalcHeight;
// }

//*****presentation par default*****
titleSelector.textContent = 'En ce qui me concerne';
funcNone(paraMotiv);
funcNone(paraParc);
funcNone(paraComp);
funcOn(paraDesc);

//fonction onclick()
/**
 * si j'appuye sur le 'li' de l'id == 'machin'
 * alors le 'nameValue' du switch prend la valeur de 'machin'
 *
 * evt.target attibut quelque chose au target
 * 
 * function clicker(evt){
 *  return evt.target
 * }
 * li.addEventListener('click' , clicker);
 * 
 * switch(clicker)
 * 
 * quand le parametre event est mis, il est bon de creer un event.stopPropagation();
 */

function clicker(evt){
    evt.stopPropagation();
    changeTitle(evt.target.id);
}

function changeTitle(nameValue){
    // switch(nameValue){
    //     case 'accueil':
    //         titleSelector.textContent = 'A propos de moi';
    //         break;
    //     case 'motivations':
    //         titleSelector.textContent = 'Mes motivations';
    //         break;
    //     case 'parcours':
    //         titleSelector.textContent = 'Mon parcours professionnel';
    //         break;
    //     case 'competences':
    //         titleSelector.textContent = 'Mes compétences / réalisations';
    //         break;
    //     default:
    //         //accueil
    //         titleSelector.textContent = 'A propos de moi def';
    //         break;
    // }
    if(nameValue == 'apropos'){
        titleSelector.textContent = 'En ce qui me concerne';
        funcNone(paraMotiv, paraParc, paraComp);
        funcOn(paraDesc);
    }
    else if(nameValue == 'motivations'){
        titleSelector.textContent = 'Mes motivations';
        funcNone(paraDesc, paraParc, paraComp);
        funcOn(paraMotiv);
    }
    else if(nameValue == 'parcours'){
        titleSelector.textContent = 'Mon parcours professionnel';
        funcNone(paraMotiv, paraDesc, paraComp);
        funcOn(paraParc);

    }
    else if(nameValue == 'competences'){
        titleSelector.textContent = 'Mes compétences / réalisations';
        funcNone(paraMotiv, paraDesc, paraParc);
        funcOn(paraComp);
    }
    else{
        titleSelector.textContent = 'A propos de moi';
    }
}

/**
 * j'ai bien envie de faire un switch pour le contenu aussi
 * mais "mes compétences / réalisations" auront des liens et des images
 */

/**
 * rest Parameters
 * il prendra n'importe quel valeur que le parametre lui donnera
 * @param {*} docs permet de prendre la div ciblé et de lui attribuer un display: none;
 */
function funcNone(...docs){
    //fonctionne avec les div pas avec les p
    docs.map(x => x.style.display = 'none');
}
function funcOn(...docs) {
    docs.map(x => x.style.display = 'inline-block');
}

/**
 * creation d'un chiffre random pour la couleur de back des itemsFresque
 * Math.floor defini en chiffre entier
 */
function randomColor(max) {
    return Math.floor(Math.random() * (max - 1) + 1);
}

/**
 * afficher l'objet dans l'endroit voulu
 */

function remplissageContext(obj) {

    //mise en place de l'integration de l'objet dans le html
    paraParcDate.textContent = obj.date;
    paraParcEntreprise.textContent = obj.entreprise;
    paraParcPoste.textContent = obj.poste;
    paraParcRealisation.textContent = obj.realisation;
}

/***** utilisation des Objets *****/
//paragraphe parcours
/**
 * pour la partie parcour, j'ai bien envie d'essayer les objets pour retransmettre
 * des infos venant de la fresque au paragraphe
 * 
 * @param {*} date Parcours.date
 * @param {*} entreprise Parcours.entreprise
 * @param {*} poste Parcours.poste
 * @param {*} realisation Parcours.realisation
 */
//constructor
function Parcours(date, entreprise, poste, realisation){
    this.date = date;
    this.entreprise = entreprise;
    this.poste = poste;
    this.realisation = realisation;
}

//liste
const listeDate = ["Septembre 1989", "Octobre 1990", "Decembre 1991", "Janvier 1992"];
const listeEntreprise = ["Lycée La Tourelle", "Montgallet", "Surcouf", "Grosbill"];
//dans ces dernieres listes, il y a des repetitions
const listePoste = ["Eleve", "Vendeur / technicien", "Vendeur / technicien","Vendeur / technicien"];
const listeRealisation = ["BEP Electronique / Bac Pro MRIM", "ventes et reparations d'ordinateur",
 "ventes et reparations d'ordinateur", "ventes et reparations d'ordinateur"];

/**
 * integrations des objets dans une liste (tableau)
 * 
 * j'integre les objets dans une div qui est parent de l'id contenaireFresque
 * j'integre les parametres des div directement dans la boucle
 */
for(let o = 0; o < listeDate.length; o++){
    var parcoursIt = [];
    //instanciation de l'objet
    parcoursIt = new Parcours(listeDate[o], listeEntreprise[o], listePoste[o], listeRealisation[o]);
    let elementFresque = document.createElement("div");
    
    /**
     * je vais creer un evenement sur la div,
     * chaque element va afficher son objet dans le paragraphe
     */
    elementFresque.addEventListener("onmouseovers", remplissageContext(parcoursIt),false);

    let style = elementFresque.style;
    style.width = '100%';
    style.border = 'solid 1px';
    style.backgroundColor = "rgb("+ randomColor(255) + "," + randomColor(255) + "," + randomColor(255)+")";
    /** je fais un calcul pour que la hauteur d'un item soit toujours proportionnel
     * au nombre qu'il y a dedans
    */
    //en pourcentage
    // let calcHeight = 100 / itemsFresque.length;
    // let resultHeightPourcent = calcHeight+'%';
    // style.height = resultHeightPourcent;

    //en pixel
    let calcHeight = 250 / listeDate.length;
    let resultHeightPixel = calcHeight+"px";
    style.height = resultHeightPixel;
    // elementFresque.appendChild(document.createTextNode('test'));
    document.getElementById('contenaireFresque').appendChild(elementFresque);
}




