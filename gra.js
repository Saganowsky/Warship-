var randomLocation = Math.floor(Math.random() * 5);
var location1 = randomLocation;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits  = 0;
var tries = 0;
var isSunk = false;

while (isSunk == false) {
    
       guess =  prompt("Podaj pole do zestrzelenia - (liczba z zakresu 1 - 6)");
    
        if (guess < 0 || guess > 6) {
            
            alert("Prosze podac odpowiednia cyfre od 1 do 6 ! ")
            
        } else {
           tries = tries + 1;
            
            
        }
            

    
        if ( guess == location1 || guess == location2 ||  guess == location3) {
            
            alert("Trafiles drania !");
            
          hits = hits + 1;

            if (hits == 3) {
                
                isSunk = true;
                
                alert("No niezle, zniszczylismy te lajbe!");
                
            }
            
            } else {
                
                alert("Probuj dalej !")
            }

    
}


    
    var stats = " Potrzebowales jedynie " + tries + " prob, aby zniszczyc tych amatorow";

alert(stats);
