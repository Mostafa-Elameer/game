import { Ui } from "./ui.module.js";
import { Detils } from "./detalisGame.module.js";
export class Home {
  constructor() {
    document.querySelectorAll(".navbar-nav a.nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        this.activeLink(link);
        const dataNave = link.getAttribute("data-nameCat");
        this.getGame(dataNave);
      });
    });
    this.loding = document.querySelector(".loding")
    this.home = document.getElementById("home");
    this.details = document.getElementById("detils");
    this.Ui = new Ui();
    this.getGame("mmorpg");
  }

  // === CHANGE LINK ACTIVE
  async activeLink(link) {
    document.querySelector(".navbar-nav a.active").classList.remove("active");
    link.classList.add("active");
  }

  // GET ALL DATA FROM API
  async getGame(nameNav) {
    this.loding.classList.remove("d-none")
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "7bcb9cf286msh51785089684c5bep1a7db5jsn1dfb6e32a2c8",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const http = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${nameNav}`,
      options
    );

    const reuslt = await http.json();
    this.loding.classList.add("d-none")

    this.Ui.displaydata(reuslt);


    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", () => {
        this.details.classList.remove("d-none");
        this.home.classList.add("d-none");
        new Detils(card.getAttribute("data-id"));
      });
    });
  }
}
