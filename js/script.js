let submitButton = document.querySelector("#goButton");
let newSong = document.querySelector("#new");
let info = document.querySelectorAll(".info");

let newTest = [
    
];
let songs = document.querySelectorAll(".songs");
let lyrics = document.querySelectorAll(".lyrics");
let titles = document.querySelectorAll(".titles");
for (let index = 0; index < songs.length; index++) {
    const title = titles[index].textContent.toUpperCase();   
    const lyric = lyrics[index].textContent.toUpperCase();
    console.log(title);
    newTest.push([title,lyric]);
}

submitButton.addEventListener("click", ()=>{
    let SearchBar = document.querySelector("#SearchBar").value.toUpperCase();
    console.log(SearchBar);
    for (let i = 0; i < newTest.length; i++) {
            if(newTest[i][0].includes(SearchBar)){
                songs[i].style.display = "block";
            }
            else if(newTest[i][1].includes(SearchBar)){
                songs[i].style.display = "block";
            }
            else{
                songs[i].style.display = "none";
            }
            if(SearchBar == null){
                songs[i].style.display = "none";
            }
            for (let j = 0; j < info.length; j++) {
                 info[j].style.display = "none";
            }
    }
})

let upBtn = document.querySelector("#helo");
upBtn.addEventListener("click", ()=>{
    for (let i = 0; i < info.length; i++) {
        info[i].style.display = "block";
    }
})