fetch("https://picsum.photos/v2/list")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    const images = data;

    images.forEach((singleImg) => {
      let author = singleImg.author;
      let img = singleImg.download_url;
      let id = singleImg.id;
      let unsplash = singleImg.url;

      let imgItem = document.createElement("div");

      //- images
      let picture = document.createElement("img");
      picture.setAttribute("src", img);
      picture.setAttribute("alt", "random Image");
      imgItem.appendChild(picture);

      //-author

      let authorOfImg = document.createElement("h4");
      authorOfImg.textContent = author;
      imgItem.appendChild(authorOfImg);

      //- Button
      let showMore = document.createElement("button");
      showMore.textContent = "Show more";

      showMore.addEventListener("click", () => {
        window
          .open(unsplash)
          //  ERROR
          .catch((err) => {
            console.log("Fehler beim weiterleiten");
          });
      });

      imgItem.appendChild(showMore);

      //* Erstellt ein div für jedes Bild
      document.querySelector(".images").appendChild(imgItem);
    });
  })
  //   ERROR
  .catch((error) => {
    console.error("Fehler beim Laden der Bilder", error);
  });
