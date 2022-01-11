const rock = document.getElementById("Rock");
const paper = document.getElementById("Paper");
const scissor = document.getElementById("Scissor");
const reset = document.getElementById("Reset");
const y_score = document.getElementById("Your_Score");
const b_score = document.getElementById("Bot_Score");
const ans1 = document.getElementById("Ans");
const closer = document.getElementById("Close");
const alerti = document.getElementById("Alert");


// r = 0
// p = 1
// s = 2
let y=0,bot=0;


const comparator=(a,b)=>{
    if(a===b){
        return "It's Draw!!";
    }
    if(a===0 && b === 2 || a===1 && b===0 || a === 2 && b===1){
        y++;
        return "WIN";
    }
    else{
        bot++;
        return "LOSE";
    }

}
const update = () =>{
    y_score.textContent = "Your Score: " + y;
    b_score.textContent = "Bot Score: " + bot;
}
const update2 = (a) =>{
    alerti.style.transition = "all 1s ease-in-out";
    alerti.style.opacity = "1";
    alerti.style.zIndex = "5";
    ans1.textContent = a;
    
}

rock.addEventListener('click',()=>{
    let temp = Math.floor(Math.random() * 10) % 3; 
    let ans = comparator(0,temp);
    console.log(temp,0,ans);
    update();
    update2(ans);
})
paper.addEventListener('click',()=>{
    let temp = Math.floor(Math.random() * 10) % 3; 
    let ans = comparator(1,temp);
    console.log(temp,1,ans);
    update();
    update2(ans);
    


})
scissor.addEventListener('click',()=>{
    let temp = Math.floor(Math.random() * 10) % 3; 
    let ans = comparator(2,temp);
    console.log(temp,2,ans);
    update();
    update2(ans);
    


})
reset.addEventListener('click',()=>{
    y=0;
    bot =0;
    update();
})
closer.addEventListener('click',()=>{
    alerti.style.opacity = "0";
    alerti.style.zIndex = "-5";
    alerti.style.transition = "all 0.2s ease-in-out"
})