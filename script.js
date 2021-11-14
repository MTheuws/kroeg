//deel1
const myAge = 20;
if (myAge >= 18 && myAge < 26) {
    console.log("Je voldoet aan de minimumleeftijd en bent van harte welkom ook ontvang je 50% korting!");
} else if (myAge > 17) {
    document.write("Je voldoet aan de minimumleeftijd en bent van harte welkom");
} else {
    document.write("Sorry, je voldoet helaas niet aan de minimum leeftijd en je wordt vriendelijk verzocht niet binnen te komen");
}

//deel2
const isFemale = true;
if (isFemale) {
    console.log("Alle vrouwen zijn welkom op ladies night, je mag verder!");
} else {
    console.log("Alleen vrouwen zijn welkom op ladies night, je mag dus niet verder");
}

//deel3
const driverStatus = "bob";
if (driverStatus === "bob") {
    console.log("U geeft aan de bob te zijn en kunt veilig naar huis rijden");
} else {
    console.log("U geeft aan alohol te hebben gedronken en kunt dus niet veilig naar huis rijden");
}

//opdr vergelijking && logische operators
const firstName = "Sarah";
if (firstName === "Sarah" || "Bram") {
    console.log("Wij bestaan 50 jaar en ter ere van dit jubileum krijg jij een gratis biertje!");
}
const totalAmount = 70;
if (totalAmount > 100) {
    console.log("Door uw besteding van meer dan 100 euro ontvangt u ter ere van ons jubileum een gratis fles Champagne!");
} else if (totalAmount > 75) {
    console.log("Door uw besteding van meer dan 75 euro ontvangt u ter ere van ons jubileum een gratis portie nacho's!");
} else if (totalAmount > 50) {
    console.log("Door uw besteding van meer dan 50 euro ontvangt u ter ere van ons jubileum een gratis portie (vegetarische) bitterballen!");
}
