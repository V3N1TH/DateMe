function selection1(){
  const buttonElement=document.querySelector('.js-packagebutton1');
  
  if (buttonElement.innerText==='Select'){
    buttonElement.innerHTML='Selected';
    buttonElement.classList.add('change-button');
  }

  else if(document.querySelector('.js-packagebutton2').innerText==='Selected'){
    document.querySelector('.js-packagebutton2').innerText='Select';
  }

  else if(document.querySelector('.js-packagebutton3').innerText==='Selected'){
    document.querySelector('.js-packagebutton3').innerText='Select';
  }


  document.querySelector('.js-pack2selected').classList.remove('selected-package');
  document.querySelector('.js-pack3selected').classList.remove('selected-package');
  document.querySelector('.js-pack1selected').classList.add('selected-package');


  document.querySelector('.js-package-section3').innerHTML=`
  <div class="selected-package-section3 js-pack1selected">
    <p class="package-type">MONTHLY</p>
    <p class="package-price">US$6.50 <span class="per-month">/mo</span></p>
    </div>`
}


function selection2(){
  const buttonElement=document.querySelector('.js-packagebutton2');
  
  if (buttonElement.innerText==='Select'){
    buttonElement.innerHTML='Selected';
    buttonElement.classList.add('change-button')
  }
  else if(document.querySelector('.js-packagebutton1').innerText==='Selected'){
    document.querySelector('.js-packagebutton1').innerText='Select';
  }

  else if(document.querySelector('.js-packagebutton3').innerText==='Selected'){
    document.querySelector('.js-packagebutton3').innerText='Select';
  }

  document.querySelector('.js-pack1selected').classList.remove('selected-package');
  document.querySelector('.js-pack3selected').classList.remove('selected-package');
  document.querySelector('.js-pack2selected').classList.add('selected-package');

  document.querySelector('.js-package-section3').innerHTML=`
  <div class="selected-package-section3 js-pack1selected">
    <p class="package-type">QUARTERLY</p>
    <p class="package-price">US$4.33 <span class="per-month">/mo</span></p>
  </div>
  `
}

function selection3(){
  const buttonElement=document.querySelector('.js-packagebutton3');
  
  if (buttonElement.innerText==='Select'){
    buttonElement.innerHTML='Selected';
    buttonElement.classList.remove('change-button')
    buttonElement.classList.add('change-button')
    buttonElement.classList.add('change-button')
  }

  else if(document.querySelector('.js-packagebutton1').innerText==='Selected'){
    document.querySelector('.js-packagebutton1').innerText='Select';
  }

  else if(document.querySelector('.js-packagebutton2').innerText==='Selected'){
    document.querySelector('.js-packagebutton2').innerText='Select';
  }

  document.querySelector('.js-pack1selected').classList.remove('selected-package');
  document.querySelector('.js-pack2selected').classList.remove('selected-package');
  document.querySelector('.js-pack3selected').classList.add('selected-package');


  document.querySelector('.js-package-section3').innerHTML=`
  <div class="selected-package-section3 js-pack1selected">
    <p class="package-type">ANNUAL</p>
    <p class="package-price">US$4.00 <span class="per-month">/mo</span></p>
    </div>`
}
