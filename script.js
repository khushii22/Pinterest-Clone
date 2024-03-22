var arr = [
  {
    name: "anime",
    image:
      "https://images.deepai.org/machine-learning-models/af4d384431974ab5bfda622a20a27695/anime_fairy.jpg",
  },
  {
    name: "Sunflower",
    image:
      "https://i.pinimg.com/236x/45/05/7e/45057ed279f2a434470447cdf83ef2f0.jpg",
  },
  {
    name: "fashion",
    image:
      "https://img.freepik.com/premium-photo/woman-stands-front-wall-with-different-things-mockups_745528-800.jpg?w=740",
  },
  {
    name: "3d",
    image:
      "https://i.pinimg.com/564x/64/5f/2b/645f2b73128182f6754fc19fbf1034d6.jpg",
  },
  {
    name: "art",
    image:
      "https://plus.unsplash.com/premium_photo-1678812165206-688656de3b73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXJ0fGVufDB8fDB8fHww",
  },
  {
    name: "black art",
    image:
      "https://img.freepik.com/premium-photo/abstract-painting-balck-white-color-modern-art-watercolor-paint-art-print-oil-painting_194708-4.jpg?w=360",
  },
  {
    name: "art",
    image:
      "https://i.pinimg.com/564x/6f/02/c9/6f02c9afa88f3bb93935c361b5393e1e.jpg",
  },
  {
    name: "cyberspace",
    image:
      "https://img.freepik.com/premium-photo/smart-city-abstract-line-dot-connect-with-gradient-line-design-big-data-connection-technology-concept-3d-render_146508-1121.jpg?size=626&ext=jpg&ga=GA1.1.1401410453.1711106368&semt=sph",
  },
  {
    name: "eyes girl",
    image:
      "https://i.pinimg.com/564x/28/1c/1e/281c1e3c003299d0fc015122f0ad412c.jpg",
  },
  {
    name: "cartoon",
    image:
      "https://img.freepik.com/premium-vector/flat-illustration-kid-characterin-fall-season-landscape-view-background_990404-689.jpg?w=360",
  },
  {
    name: "icecream",
    image:
      "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGljZSUyMGNyZWFtfGVufDB8fDB8fHww",
  },
  {
    name: "emoji",
    image:
      "https://img.freepik.com/free-photo/view-3d-cartoon-animated-coffee-cup_23-2151083773.jpg?w=740",
  },
  {
    name: "vintage",
    image:
      "https://img.freepik.com/free-photo/ai-image-eclectic-interior-design_23-2150674697.jpg?t=st=1711107037~exp=1711110637~hmac=46f05e37572814e518ecc53d4c18f1e5eb45de4aa3d0cec5821a4feaa875ff30&w=360",
  },
  {
    name: "web desgin",
    image:
      "https://i.pinimg.com/564x/7a/64/22/7a64224c07ec2c423699c1a23cab0879.jpg",
  },
  {
    name: "art",
    image:
      "https://i.pinimg.com/236x/ac/43/59/ac435905d100de23390a67d029d1b0ce.jpg",
  },
  {
    name: "rose",
    image:
      "https://img.freepik.com/free-photo/red-roses-bouquet-table_140725-828.jpg?t=st=1711107234~exp=1711110834~hmac=a241939932b683031a05b5f2782085a5ae230174d9bfcf9027d4a3054e0e1ce7&w=360",
  },
  {
    name: "juice",
    image:
      "https://img.freepik.com/premium-photo/mango-smoothie-high-glass-with-sliced-fresh-mango-fruit-straw-wooden-table-creamy-tropical-drink-dark-background-close-up-mango-drink-ai_756498-1421.jpg?w=360",
  },
  {
    name: "cat",
    image:
      "https://i.pinimg.com/564x/16/ca/b1/16cab153397fc070d5369635ba891e8d.jpg",
  },
  {
    name: "football",
    image:
      "https://img.freepik.com/premium-photo/photo-football-stadium_931878-23665.jpg?size=626&ext=jpg&ga=GA1.1.1401410453.1711106368&semt=sph",
  },
  {
    name: "makeup",
    image:
      "https://img.freepik.com/free-photo/close-up-collection-make-up-beauty-products_23-2148620012.jpg?w=900",
  },
  {
    name: "lifestyle",
    image:
      "https://images.unsplash.com/photo-1526566762798-8fac9c07aa98?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGZsb3dlciUyMHdpdGglMjBib29rc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "cake",
    image:
      "https://images.unsplash.com/photo-1602351447937-745cb720612f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNob2NvbGF0ZSUyMGNha2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "cyberpunk",
    image:
      "https://img.freepik.com/free-photo/cyberpunk-woman-warrior-urban-scenery_23-2150712278.jpg?t=st=1711106400~exp=1711110000~hmac=8f5c481ec87f76734ce8e8f78201d218aadc7634fb0a6b7d961f46e0d2f743c0&w=1060",
  },
];

function showTheCards() {
  var clutter = "";
  arr.forEach(function (obj) {
    clutter += `<div class="box">
            <div class="image-container">
                <img class="cursor-pointer" src="${obj.image}" alt="image">
                <div class="overlay">
                    <p class="caption">${obj.name}</p>
                </div>
            </div>
        </div>`;
  });
  document.querySelector(".container").innerHTML = clutter;
}

function handleHomeButtonClick() {
  var homeButton = document.querySelector("#home");

  homeButton.addEventListener("click", function () {
    document.querySelector("#searchinput").value = "";
    showTheCards();
    document.querySelector(".searchdata").style.display = "none";
    document.querySelector(".overlay").style.display = "none";
  });
}

function handleSearchFunctionality() {
  var input = document.querySelector("#searchinput");

  input.addEventListener("focus", function () {
    document.querySelector(".overlay").style.display = "block";
  });

  input.addEventListener("blur", function () {
    document.querySelector(".overlay").style.display = "none";
  });

  input.addEventListener("input", function () {
    const filteredArray = arr.filter((obj) =>
      obj.name.toLowerCase().startsWith(input.value)
    );
    var clutter = "";
    filteredArray.forEach(function (obj) {
      clutter += `<div class="res flex px-8 py-3">
                <i class="ri-search-line font-semibold mr-5"></i>
                <h3 class="font-semibold">${obj.name}</h3>
            </div>`;
    });
    document.querySelector(".searchdata").style.display = "block";
    document.querySelector(".searchdata").innerHTML = clutter;
  });

  input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      document.querySelector(".searchdata").style.display = "none";
      document.querySelector(".overlay").style.display = "none";

      const filteredArray = arr.filter((obj) =>
        obj.name.toLowerCase().startsWith(input.value)
      );
      var clutter = "";
      filteredArray.forEach(function (obj) {
        clutter += `<div class="box">
            <div class="image-container">
                <img class="cursor-pointer" src="${obj.image}" alt="image">
                <div class="overlay">
                    <p class="caption">${obj.name}</p>
                </div>
            </div>
        </div>`;
      });
      document.querySelector(".container").innerHTML = clutter;
      input.value = "";
      input.focus();
    }
  });
}
handleSearchFunctionality();
handleHomeButtonClick();
showTheCards();
