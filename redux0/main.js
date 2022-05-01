import { addTodo, ADD_TODO, deleteTodo } from './Redux/action';
import { store } from './Redux/Store';
// console.log("store",store)
// import './style.css'

let data;

let text = document.getElementById("input");
  document.getElementById("btn").addEventListener("click", run);

function run() {
    store.dispatch({ type: ADD_TODO , payload: { title: text.value, status: false } });
  data = store.getState().Todo;
   console.log("data",data)
  append(data)
}
// console.log("aad",store)

function append(data)
{
  console.log(data)
  let abhi = document.getElementById("List");
  abhi.innerHTML = ""
  data.map((e,index) => {
    let row = document.createElement("tr")
    let td1 = document.createElement("td")
    td1.innerText = index+1
    let td2 = document.createElement("td")
    td2.innerText = e.title
    let td3 = document.createElement("td")
    td3.innerText = e.status
     let toggle=document.createElement("button")
    //  toggle.addEventListener("click",handleToggle)

     let Delete=document.createElement("button")
     Delete.textContent="Delete"
     Delete.addEventListener("click",handleDelete)
     function handleDelete(){
       console.log("clicked")
       store.dispatch(deleteTodo(e.title))
       console.log("store",store.getState())
       append(store.getState().Todo)

     }
    row.append(td1, td2, td3, Delete)
    abhi.append(row)
  })
}