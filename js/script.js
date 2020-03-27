let submitButton = document.querySelector("#test");
let newSong = document.querySelector("#new");


let newTest = [
    
];
let songs = document.querySelectorAll(".songs");
let lyrics = document.querySelectorAll(".lyrics");
let titles = document.querySelectorAll(".titles");
for (let index = 0; index < songs.length; index++) {
    const title = titles[index].textContent;   
    const lyric = lyrics[index].textContent;
    
    newTest.push([title,lyric]);
}


submitButton.addEventListener("click", ()=>{
    let SearchBar = document.querySelector("#SearchBar").value;
    console.log(SearchBar); 
    for (let i = 0; i < newTest.length; i++) {
            if(newTest[i].includes(SearchBar)){
                songs[i].style.display = "block";
            }
            else if(newTest[i][1].includes(SearchBar)){
                songs[i].style.display = "block";
            }
            else{
                songs[i].style.display = "none";
            }
            if(SearchBar == ""){
                songs[i].style.display = "none";
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