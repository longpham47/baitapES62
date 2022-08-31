let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];

class Glass {
    constructor(id, src, virtualImg, brand, name, color, price, description) {
        this.id = id;
        this.src = src;
        this.virtualImg = virtualImg;
        this.brand = brand;
        this.name = name;
        this.color = color;
        this.price = price;
        this.description = description;
    }
}
let{id, src, virtualImg, brand, name, color, price, description}= dataGlasses;

// 

let renderGlass = () => {
    let content = "";
    dataGlasses.map((glass) => {
        let { src, id } = glass;
        content += `
   
            <img src="${src}"id="${id}" onclick="changeImg('${id}')"  class="vglasses__items col-4"  alt="">

          `
    })

    document.getElementById("vglassesList").innerHTML = content;
}
renderGlass();

let changeImg= (id) =>{
    let item = dataGlasses.find(v=> v.id === id)
    if(item){
        let cartItemIndex = dataGlasses.findIndex(cartItem => cartItem.id === item.id);
        console.log(cartItemIndex)
        let img = `<img src="${dataGlasses[cartItemIndex].virtualImg}" alt="">`
        document.getElementById("avatar").innerHTML = img
    }
    changeContent(id);
}

let changeContent = (id) => {
    let item = dataGlasses.find(v=> v.id === id)
    if(item){
        let indexGlass = dataGlasses.findIndex(cartItem => cartItem.id === item.id);
        let glass = dataGlasses[indexGlass]
        let content = `
        <h4>${glass.brand} - ${glass.name} (${glass.color})</h4>
        <button>${glass.price}</button> <h5>Stocking</h5>
        <p>${glass.description}</p>
        `
        document.getElementById("glassesInfo").style.display="block";
        document.getElementById("glassesInfo").innerHTML = content
    }
}

let removeGlasses = (a) => {
    if(a == true){
        document.getElementById("avatar").innerHTML = " ";
        document.getElementById("glassesInfo").style.display="none";
    }
    else{
        document.getElementById("avatar").style.display="";
        document.getElementById("glassesInfo").style.display="block";
    }
   
}
