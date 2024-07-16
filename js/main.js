import GameService from "./games.js";
import GameDisplay from "./ui.js";

class App {
    constructor() {
        this.gameService = new GameService();
        this.gameDisplay = new GameDisplay();
        this.init();
    }

    async init() {
        await this.getGames("mmorpg");
        this.setupCategoryListeners();
    }

    async getGames(category) {
        const games = await this.gameService.fetchGames(category);
        if (games) {
            this.gameDisplay.displayGames(games);
        }
    }

    setupCategoryListeners() {
        const categories = [
            "mmorpg",
            "shooter",
            "sailing",
            "permadeath",
            "superhero",
            "pixel",
        ];
        categories.forEach((category) => {
            document.getElementById(category).addEventListener("click", () => {
                this.getGames(category.charAt(0).toUpperCase() + category.slice(1));
            });
        });
    }

    async getDetails(id) {
        const game = await this.gameService.fetchGameDetails(id);
        if (game) {
            this.gameDisplay.displayGameDetails(game);
        }
    }

    closeDetails() {
        this.gameDisplay.hideGameDetails();
    }
}

window.app = new App();
