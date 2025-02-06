let yes = document.getElementById("yes");
let no = document.getElementById("no");
let pooh = document.getElementById("pooh");
let question = document.getElementById('question');

const handleClickYes = () => {
    question.innerText = "WOOHOO, I love you POOKIE! ❤️🥳";
    pooh.src = "./bear-kiss-bear-kisses.gif"
    yes.remove();
    no.remove();
    document.body.appendChild(question);
    // console.log("you clicked yes");
}

const handleClickNo = () => {
    // console.log("you clicked no");
    // console.log("height", yes.offsetHeight);
    // console.log("width", yes.offsetWidth);
    
    if (no.offsetWidth >= 60 && no.offsetHeight >= 60){
        no.style.width = `${no.offsetWidth * 0.8}px`;
        no.style.height = `${no.offsetHeight * 0.8}px`;
        yes.style.width = `${yes.offsetWidth * 1.1}px`;
        yes.style.height = `${yes.offsetHeight * 1.1}px`;
        let noFontSize = window.getComputedStyle(no).fontSize;
        let yesFontSize = window.getComputedStyle(yes).fontSize;
        console.log(noFontSize, yesFontSize);
    }
    
    // document.body.appendChild(yes);
    // document.body.appendChild(no);


}

yes.addEventListener("click", handleClickYes);
no.addEventListener("click", handleClickNo);