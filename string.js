//Exercice 1

function repeat(s, n){
    let string = "";
    let concat = s;
    for(let i = 0; i < n; i++){
        string = string + concat;
    }

    return string;
}

//Exercice 2

function truncate(s, n){
    let taille = s.length;
    if(n >= taille){

        return s;
    }
    else{
        let newstring = s.substring(0,(n-3));
        newstring += "...";

        return newstring;
    }
}

//Exercice 3

function isPalindrome(s){
    let string = "";
    let taille = s.length;
    for(let i = (taille - 1); i >= 0; i--){
        string += s[i];
    }
    if(string == s){
        return true;
    }
    else {
        return false;
    }
}

function isPalindrome2(s){   //fonction plus efficace
    let taille = s.length;
    let lim = (taille/2) + 1;
    for(let i = 0; i < lim; i++){
        if(s[i] != s[taille - 1 - i]){
            return false;
        }
    }

    return true;
}

//Exercice 4 

function swapCase(s){
    let taille = s.length;
    let string = "";
    for(let i = 0; i < taille; i++){
        if(s[i] == s[i].toUpperCase()){      //Si s[i] est une majuscule
            string += s[i].toLowerCase();
        }
        else if(s[i] == s[i].toLowerCase()){     //Si s[i] est une minuscule
            string += s[i].toUpperCase();
        }
        else{
            string += s[i];
        }
    }

    return string;
}