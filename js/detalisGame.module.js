import { Ui } from "./ui.module.js";
import { Home } from "./home.module.js";
export class Detils {
  constructor(id) {
    document.getElementById("btnClose").addEventListener("click", () => {
      this.details.classList.add("d-none");
      this.home.classList.remove("d-none");
    });
    this.home = document.getElementById("home");
    this.details = document.getElementById("detils");
    this.getDetilse(id);
  }

  // GET DETIALS BY ID 
  async getDetilse(id) {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "7bcb9cf286msh51785089684c5bep1a7db5jsn1dfb6e32a2c8",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const http = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );

    const respons = await http.json();
    console.log(respons);
    new Ui().displayDetilse(respons);
  }
}
