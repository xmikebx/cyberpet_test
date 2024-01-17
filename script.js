// const selectPet = document.getElementById(`petContainer`);

// console.log(selectPet);


const pet1 = document.getElementById(`pet1`);
const pet2 = document.getElementById(`pet2`);
const pet3 = document.getElementById(`pet3`);
const petSelector = document.getElementById(`selector`);
const elementToListenOn = document.getElementById(`petContainer`);

elementToListenOn.addEventListener("click", (e) => {
    
    const a = e.target;
    const b= a.id;
    doThing(b)
    console.log(b);
})

const doThing = (id) => {

    const selectedItem = document.getElementById(id)

    if (selectedItem.id  === "2L")  {

        //  2L Moves 3 left & under, 1 right and over, which shows 1 

    document.getElementById(`pet3`).style.zIndex = "1";
    document.getElementById(`pet3`).style.left = "-300px";
    document.getElementById(`pet1`).style.left = "300px";
    document.getElementById(`pet1`).style.zIndex = "3";

        console.log(`2L selected`);

    } else if (selectedItem.id === "2R") {

        //  2R Moves 1 right and under, 3 left and ove, which shows 3

    document.getElementById(`pet1`).style.left = "300px";
    document.getElementById(`pet1`).style.zIndex = "1";
    document.getElementById(`pet3`).style.zIndex = "3";
    document.getElementById(`pet3`).style.left = "-300px";

        console.log(`2R selected`);

    } else if (selectedItem.id === "1R") {

        //  1R Moves 1 left & under, 3 left & under, which shows 2 

    document.getElementById(`pet1`).style.zIndex = "-1";
    document.getElementById(`pet1`).style.left = "0px";
    document.getElementById(`pet3`).style.zIndex = "-1";
    document.getElementById(`pet3`).style.left = "-300px";

        console.log(`1R selected`);

    } else if (selectedItem.id === "3L") {
       
        //  3L Moves 3 left & under, 1 right & under, which shows 2 

    document.getElementById(`pet3`).style.zIndex = "-1";
    document.getElementById(`pet3`).style.left = "0px";  

    document.getElementById(`pet1`).style.zIndex = "-1";
    document.getElementById(`pet1`).style.left = "300px";     

        console.log(`3L selected`);

    } else if (selectedItem.id  === "selector") {

      
        let test = document.getElementById((selectedItem.id));
        let parentDiv = test.parentDiv;

        console.log(parentDiv);

        // const lookForPet = document.getElementById(id);
        // console.log(lookForPet);
        // const lookDeeperForPet = document.getElementById(`petName`);
        // console.log(lookDeeperForPet);

    } else return false;
};