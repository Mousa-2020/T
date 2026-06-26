const startScreen=document.getElementById("startScreen");
const quizScreen=document.getElementById("quizScreen");

const questionEN=document.getElementById("questionEN");
const questionAR=document.getElementById("questionAR");

const answers=document.getElementById("answers");

const current=document.getElementById("current");

const progress=document.getElementById("progress");

const startBtn=document.getElementById("startBtn");

const nextBtn=document.getElementById("nextBtn");

const prevBtn=document.getElementById("prevBtn");

let currentQuestion=0;

function showQuestion(){

const q=
questions[currentQuestion];

questionEN.innerText=
q.question_en;

questionAR.innerText=
q.question_ar;

current.innerText=
currentQuestion+1;

progress.style.width=
(
(currentQuestion+1)
/
questions.length
*100
)+"%";

answers.innerHTML="";

q.answers.forEach(
(option)=>{

const btn=
document.createElement(
"button"
);

btn.className=
"answer";

btn.innerText=
option;

answers.appendChild(
btn

);

});

}

startBtn.addEventListener(
"click",
()=>{

startScreen.style.display=
"none";

quizScreen.classList.remove(
"hidden"
);

showQuestion();

}
);

nextBtn.addEventListener(
"click",
()=>{

if(
currentQuestion
<
questions.length-1
){

currentQuestion++;

showQuestion();

}

}
);

prevBtn.addEventListener(
"click",
()=>{

if(
currentQuestion
>
0
){

currentQuestion--;

showQuestion();

}

}
);
