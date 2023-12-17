const parent=document.querySelector('div');
const titleInput=document.getElementById('title');
const descInput=document.getElementById('desc');
const enterBtn=document.getElementById('enter-btn');


enterBtn.addEventListener('click',()=>{
   const title=titleInput.value;
   const desc=descInput.value;
   const span=document.createElement('li');

   const header=document.createElement('h1');
   const titleText=header.textContent=title;
   
   span.appendChild(header);

   const para=document.createElement('p');
   const paraText=para.textContent=desc;
   span.appendChild(para);

   const removeBtn=document.createElement('button');
   const btnId=removeBtn.setAttribute('id','remove-btn');
   removeBtn.onclick = function() {
      span.remove();
  };
   removeBtn.textContent='Remove';

   span.appendChild(removeBtn)

   
   

   parent.appendChild(span);

   
  
 
   

})

