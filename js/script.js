let submitButton = document.querySelector("#test");
let newSong = document.querySelector("#new");
let test = ["hej","tjena","uwu"];
let testNumberOfSongs = 0;

let newTest = [

];


submitButton.addEventListener("click", ()=>{
    let SearchBar = document.querySelector("#SearchBar").value;
    console.log(SearchBar);
    for (let i = 0; i < test.length; i++) {
        if(test[i].includes(SearchBar)){
            console.log(test[i]);
        }
    }
})

newSong.addEventListener("click", ()=>{
    Hello();
    AddLyrics();

    let newTitle = document.querySelector(".myNewDiv").textContent;
    console.log(newTitle);

})
let newDiv;
function Hello(){
    let stringTest = "hello";
    test.push(stringTest);
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "myNewDiv");
    let text = document.createTextNode("test hello");
    newDiv.appendChild(text);
    document.body.appendChild(newDiv);
}  
function AddLyrics(){
    let newStringTest = "lorem ipsum dolor sit"
    let newLyricDiv = document.createElement("div");
    newLyricDiv.setAttribute("class", "lyrics");
    let text = document.createTextNode(newStringTest);
    newLyricDiv.appendChild(text);
    newDiv.appendChild(newLyricDiv);
}
