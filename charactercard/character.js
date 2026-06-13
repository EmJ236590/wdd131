const character = {
    name: "Snortleblat",
    characterClass: "Diplomat",
    level: 1,
    health: 100,
    image: "images/swamp-beast.jpg",

    attacked() {
        this.health -= 20;

        if (this.health <= 0) {
            this.health = 0;
            document.getElementById("message").textContent =
                `${this.name} has died!`;
        }

        displayCharacter();
    },

    levelUp() {
        this.level++;
        displayCharacter();
    }
};

function displayCharacter() {
    document.getElementById("characterName").textContent = character.name;
    document.getElementById("characterClass").textContent = character.characterClass;
    document.getElementById("characterLevel").textContent = character.level;
    document.getElementById("characterHealth").textContent = character.health;
    document.getElementById("characterImage").src = character.image;
}

document.getElementById("attackButton").addEventListener("click", () => {
    character.attacked();
});

document.getElementById("levelButton").addEventListener("click", () => {
    character.levelUp();
});

displayCharacter();