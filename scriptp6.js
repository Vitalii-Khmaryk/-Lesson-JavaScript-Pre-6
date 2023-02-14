let h6 = document.querySelector(".h6");
h6.addEventListener("click", function () {
  document.querySelector(".box").style.display = "none";
  document.querySelector(".box2").style.display = "block";
});

let p = document.querySelector(".p");
p.addEventListener("click", function () {
  document.querySelector(".box").style.display = "block";
  document.querySelector(".box2").style.display = "none";
});

let first = document.querySelector("#first");
let last = document.querySelector("#last");
let email = document.querySelector("#email");
let pass = document.querySelector("#pass");
let email2 = document.querySelector("#email2");
let pass2 = document.querySelector("#pass2");
let allFirst = [];
let allLast = [];
let allEmail = [];
let allPass = [];
document.querySelector(".btn").addEventListener("click", function () {
  let valueFirst = first.value;
  console.log(valueFirst);
  if (/^\w\D{1,20}$/.test(valueFirst)) {
    console.log("works");
    document.querySelector(".error1").style.display = "none";
    document.querySelector(".spanFirst").style.display = "none";
    first.classList.add("gcheck");
    first.classList.add("borderGreen");
    first.value = "";
  } else {
    console.log("no");
    document.querySelector(".error1").style.display = "inline-block";
    first.classList.remove("gcheck");
    first.classList.remove("borderGreen");
  }

  let valueLast = last.value;
  console.log(valueLast);
  if (/^\w\D{1,20}$/.test(valueLast)) {
    console.log("works");
    document.querySelector(".error2").style.display = "none";
    document.querySelector(".spanLast").style.display = "none";
    last.classList.add("gcheck");
    last.classList.add("borderGreen");
    last.value = "";
  } else {
    console.log("no");
    document.querySelector(".error2").style.display = "inline-block";
    last.classList.remove("gcheck");
    last.classList.remove("borderGreen");
  }

  let valueEmail = email.value;
  console.log(valueEmail);
  if (/^\w+-*\.*-*\w+@\w+\.\w+$/.test(valueEmail)) {
    console.log("works");
    document.querySelector(".error3").style.display = "none";
    document.querySelector(".spanEmail").style.display = "none";
    email.classList.add("gcheck");
    email.classList.add("borderGreen");
    email.value = "";
  } else {
    console.log("no");
    document.querySelector(".error3").style.display = "inline-block";
    email.classList.remove("gcheck");
    email.classList.remove("borderGreen");
  }

  let valuePass = pass.value;
  console.log(valuePass);
  if (/^\w{8,15}$/.test(valuePass)) {
    console.log("works");
    document.querySelector(".error4").style.display = "none";
    document.querySelector(".spanPass").style.display = "none";
    pass.classList.add("gcheck");
    pass.classList.add("borderGreen");
    pass.value = "";
  } else {
    console.log("no");
    document.querySelector(".error4").style.display = "inline-block";
    pass.classList.remove("gcheck");
    pass.classList.remove("borderGreen");
  }

  if (
    /^\w\D{1,20}$/.test(valueFirst) &&
    /^\w\D{1,20}$/.test(valueLast) &&
    /^\w+-*\.*-*\w+@\w+\.\w+$/.test(valueEmail) &&
    /^\w{8,15}$/.test(valuePass)
  ) {
    if (
      !allEmail.some((data) => data.toLowerCase() === valueEmail.toLowerCase())
    ) {
      allEmail.push(valueEmail);
      allFirst.push(valueFirst);
      allLast.push(valueLast);
      allPass.push(valuePass);
    }
    localStorage.setItem("email", JSON.stringify(allEmail));
    localStorage.setItem("first", JSON.stringify(allFirst));
    localStorage.setItem("last", JSON.stringify(allLast));
    localStorage.setItem("password", JSON.stringify(allPass));
  }
});

first.addEventListener("input", function () {
  document.querySelector(".spanFirst").style.display = "inline-block";
});

last.addEventListener("input", function () {
  document.querySelector(".spanLast").style.display = "inline-block";
});

email.addEventListener("input", function () {
  document.querySelector(".spanEmail").style.display = "inline-block";
});

pass.addEventListener("input", function () {
  document.querySelector(".spanPass").style.display = "inline-block";
});

pass2.addEventListener("input", function () {
  document.querySelector(".spanPass2").style.display = "inline-block";
});

email2.addEventListener("input", function () {
  document.querySelector(".spanEmail2").style.display = "inline-block";
});

document.querySelector(".btn2").addEventListener("click", function () {
  document.querySelector(".spanEmail2").style.display = "none";
  document.querySelector(".spanPass2").style.display = "none";
  if (localStorage.length > 0 && localStorage.getItem("email")) {
    document.querySelector(".error41empty").style.display = "none";
  } else {
    document.querySelector(".error41empty").style.display = "inline-block";
  }

  let emailStor = JSON.parse(localStorage.getItem("email"));
  let passStor = JSON.parse(localStorage.getItem("password"));
  let nameStor = JSON.parse(localStorage.getItem("first"));
  let surnameStor = JSON.parse(localStorage.getItem("last"));

  let valueEmail2 = email2.value;
  if (emailStor.includes(valueEmail2)) {
    console.log("EmailStor includes");
    document.querySelector(".error31").style.display = "none";
    document.querySelector(".spanEmail").style.display = "none";
    email2.classList.add("gcheck");
    email2.classList.add("borderGreen");
    email2.value = "";
  } else {
    console.log("no email incl");
    document.querySelector(".error31").style.display = "inline-block";
    email2.classList.remove("gcheck");
    email2.classList.remove("borderGreen");
  }

  let valuePass2 = pass2.value;
  console.log(valuePass2);
  if (passStor.includes(valuePass2)) {
    console.log("works");
    document.querySelector(".error31").style.display = "none";
    document.querySelector(".spanPass2").style.display = "none";
    pass2.classList.add("gcheck");
    pass2.classList.add("borderGreen");
    pass2.value = "";
  } else {
    console.log("no");
    document.querySelector(".error31").style.display = "inline-block";
    pass2.classList.remove("gcheck");
    pass2.classList.remove("borderGreen");
  }

  if (emailStor.includes(valueEmail2) && passStor.includes(valuePass2)) {
    let indexEmail = emailStor.indexOf(valueEmail2);
    let indexPass = passStor.indexOf(valuePass2);

    let i = nameStor[indexEmail];
    let i1 = surnameStor[indexEmail];

    let ip = nameStor[indexPass];
    let ip1 = surnameStor[indexPass];

    if (i === ip && i1 === ip1) {
      let concats = i + " " + i1;
      document.querySelector(".ema").value = valueEmail2;
      document.querySelector(".name").value = concats;

      document.querySelector(".box2").style.display = "none";
      document.querySelector(".box3").style.display = "flex";
    } else {
      document.querySelector(".error31").style.display = "inline-block";
      email2.classList.remove("gcheck");
      email2.classList.remove("borderGreen");
      pass2.classList.remove("gcheck");
      pass2.classList.remove("borderGreen");
    }
  }
});

document.querySelector(".btn3").addEventListener("click", function () {
  document.querySelector(".box2").style.display = "block";
  document.querySelector(".box3").style.display = "none";
});
