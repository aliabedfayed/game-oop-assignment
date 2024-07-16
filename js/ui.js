class GameDisplay {
    displayGames(games) {
        let container = "";
        for (let game of games) {
            container += `
            <div class="col-lg-3 col-md-4 col-sm-6 mt-3 d-flex flex-column align-content-between">
              <div class="card bg-dark" onclick="app.getDetails(${game.id})">
                <img src="${game.thumbnail}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title text-white">${game.title}</h5>
                  <p class="card-text text-white">${game.short_description}</p>
                </div>
                <div class="card-body d-flex justify-content-between">
                  <p class="card-footer">${game.genre}</p>
                  <p class="card-footer">${game.platform}</p>
                </div>
              </div>
            </div>
          `;
        }
        document.querySelector(".row").innerHTML = container;
    }

    displayGameDetails(game) {
        const container = `
      <div class="d-flex justify-content-end mt-5">
                <button class="btn btn-close" onclick="app.closeDetails()"></button>
              </div>
          <div class="gameDetails row d-flex justify-content-center mt-5">
            <div class="row col-md-6 col-sm-12 col-xs-12">
              <h3 class="text-white">Game Details</h3>
              <img src="${game.thumbnail}" alt="game image">
            </div>
            <div class="row col-md-6 col-sm-12">
              
              <h3 class="text-white">Title: <span>${game.title}</span></h3>
              <h4 class="text-white">Category: <span>${game.genre}</span></h4>
              <h4 class="text-white">Platform: <span>${game.platform}</span></h4>
              <h4 class="text-white">Status: <span>${game.status}</span></h4>
              <p class="text-white">${game.description}</p>
              <a class="text-white" href="${game.game_url}">Show Game</a>
            </div>
          </div>
        `;
        document.querySelector(".all").style.display = "none";
        document.querySelector("#details").innerHTML = container;
        document.querySelector("#details").style.display = "block";
    }

    hideGameDetails() {
        document.querySelector("#details").style.display = "none";
        document.querySelector(".all").style.display = "block";
    }
}
export default GameDisplay;