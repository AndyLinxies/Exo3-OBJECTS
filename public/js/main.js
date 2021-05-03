//Exo1
let perso1 = {
    nom: "François",
    panier:["huile","tomate","epices","poivrons","sel","pain"],
    derober (){
        this.panier.push(perso2.panier.pop(),perso2.panier.pop())
    }
}
let perso2 = {
    nom: "Sergio",
    panier :["epices","poivrons","sel","pain","plantins","piment"]
}
perso1.derober();
//perso2.apart();
console.log(perso1.panier);
console.log(perso2.panier);