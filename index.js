let result = {
  tag: "",
  free: true,
  role: false,
  user: "jbudha977",
  email: "jbudha977@gmail.com",
  score: 0.64,
  state: "deliverable",
  domain: "gmail.com",
  reason: "valid_mailbox",
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: true,
  did_you_mean: "",
  format_valid: true,
};

myApiKey = `ema_live_CY4ogigXB0jRbhUW8O4ZvAvmewdeGNKY5giM7eqK`;



let inputEmail =document.querySelector("#inputEmail");
let submitBtn =document.querySelector("#submitBtn");
let containerResult = document.querySelector(".result-cont");

submitBtn.addEventListener("click", async (evt)=>{
  try{
evt.preventDefault();
  let loader = document.createElement("span");
  loader.classList.add('loader');
  containerResult.append(loader);
  let email = inputEmail.value;
  urlRequest = `https://api.emailvalidation.io/v1/info?apikey=${myApiKey}&email=${email}`;
  let response = await fetch(urlRequest);
  let finalresult = await response.json();
  let str =``;
  for (let item of Object.keys(finalresult)) 
    {
      if(finalresult[item] !=="" && finalresult[item] !==" "){
        str = str + `<div>${item}: ${finalresult[item]}</div>`;
      }

  }
  
  containerResult.innerHTML  =str;
  inputEmail.value="";
  }catch(err){
    containerResult.innerText= err;
  }
  
})


// resultCont.innerHTML = str;
// console.log(str);
