export class Ui {
  constructor() { }

  // DISPLAY ALL DATA
  displaydata(result) {
    let cartona = ``;
    let game = result;
    for (let i = 0; i < game.length; i++) {
      cartona += `
                      <div data-id="${game[i].id
        }"  class="card text-center bg-dark p-2 text-white p-2 hoverCard bg-transparent">
                    <div class="contint-card  p-2 bg-dark">
                      <img class="img-fluid" src="${game[i].thumbnail
        }" alt="" />
                      <div class="body-card">
                        <div class="d-flex justify-content-between align-items-center my-3">
                        <h1>${game[i].id} </h1>
                          <p class="m-0">${game[i].title}</p>
                          <button class="btn btn-info btn-sm  px-3 ">free</button>
                        </div>
                        <p class="description"> ${game[
          i
        ].short_description.substring(0, 45)}</p>
                        <div class="d-flex justify-content-between">
                          <p class="btn btn-info btn-sm m-0 ">${game[i].genre
        }<</p>
                          <p class="btn btn-info btn-sm m-0 ">${game[i].platform
        }</p>
                        </div>
                      </div>
                    </div>
                  </div>
       `;
    }

    document.getElementById("showData").innerHTML = cartona;
  }

  // DISPLAT DETIALSE APOUT THE GAME
  displayDetilse(data) {
    const kopaia = `
                <div class="img">
              <h2>${data.title}</h2>
              <img  class="img-fluid" src="${data.thumbnail}" alt="" />
              </div>
            <div class="text">
              <p class="fs-4">Title: ${data.title}</p>
              <p class="fs-4"> type : ${data.genre}</p>
              <p class="fs-4">platForm : ${data.platform}</p>
              <p class="fs-4">status : ${data.status}</p>
              <p class="ssmall">${data.description}</p>
          
              <button class="btn btn-info w-75 m-auto">show game</button>
            </div>`;
    document.getElementById("show-detilse").innerHTML = kopaia;
  }
}
