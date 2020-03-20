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