let yes = document.getElementById("yes");
let no = document.getElementById("no");
let buttons = document.getElementById("buttons");
let pooh = document.getElementById("pooh");
let question = document.getElementById('question');
let handleClickNoCounter = 0;
const handleClickYes = () => {
    question.innerText = "WOOHOO, I love you POOKIE! ❤️🥳";
    pooh.src = "./bear-kiss-bear-kisses.gif"
    yes.remove();
    no.remove();
    document.body.appendChild(question);
    // console.log("you clicked yes");
}

const handleClickNoFunc = () => {

    no.style.width = `${no.offsetWidth * 0.95}px`;
    no.style.height = `${no.offsetHeight * 0.95}px`;
    yes.style.width = `${yes.offsetWidth * 1.03}px`;
    yes.style.height = `${yes.offsetHeight * 1.03}px`;
    let noFontSize = parseFloat(window.getComputedStyle(no).fontSize);
    let yesFontSize = parseFloat(window.getComputedStyle(yes).fontSize);
    yes.style.fontSize = `${yesFontSize * 1.15}px`
    no.style.fontSize = `${noFontSize * 0.95}px`
    
    console.log(noFontSize, yesFontSize);

}

const handleClickNo = () => {
    // console.log("you clicked no"
    // console.log("height", yes.offsetHeight);
    // console.log("width", yes.offsetWidth);
    switch(handleClickNoCounter){
        case 0:
            handleClickNoCounter++;
            handleClickNoFunc();
            no.innerText = "Are you sure?"
            buttons.appendChild("no");
            document.body.appendChild(buttons);
            break;
        case 1:
            handleClickNoCounter++;
            handleClickNoFunc();
            no.innerText = "Pretty Please"
            buttons.appendChild("no");
            document.body.appendChild(buttons);
            break;
        case 2:
            handleClickNoCounter++;
            handleClickNoFunc();
            no.innerText = "I'll get your chai latte "
            buttons.appendChild("no");
            document.body.appendChild(buttons);
            break;
        case 3:
            handleClickNoCounter++;
            handleClickNoFunc();
            no.innerText = "PLEASE BABY"
            buttons.appendChild("no");
            document.body.appendChild(buttons);
            break;
        case 4:
            handleClickNoCounter++;
            handleClickNoFunc();
            no.innerText = "But I love you"
            buttons.appendChild("no");
            document.body.appendChild(buttons);
            break;
        case 5:
            handleClickNoCounter++;
            handleClickNoFunc();
            no.innerText = "No :("
            buttons.appendChild("no");
            document.body.appendChild(buttons);
            break;
        case 6:
            handleClickNoCounter++;
            handleClickNoFunc();
            no.innerText = "Leave me alone ..."
            buttons.appendChild("no");
            document.body.appendChild(buttons);
            break;
        // case 7:
        //     handleClickNoCounter++;
        //     handleClickNoFunc();
        //     break;
        // case 8:
        //     handleClickNoCounter++;
        //     handleClickNoFunc();
        //     break;
        default:
            console.log("the end of itteration - more changes")
    }
    
    // 1.No 
    // 2.Are you sure? 
    // 3. Pretty please 
    // 4. I'll get your chai latte 
    // 5. PLEASE BABY 
    // 6. But I love you 
    // 7. No :( 
    // 8. Leave me alone ...
    
    
    // document.body.appendChild(yes);
    // document.body.appendChild(no);


}

yes.addEventListener("click", handleClickYes);
no.addEventListener("click", handleClickNo);