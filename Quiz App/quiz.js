
// // let signup =()=>{
// //       var email = document.getElementById("email").value
// //       var password= document.getElementById("pass").value
// //        firebase.auth().createUserWithEmailAndPassword(email, password)
   
// //     .then((data) => {
// //       console.log(data)
// //     })
// //     .catch((error) => {
// //       var errorMessage = error.message;
    
// //       console.log(errorMessage)
// //     alert(errorMessage)
// //     });
// //     window.location.href="./quiz.html"
// //   }
// let signup =()=>{
 
//     var email = document.getElementById("email").value
//       var password= document.getElementById("pass").value
// firebase.auth().createUserWithEmailAndPassword(email, password)


// .then((data) => {
//   console.log(data)
//   const email = data.user.email;
//   window.location.href=`./quiz.html?email=${email}`;
//   var user ={
//      email:email
//   }
  
//   localStorage.setItem("user",JSON.stringify(user))

// })
// .catch((error) => {
 
//   var errorMessage = error.message;
//   console.log(errorMessage)
//   alert(errorMessage)
 
// });

// }
// let signup =()=>{
//     var a = document.getElementById("email").value
//     var b= document.getElementById("pass").value
//     localStorage.setItem("email",a)
// localStorage.setItem("pass",b)
// window.location.href="./home.html"

// }
// let signin = () =>{
//     var a = document.getElementById("email").value
//     var b= document.getElementById("pass").value
//     if ( a == localStorage.getItem("email")&& b==localStorage.getItem("pass")){
//         window.location.href="./home.html"
//     }
// }



// let signin =()=>{
//     var email = document.getElementById("email").value
//     var password= document.getElementById("pass").value
//     firebase.auth().signInWithEmailAndPassword(email, password)
//     .then((data) => {
//       console.log(data)
//       window.location.href="./quiz.html"
    
//     })
//     .catch((error) => {
      
//       var errorMessage = error.message;
//       console.log(errorMessage)
//      alert(errorMessage)
//     });


// }

let questions = [
  {
    id: 1,
    question: "What is the full form of HTML?",
    answer: "Hyper Text Markup Language ",
    options: [
      "Higher Text Makup Language",
      "Hyper Text Markup Language",
      "Hyper Transfer Markup Language",
      "None of them"
    ]
  },
  {
    id: 2,
    question: "CSS stands for.",
    answer: "Cascading Style Sheet",
    options: [
      "Computer Styling System",                  
      "Casing Sheet Scenerio",
      "Cascading Style Sheet",                         
      "Casing Style Sheet"

    ]
  },
  {
    id: 3,
    question: "What is the full form of ROM:",
    answer: "Read Only Memory",
    options: [
      "Read Only Memory",
      "Read Optimize Mediam",
      "Random Optic Mediam",
      "None of them"

    ]
  },
  {
    id: 4,
    question: "In HTTPS 'S' stands for:",
    answer: "Secure",
    options: [
      "Specifications",
      "Secure",
      "System",
      "None of them"
      
    ]
  },
  {
    id: 5,
    question: "LCD stands for:",
    answer: "Liquid Crystal Display",
    options: [
      "Landing Custom Display  ",
      "Light Casing Diode ",
      "Liquid Crystal Display",
      "None of these"

    ]
  },
  {
    id: 6,
    question: "SEO stands for:",
    answer: "Search Engine Optimization",
    options: [
      "System Entry Order",
      "Search Engine Optimization",
      "Search Engine Operation",
      "None of them"

    ]
  },
  {
    id: 7,
    question: "JS is the abbreviation of :",
    answer: "Javascript",
    options: [
      "Jordanscript",
      "JQueryscroll",
      "Javasystem",
      "Javascript"

    ]
  },
  {
    id: 8,
    question: "In MEAN 'N' stands for:",
    answer: "Nodejs",
    options: [
      "Nodejs",
      "Notation",
      "Nuclear",
      "None of the above"
    
    ]
 },
 {
    id: 9,
    question: "DBMS stands for:",
    answer: "Database Management System",
    options: [
      "Data Bringing Module System",
      "Database Management System",
      "Database Model Script",
      "None of the above"

    ]
 },
 {
    id: 10,
    question: "What is the full form of SMIU?",
    answer: "Sindh Madressatul Islam University",
    options: [
        "Sindh Model Iconic University",
        "Sindh Memorial Interior Unit",
        "Sindh Madressatul Islam University",
        "None of the above"

    ]
  }

];

let question_count = 0;
let points = 0;

window.onload = function() {

  let { search } = window.location;
  search = search.substr(1);

  const params = search.split('&');
  userParam = params[0];// name=daniyal
  // emailParam = params[1];// email=daniyal@email.co

  // var data = {};

  const name = userParam.split('=')[1]
  

  show(question_count, name);

};




function next() {

   
  if (question_count == questions.length - 1) {
    localStorage.setItem("time", time);
    clearInterval(time);
    location.href = "end.html" ;
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  if (user_answer == questions[question_count].answer) {
    points += 1;
    localStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
let user =localStorage.getItem("user")
user = JSON.parse(user);
console.log(user)
  let nameSpan = document.getElementById("namm");
  nameSpan.innerHTML = user.email

  
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1} of 10: <br> <br>${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  validate();
}

function validate() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}

// function submitForm(e) {
//   e.preventDefault();
//   let name = document.forms["welcome_form"]["name"].value;
//   if (name == "") {
//     alert("Please enter your name AND id!");
//     return false;
//   }
//   LocalStorage.setItem("name", name);

//   location.href = "quiz.html";
// }


let dt = new Date(new Date().setTime(0));
let ctime = dt.getTime();
let seconds = Math.floor((ctime % (1000 * 60))/ 1000);
let minutes = Math.floor((ctime % (1000 * 60 * 60))/( 1000 * 60));
console.log(seconds, minutes);
let time = 0;
let mytime = setInterval(function(){
        time++;
        
        if(seconds < 59) {
            seconds++;
        } else {
            seconds = 0;
            minutes++;
        }
        let formatted_sec = seconds < 10 ? `0${seconds}`: `${seconds}`;
        let formatted_min = minutes < 10 ? `0${minutes}`: `${minutes}`
        document.querySelector("span.time").innerHTML = `${formatted_min} : ${formatted_sec}`;
    }, 1000);
 


let user_name= localStorage.getItem("user");
user = JSON.parse(user_name)
let user_points = localStorage.getItem("points");
let user_time = localStorage.getItem("time");
document.querySelector("span.name").innerHTML = user.email;
document.querySelector("span.points").innerHTML = user_points;
document.querySelector("span.time_taken").innerHTML = user_time;



// function save() {
// var user =document.getElementById("nammm")
// var points =document.getElementById("point")
// var result ={
// name: user.value,
// points : points.value,

// }
// console.log(result)
// // firebase.database().ref('result').set(result)
// }
