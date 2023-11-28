import './../sass/style.css'



fetch("http://www.omdbapi.com/?apikey=d2f71437&s=sun")
    .then((response) => response.json())
    .then((information) => {
    console.log(information.Search);
    console.log(information);
       //  movieTitles(information.Search); 
       
      const listLenght = information.Search.length; 
      createHtml(information.Search, listLenght);
    });
  
  /*     const movieTitles = (movies) => {
      for (let i=0; i < movies.length; i++) {
        console.log(movies[i].Title);
      }
    };  
 */
     const app = document.getElementById("app");

     
     
    
     
     const createHtml = (movies, listLength) => {
       for (let i=0; i < listLength; i++) {
        const card = document.createElement("section");
        const poster  = document.createElement("article");
        const infoArea = document.createElement("article");
        const title = document.createElement("p");
        const img = document.createElement("img");
        const info = document.createElement("button");
        const year = document.createElement("p");
        const plotContainer  = document.createElement("article");
        const plot = document.createElement("p");

  
        app.appendChild(card);
        card.appendChild(poster);
        card.appendChild(infoArea);
        card.appendChild(plot);

        poster.appendChild(img);
        infoArea.appendChild(title);
        infoArea.appendChild(info);
        infoArea.appendChild(year);
        infoArea.appendChild(plot);

        console.log(movies);
        title.innerHTML = movies[i].Title;
        img.src = movies[i].Poster;
        info.innerHTML = "Plot";
        year.innerHTML = movies[i].Year;
        plot.innerHTML = movies[i].Plot;

        card.className = "card";
        poster.className = "poster";
        infoArea.className = "infoArea";
        img.className = "img";
        title.className = "title";
        info.className = "info";
        year.className = "year";
        plot.className = "plot";
        
        info.addEventListener("click", () => {
          card.classList.toggle("card__extended");
          plot.innerHTML = "";
         
          fetch(`http://www.omdbapi.com/?apikey=d2f71437&i=${movies[i].imdbID}`)
            .then((response) => response.json())
            .then((information) => {
                  console.log(information.Plot);
                  console.log(information);
                  plot.innerHTML = information.Plot;
              plot.classList.toggle("plot__unhide");
              plot.classList.toggle("infoArea__extend");  
                  /*  movieTitles(information.Search); 
                      createHtml(information.Search); */
    });



        })
    };
  };




  /*   Klicka på ett KORT 
    sök efter Plot genom filmen imdb-kod.
    utöka storleken på KORTET
    skapa en ny yta där Plot-texten läggs in.
    vid nästa klick återgår den till normalt.
 */
