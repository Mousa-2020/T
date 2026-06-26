const startScreen =
document.getElementById("startScreen");

const quizScreen =
document.getElementById("quizScreen");

const resultScreen =
document.getElementById("resultScreen");

const startBtn =
document.getElementById("startBtn");

const questionEN =
document.getElementById("questionEN");

const questionAR =
document.getElementById("questionAR");

const answers =
document.getElementById("answers");

const current =
document.getElementById("current");

const progress =
document.getElementById("progress");

const nextBtn =
document.getElementById("nextBtn");

const prevBtn =
document.getElementById("prevBtn");

let index = 0;

function renderQuestion(){

let q =
questions[index];

current.textContent =
index + 1;

progress.style.width =
((index+1)
/ questions.length
*100)
+"%";

questionEN.textContent =
q.question_en;

questionAR.textContent =
q.question_ar;

answers.innerHTML =
"";

q.answers.forEach(
(answer)=>{

const div =
document.createElement(
"div"
);

div.className =
"answer";

div.textContent =
answer;

div.onclick =
()=>{

document
.querySelectorAll(
".answer"
)
.forEach(
e=>
e.classList.remove(
"selected"
)
);

div.classList.add(
"selected"
);

};

answers.appendChild(
div
);

});

}

startBtn.onclick =
()=>{

startScreen.classList.add(
"hidden"
);

quizScreen.classList.remove(
"hidden"
);

renderQuestion();

};

nextBtn.onclick =
()=>{

if(
index
<
questions.length-1
){

index++;

renderQuestion();

}

};

prevBtn.onclick =
()=>{

if(
index
>
0
){

index--;

renderQuestion();

}

};
