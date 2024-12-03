const result = document.getElementById("result");
const pendingtask = document.getElementById("pendingtask")
const findData = [];
let data = [];
let dataId = ""
if( JSON.parse(localStorage.getItem("data"))!==null){
   data = JSON.parse(localStorage.getItem("data"));
   }
additem.addEventListener('click',()=>{
 console.log(data)
 if(dataentry.value== ""){
    Alertdata.style.display='flex'
 }else{
    Alertdata.style.display='none'
    data.push(dataentry.value);
 localStorage.setItem("data",JSON.stringify(data));
result.innerHTML=''
pendingtask.innerText=`tasks = ${data.length}`
 data.map(
   (x,id) =>
(result.innerHTML+=`<div class="child d-flex justify-content-between align-items-center gap-2 border p-2 rounded-2 bg-dark">
  <p class="p-0 m-0 text-white">${x}</p>
  <div>
  <button class="border-0 bg-transparent" onclick="deleteUser(${id})"><i class="fas fa-times-circle text-danger"></i></button>
  <button class="border-0 bg-transparent" onclick="updateData('${x}',${id})"><i class="fas fa-pen text-warning"></i></button>
  </div>
</div>`)
);
      
  
 }
})



Removealert.addEventListener("click",()=>{
  Alertdata.style.display="none"
});

  
window.addEventListener("load", ()=> {
  result.innerHTML=''
  pendingtask.innerText=`tasks = ${data.length}`
  data.map(
    (x,id) =>
 (result.innerHTML+=`<div class="child d-flex justify-content-between align-items-center gap-2 border p-2 rounded-2 bg-dark">
   <p class="p-0 m-0 text-white">${x}</p>
   <div>
   <button class="border-0 bg-transparent" onclick="deleteUser(${id})"><i class="fas fa-times-circle text-danger"></i></button>
   <button class="border-0 bg-transparent" onclick="updateData('${x}',${id})"><i class="fas fa-pen text-warning"></i></button>
   </div>
 </div>`)
 )
})


function deleteUser (x) {
  console.log(dataId,'dataId')
  data.splice(x,1);
  localStorage.setItem("data",JSON.stringify(data))
  result.innerHTML=''
  pendingtask.innerText=`tasks = ${data.length}`
  data.map(
    (x,id) =>
 (result.innerHTML+=`<div class="child d-flex justify-content-between align-items-center gap-2 border p-2 rounded-2 bg-dark">
   <p class="p-0 m-0 text-white">${x}</p>
   <div>
   <button class="border-0 bg-transparent" onclick="deleteUser(${id})"><i class="fas fa-times-circle text-danger"></i></button>
   <button class="border-0 bg-transparent" onclick="updateData('${x}',${id})"><i class="fas fa-pen text-warning"></i></button>
   </div>
 </div>`)
  )
}

updateItem.addEventListener("click",()=>{
  if(dataentry.value!=''){
    data.splice(dataId, 1 , dataentry.value)
    console.log(dataentry.value)
    localStorage.setItem("data",JSON.stringify(data))
    result.innerHTML=''
    pendingtask.innerText=`tasks = ${data.length}`
    data.map(
      (x,id) =>
   (result.innerHTML+=`<div class="child d-flex justify-content-between align-items-center gap-2 border p-2 rounded-2 bg-dark">
     <p class="p-0 m-0 text-white">${x}</p>
     <div>
     <button class="border-0 bg-transparent" onclick="deleteUser(${id})"><i class="fas fa-times-circle text-danger"></i></button>
     <button class="border-0 bg-transparent" onclick="updateData('${x}',${id})"><i class="fas fa-pen text-warning"></i></button>
     </div>
   </div>`)
  )
  }
 
dataentry.value = "";
dataId = "";
});

function updateData(x,id){
  updateItem.style.display = 'flex';
  dataId= id;
  dataentry.value = x;

}

clearDataBTN.addEventListener("click",()=>{
  localStorage.removeItem('data')
  data = []
  result.innerHTML=''
  pendingtask.innerText=`tasks = ${data.length}`
  data.map(
    (x,id) =>
 (result.innerHTML+=`<div class="child d-flex justify-content-between align-items-center gap-2 border p-2 rounded-2 bg-dark">
   <p class="p-0 m-0 text-white">${x}</p>
   <div>
   <button class="border-0 bg-transparent" onclick="deleteUser(${id})"><i class="fas fa-times-circle text-danger"></i></button>
   <button class="border-0 bg-transparent" onclick="updateData('${x}',${id})"><i class="fas fa-pen text-warning"></i></button>
   </div>
 </div>`)
)
})
