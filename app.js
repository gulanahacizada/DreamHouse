//////search filtr
let search = document.querySelector(".search");

let names = document.querySelectorAll(".name");


search.addEventListener("change", () => {
  let searchTerm = search.value.trim().toLowerCase();

  if (searchTerm === "") {
    names.forEach((name) => {
      name.parentElement.style.display = "inline";
    });
  } else {
    names.forEach((name) => {
      let currentName = name.innerText.trim().toLowerCase();
      let parentDiv = name.parentElement;

      if (currentName.includes(searchTerm)) {
        parentDiv.style.display = "inline";
      } else {
        parentDiv.style.display = "none";
      }
    });
  }
});

////




/////catagory filtr
let massiv = []


let all = document.querySelectorAll(".all")
let category = document.querySelectorAll(".category")
let inps = document.querySelectorAll(".inp")
let max = document.querySelector(".max")
let min = document.querySelector(".min")
let price = document.querySelectorAll(".price")
let spans = document.querySelectorAll("span")
let rating = document.querySelectorAll(".rating")
let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let four = document.querySelector(".four")
let five = document.querySelector(".five")
all.forEach((button) => {
  button.addEventListener("click", () => {
    all.forEach((otherButton) => {
      otherButton.classList.remove("clicked");
    });

    button.classList.add("clicked");
    count1.checked = false;
    count2.checked = false;
    search.value=""
    category.forEach((c) => {
      if (button.innerText == c.innerText || button.innerText == "All") {
        c.parentElement.style.display = "inline";
        let p = c.nextElementSibling.nextElementSibling.firstElementChild.innerText.replace("$", "");
        let price = c.nextElementSibling.nextElementSibling.firstElementChild

        /// price filtr

        inps.forEach((inp) => {
          inp.addEventListener("change", (e) => {
            let a = e.target.nextElementSibling.innerText;
            let b = a.split("-")
            min.value = b[0]
            max.value = b[1]
            count1.checked = false;
            count2.checked = false;
            if ((parseFloat(price.innerText.replace("$", "")) > parseFloat(b[0])) && (parseFloat(price.innerText.replace("$", "")) < parseFloat(b[1]))) {
              c.parentElement.style.display = "inline"
      ///rating filtr
              spans.forEach((span) => {
                span.addEventListener("click", () => {
                  r = price.parentElement.previousElementSibling.firstElementChild.innerText.substring(7, rating.length)

                  if ((span.classList.contains("rating-select")) == false) {
                    count1.checked = false;
                    count2.checked = false;
                    span.classList.add("rating-select")
                    if ((span.classList.contains("rating-select")) && (span.classList.contains("two"))) {
                      one.classList.add("rating-select")
                    } else if ((span.classList.contains("rating-select")) && (span.classList.contains("three"))) {
                      one.classList.add("rating-select")
                      two.classList.add("rating-select")
                    } else if ((span.classList.contains("rating-select")) && (span.classList.contains("four"))) {
                      one.classList.add("rating-select")
                      two.classList.add("rating-select")
                      three.classList.add("rating-select")
                    } else if ((span.classList.contains("rating-select")) && (span.classList.contains("five"))) {
                      one.classList.add("rating-select")
                      two.classList.add("rating-select")
                      three.classList.add("rating-select")
                      four.classList.add("rating-select")
                    }




                    if ((span.classList.contains("rating-select")) && (span.classList.contains("one")) && (r == "1")) {
                      c.parentElement.style.display = "inline"
                    } else if ((span.classList.contains("rating-select")) && (span.classList.contains("two")) && (r == "2")) {

                      c.parentElement.style.display = "inline"
                    } else if ((span.classList.contains("rating-select")) && (span.classList.contains("three")) && (r == "3")) {

                      c.parentElement.style.display = "inline"
                    } else if ((span.classList.contains("rating-select")) && (span.classList.contains("four")) && (r == "4")) {

                      c.parentElement.style.display = "inline"
                    } else if ((span.classList.contains("rating-select")) && (span.classList.contains("five")) && (r == "5")) {

                      c.parentElement.style.display = "inline"
                    } else {
                      c.parentElement.style.display = "none"
                    }

                  } else {
                    if (span.classList.contains("one")) {
                      two.classList.remove("rating-select")
                      three.classList.remove("rating-select")
                      four.classList.remove("rating-select")
                      five.classList.remove("rating-select")
                    } else if (span.classList.contains("two")) {
                      five.classList.remove("rating-select")
                      three.classList.remove("rating-select")
                      four.classList.remove("rating-select")
                    } else if (span.classList.contains("three")) {
                      four.classList.remove("rating-select")
                      five.classList.remove("rating-select")
                    } else if (span.classList.contains("four")) {
                      five.classList.remove("rating-select")

                    }

                    if ((span.classList.contains("one")) && (r == "1")) {
                      c.parentElement.style.display = "inline"
                    } else if ((span.classList.contains("two")) && (r == "2")) {
                      span.nextElementSibling.classList.remove("rating-select")
                      span.nextElementSibling.nextElementSibling.classList.remove("rating-select")
                      span.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove("rating-select")
                      c.parentElement.style.display = "inline"
                    } else if ((span.classList.contains("three")) && (r == "3")) {
                      span.nextElementSibling.classList.remove("rating-select")
                      span.nextElementSibling.nextElementSibling.classList.remove("rating-select")
                      c.parentElement.style.display = "inline"
                    } else if ((span.classList.contains("four")) && (r == "4")) {
                      span.nextElementSibling.classList.remove("rating-select")
                      c.parentElement.style.display = "inline"
                    } else if ((span.classList.contains("five")) && (r == "5")) {
                      c.parentElement.style.display = "inline"
                    } else {
                      c.parentElement.style.display = "none"
                    }

                  }
                })
              })
            } else {
              c.parentElement.style.display = "none"

            }
          })
        })
        min.addEventListener("change", () => {
          max.addEventListener("change", () => {
            count1.checked = false;
            count2.checked = false;
            if ((parseFloat(price.innerText.replace("$", "")) > parseFloat(b[0])) && (parseFloat(price.innerText.replace("$", "")) < parseFloat(b[1]))) {
              c.parentElement.style.display = "inline"
            }
            else {
              c.parentElement.style.display = "none"

            }

          })
        })

      }
      else {
        c.parentElement.style.display = "none";
      }
    });

  });
});



/////discount filtr

let count1 = document.querySelector(".count1");
let count2 = document.querySelector(".count2");

let productContainers = document.querySelectorAll(".large  div");

count1.addEventListener("change", () => {
  filterProducts();
});
count2.addEventListener("change", () => {
  filterProducts();
});

function filterProducts() {
  spans.forEach((span) => {
    span.classList.remove("rating-select")
  })
  max.value = ""
  min.value = ""
  inps.forEach((inp) => {
    inp.checked = false;
  })
  all.forEach((all) => {
    all.classList.remove("clicked");
  });
  let selectedColor = count1.checked ? "red" : "";
  productContainers.forEach((container) => {
    let price = container.querySelector(".price");

    if (price && price.style.color === selectedColor) {
      container.style.display = "block";
    } else {
      container.style.display = "none";
    }
  });
}



//////


//// clear button
let clear = document.querySelector(".clear")
let pricediv = document.querySelectorAll(".pricediv")
let ratingdiv = document.querySelectorAll(".ratingdiv")

clear.addEventListener("click", () => {
  spans.forEach((span) => {
    span.classList.remove("rating-select")
  })
  max.value = ""
  min.value = ""
  inps.forEach((inp) => {
    inp.checked = false;
  })
  divs.forEach((div) => {
    div.style.display = "inline"
  })
  pricediv.forEach((div) => {
    div.style.display = "flex"
  })
  ratingdiv.forEach((div) => {
    div.style.display = "flex"
    div.style.marginLeft = "5px"
  })
  count1.checked = false;
  count2.checked = false;
  all.forEach((all) => {
    all.classList.remove("clicked");
  });
  search.value = ""

})



////favori
let icons = document.querySelectorAll(".icon1");
let back = document.querySelector(".back")

icons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    e.preventDefault()

    if (icon.dataset.state === "black") {
      icon.src = "./image/heartred.png";
      icon.dataset.state = "red";
     
    } else if (icon.dataset.state === "red") {
      icon.src = "./image/heartblack.png";
      icon.dataset.state = "black";
     
    }
  });
});

let divs = document.querySelectorAll(".large div")
let favori = document.querySelector(".fav")
favori.addEventListener("click", (e) => {
  e.preventDefault();
  productContainers.forEach((container) => {
    let icon = container.querySelector(".icon1");
    if (icon && icon.dataset.state === "red") {
      container.style.display = "block";
    } else {
      container.style.display = "none";
    }
  });
  back.style.display = "inline";
});

back.addEventListener("click", () => {
  divs.forEach((div) => {
    div.style.display = "inline"
  })
  back.style.display = "none"
})






let more = document.querySelectorAll(".more")
more.forEach((m) => {
  m.addEventListener("click", () => {
    let a = m.nextElementSibling.innerText
    localStorage.setItem("name", `${m.nextElementSibling.innerText}`)
  })
})
let b = localStorage.getItem("name")

