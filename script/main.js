const textArray = [
    'Cooking is the art, science, and discipline of preparing and presenting food',
    'The fear of cooking is called "mageirocophobia."',
    'There are about 941,600 chefs around the world.',
    'Cooking recipes aren’t subject to copyright.']
const delay = 50
const erasing = 20
const newTextDelay = 2000
let arrIndex = 0
let charIndex = 0

const cursor = document.querySelector(".cursor")
const disText = document.getElementById("typed-text")

function type() {
    if (charIndex < textArray[arrIndex].length) {
        if (!cursor.classList.contains("typing")) {
            cursor.classList.add("typing")
        }
        disText.textContent += textArray[arrIndex].charAt(charIndex)
        charIndex++
        setTimeout(type, delay + 50)
    } else {
        cursor.classList.remove("typing")
        setTimeout(erase, newTextDelay)
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursor.classList.contains("typing")) {
            cursor.classList.add("typing")
        }
        disText.textContent = textArray[arrIndex].substring(0, charIndex - 1)
        charIndex--
        setTimeout(erase, erasing)
    } else {
        cursor.classList.remove("typing")
        arrIndex++
        if (arrIndex >= textArray.length) {
            arrIndex = 0
        }
        setTimeout(type, delay)
    }
}
setTimeout(type, newTextDelay)

function popular() {
    let popularCon = document.querySelector("#popularCon")
    fetch("https://api.spoonacular.com/recipes/random?number=5&tags=desserts&apiKey=f16dbd3c91bc408686a0de6f9e2457fa")
        .then((response) => {
            console.log(response);
            return response.json();
        }).then(data => {
            data.recipes.map(el => {
                let popularRes = `<div class="section_item">
                       <img src="${el.image}" alt="recipe" class="section_img">
                       <span class="span_text2">${el.title}</span>
                   </div>`
                popularCon.innerHTML += popularRes
            });
        }).catch((err) => {
            console.log(err)
        });
}
popular()
function recipeCards() {
    let recipeCards = document.querySelector("#recipe_cards")
    fetch("https://api.spoonacular.com/recipes/random?number=6&tags=vegetarian,salad&apiKey=f16dbd3c91bc408686a0de6f9e2457fa")
        .then((response) => {
            console.log(response);
            return response.json();
        }).then(data => {
            data.recipes.map(el => {
                let card = `<div class="card">
                        <img src="${el.image}" class="card_img" alt="food Image">
                        <div class="card_content">
                            <h3 class="card_title">${el.title}</h3>
                        </div>
                        <div class="btn_div">
                            <button class="view_btn">view</button>
                        </div>
                       </div>`
                recipeCards.innerHTML += card
            });
        }).catch((err) => {
            console.log(err)
        });
}
recipeCards()

function recipeRow() {
    let recipeSerie = document.querySelector("#series")
    fetch("https://api.spoonacular.com/recipes/random?number=30&tags=appetizer&apiKey=f16dbd3c91bc408686a0de6f9e2457fa")
        .then((response) => {
            console.log(response);
            return response.json();
        }).then(data => {
            console.log(data)
            data.recipes.map(el => {
                let row = `<img src="${el.image}" alt="" class="series_img">`
                recipeSerie.innerHTML += row
            });
        }).catch((err) => {
            console.log(err)
        });
}
recipeRow()

const searchBox = document.getElementById("search-box")
searchBox.addEventListener('click', function () {
    window.location.href = "pages/search.html"
})

 function searchRecipe() {
    console.log("search")
    let inputEl = document.getElementById("search-input")
    let inputVal = inputEl.value
    let resultContainer = document.getElementById("result-container")

    fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${inputVal}&apiKey=f16dbd3c91bc408686a0de6f9e2457fa`).then((response) => {
        console.log(response);
        return response.json();
    }).then(data => {
        console.log(data);
        data.results.map(el => {
            console.log(el)
            let card = `<div class="card">
                        <img src="${el.image}" class="card_img" alt="food Image">
                        <div class="card_content">
                            <h3 class="card_title">${el.title}</h3>
                        </div>
                        <div class="btn_div">
                            <button class="view_btn">view</button>
                        </div>
                       </div>`

            resultContainer.innerHTML += card
        });
    }).catch((err) => {
        console.log(err)
    });

}