class GameService {
    constructor() {
        this.apiKey = "3a59a9e32dmsh37896f6fc7af5cap1bae52jsn9f0e4acc4d9b";
        this.apiHost = "free-to-play-games-database.p.rapidapi.com";
        this.baseURL = "https://free-to-play-games-database.p.rapidapi.com/api";
    }

    async fetchGames(category) {
        const options = {
            method: "GET",
            headers: {
                "x-rapidapi-key": this.apiKey,
                "x-rapidapi-host": this.apiHost,
            },
        };

        try {
            const response = await fetch(
                `${this.baseURL}/games?category=${category}`,
                options
            );
            return await response.json();
        } catch (error) {
            console.error("Error fetching games:", error);
        }
    }

    async fetchGameDetails(id) {
        const options = {
            method: "GET",
            headers: {
                "x-rapidapi-key": this.apiKey,
                "x-rapidapi-host": this.apiHost,
            },
        };

        try {
            const response = await fetch(`${this.baseURL}/game?id=${id}`, options);
            return await response.json();
        } catch (error) {
            console.error("Error fetching game details:", error);
        }
    }
}

export default GameService;
