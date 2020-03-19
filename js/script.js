let submitButton = document.querySelector("#test");
let test = ["hej","tjena","uwu"];
submitButton.addEventListener("click", ()=>{
    let SearchBar = document.querySelector("#SearchBar").value;
    console.log(SearchBar);
    for (let i = 0; i < test.length; i++) {
        if(test[i].includes(SearchBar)){
            console.log(test[i]);
        }
    }
})