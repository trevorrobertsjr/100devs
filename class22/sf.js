function MakeStreetFighter(streetFighterName, streetFighterCountry, streetFighterFightingStyle, streetFighterCharacterStyle) {
    this.streetFighterName = streetFighterName;
    this.streetFighterCountry = streetFighterCountry;
    this.streetFighterFightingStyle = streetFighterFightingStyle;
    this.streetFighterCharacterStyle = streetFighterCharacterStyle
    this.streetFighterTaunt = () => {
        console.log("Not you on the floor counting down.");
    }
    this.streetFighterBattleCry = () => {
        console.log("I've seen some $h!t!!!")
    }
    this.streetFighterWinPose = () => {
        console.log("I win!")
    }
}

let ken = new MakeStreetFighter("Ken", "USA", "Shotokan Karate", "Dark Hadou")
console.log(ken.streetFighterCharacterStyle);
console.log(ken.streetFighterTaunt)
ken.streetFighterTaunt();