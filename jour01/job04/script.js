'use strict'; 

var Annee;
Annee = 2022;

function bissextile(annee) {
    if ( (Annee%4 == 0 && Annee%100 > 0)) {
        console.log("True");
    }
    else {
        console.log("False")
    }
}

bissextile(Annee);