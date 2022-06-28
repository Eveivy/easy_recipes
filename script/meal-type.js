function direct() {
    window.location.href = "search.html"
};

function  mainCourse() {
    let marinadeRecipes = document.querySelector("#main-course")
    fetch("https://api.spoonacular.com/recipes/random?number=9&tags=main course&apiKey=f16dbd3c91bc408686a0de6f9e2457fa")
        .then((response) => {
            console.log(response);
            return response.json();
        }).then(data => {
            console.log(data)
            data.recipes.map(el => {
                let card = ` <div class="section_item">
                       <img src="${el.image}" alt="recipe" class="section_img">
                       <span class="span_text2">${el.title}</span>
                   </div>`
                marinadeRecipes.innerHTML += card
            });
        }).catch((err) => {
            console.log(err)
        });
}
mainCourse()

function soupFunc(){
    let soup = document.querySelector("#soup-section")
    fetch("https://api.spoonacular.com/recipes/random?number=9&tags=soup&apiKey=f16dbd3c91bc408686a0de6f9e2457fa")
        .then((response) => {
            console.log(response);
            return response.json();
        }).then(data => { 
            data.recipes.map(el => {
                let card = `<div class="section_item">
                       <img src="${el.image}" alt="recipe" class="section_img">
                       <span class="span_text2">${el.title}</span>
                   </div>`
               soup.innerHTML += card
            });
        }).catch((err) => {
            console.log(err)
        });
}
soupFunc()

function beverages() {
    let bevSec = document.querySelector("#beverage")
    fetch("https://api.spoonacular.com/recipes/random?number=9&tags=beverage&apiKey=f16dbd3c91bc408686a0de6f9e2457fa")
        .then((response) => {
            console.log(response);
            return response.json();
        }).then(data => {
            console.log(data)
            data.recipes.map(el => {
                let card = ` <div class="section_item">
                       <img src="${el.image}" alt="recipe" class="section_img">
                       <span class="span_text2">${el.title}</span>
                   </div>`
                bevSec.innerHTML += card
            });
        }).catch((err) => {
            console.log(err)
        });
} 
beverages() 

function desserts() {
    let dessertSec = document.querySelector("#dessert")
    fetch("https://api.spoonacular.com/recipes/random?number=9&tags=dessert&apiKey=f16dbd3c91bc408686a0de6f9e2457fa")
        .then((response) => {
            console.log(response);
            return response.json();
        }).then(data => {
            console.log(data)
            data.recipes.map(el => {
                let card = ` <div class="section_item">
                       <img src="${el.image}" alt="recipe" class="section_img">
                       <span class="span_text2">${el.title}</span>
                   </div>`
                dessertSec.innerHTML += card
            });
        }).catch((err) => {
            console.log(err)
        });
}
desserts() 

function marinade() {
    let marinadeRecipes = document.querySelector("#appetizer")
    fetch("https://api.spoonacular.com/recipes/random?number=9&tags=appetizer&apiKey=f16dbd3c91bc408686a0de6f9e2457fa")
        .then((response) => {
            console.log(response);
            return response.json();
        }).then(data => {
            console.log(data)
            data.recipes.map(el => {
                let card = ` <div class="section_item">
                       <img src="${el.image}" alt="recipe" class="section_img">
                       <span class="span_text2">${el.title}</span>
                   </div>`
                marinadeRecipes.innerHTML += card
            });
        }).catch((err) => {
            console.log(err)
        });
}
marinade() 
function salad() {
    let marinadeRecipes = document.querySelector("#salad")
    fetch("https://api.spoonacular.com/recipes/random?number=9&tags=salad&apiKey=f16dbd3c91bc408686a0de6f9e2457fa")
        .then((response) => {
            console.log(response);
            return response.json();
        }).then(data => {
            console.log(data)
            data.recipes.map(el => {
                let card = ` <div class="section_item">
                       <img src="${el.image}" alt="recipe" class="section_img">
                       <span class="span_text2">${el.title}</span>
                   </div>`
                marinadeRecipes.innerHTML += card
            });
        }).catch((err) => {
            console.log(err)
        });
}
salad()

function sideDish() {
    let marinadeRecipes = document.querySelector("#side-dish")
    fetch("https://api.spoonacular.com/recipes/random?number=9&tags=side dish&apiKey=f16dbd3c91bc408686a0de6f9e2457fa")
        .then((response) => {
            console.log(response);
            return response.json();
        }).then(data => {
            console.log(data)
            data.recipes.map(el => {
                let card = ` <div class="section_item">
                       <img src="${el.image}" alt="recipe" class="section_img">
                       <span class="span_text2">${el.title}</span>
                   </div>`
                marinadeRecipes.innerHTML += card
            });
        }).catch((err) => {
            console.log(err)
        });
}
sideDish() 

function  breakFast() {
    let marinadeRecipes = document.querySelector("#break-fast")
    fetch("https://api.spoonacular.com/recipes/random?number=9&tags=breakfast&apiKey=f16dbd3c91bc408686a0de6f9e2457fa")
        .then((response) => {
            console.log(response);
            return response.json();
        }).then(data => {
            console.log(data)
            data.recipes.map(el => {
                let card = ` <div class="section_item">
                       <img src="${el.image}" alt="recipe" class="section_img">
                       <span class="span_text2">${el.title}</span>
                   </div>`
                marinadeRecipes.innerHTML += card
            });
        }).catch((err) => {
            console.log(err)
        });
}
breakFast() 

function  saucy() {
    let marinadeRecipes = document.querySelector("#sauce")
    fetch("https://api.spoonacular.com/recipes/random?number=9&tags=sauce&apiKey=f16dbd3c91bc408686a0de6f9e2457fa")
        .then((response) => {
            console.log(response);
            return response.json();
        }).then(data => {
            console.log(data)
            data.recipes.map(el => {
                let card = ` <div class="section_item">
                       <img src="${el.image}" alt="recipe" class="section_img">
                       <span class="span_text2">${el.title}</span>
                   </div>`
                marinadeRecipes.innerHTML += card
            });
        }).catch((err) => {
            console.log(err)
        });
}
saucy()

function bread() {
    let marinadeRecipes = document.querySelector("#bread")
    fetch("https://api.spoonacular.com/recipes/random?number=9&tags=bread&apiKey=f16dbd3c91bc408686a0de6f9e2457fa")
        .then((response) => {
            console.log(response);
            return response.json();
        }).then(data => {
            console.log(data)
            data.recipes.map(el => {
                let card = ` <div class="section_item">
                       <img src="${el.image}" alt="recipe" class="section_img">
                       <span class="span_text2">${el.title}</span>
                   </div>`
                marinadeRecipes.innerHTML += card
            });
        }).catch((err) => {
            console.log(err)
        });
}
bread() 

function fingerFood() {
    let marinadeRecipes = document.querySelector("#finger-food")
    fetch("https://api.spoonacular.com/recipes/random?number=9&tags=fingerfood&apiKey=f16dbd3c91bc408686a0de6f9e2457fa")
        .then((response) => {
            console.log(response);
            return response.json();
        }).then(data => {
            console.log(data)
            data.recipes.map(el => {
                let card = ` <div class="section_item">
                       <img src="${el.image}" alt="recipe" class="section_img">
                       <span class="span_text2">${el.title}</span>
                   </div>`
                marinadeRecipes.innerHTML += card
            });
        }).catch((err) => {
            console.log(err)
        });
} 
fingerFood()

function snacky() {
    let marinadeRecipes = document.querySelector("#snack")
    fetch("https://api.spoonacular.com/recipes/random?number=9&tags=snack&apiKey=f16dbd3c91bc408686a0de6f9e2457fa")
        .then((response) => {
            console.log(response);
            return response.json();
        }).then(data => {
            console.log(data)
            data.recipes.map(el => {
                let card = ` <div class="section_item">
                       <img src="${el.image}" alt="recipe" class="section_img">
                       <span class="span_text2">${el.title}</span>
                   </div>`
                marinadeRecipes.innerHTML += card
            });
        }).catch((err) => {
            console.log(err)
        });
} 
snacky()

function drinks() {
    let marinadeRecipes = document.querySelector("#drink")
    fetch("https://api.spoonacular.com/recipes/random?number=12&tags=drink&apiKey=f16dbd3c91bc408686a0de6f9e2457fa")
        .then((response) => {
            console.log(response);
            return response.json();
        }).then(data => {
            console.log(data)
            data.recipes.map(el => {
                let card = ` <div class="section_item">
                       <img src="${el.image}" alt="recipe" class="section_img">
                       <span class="span_text2">${el.title}</span>
                   </div>`
                marinadeRecipes.innerHTML += card
            });
        }).catch((err) => {
            console.log(err)
        });
} 
drinks()