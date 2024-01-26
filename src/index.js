import {createStore} from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const Add = "add";
const Minus = "minus";

const countModifier = (count = 0, action) => { //data를 유일하게 바꿀 수 있는 함수
  console.log(count,action);  
  //count를 수정하는 함수..
  switch (action.type){
    case "add":
      return count + 1;
    case "minus":
      return count - 1;
    default:
      return count;
    
  }
}; 

const countStore = createStore(countModifier); //createStore 는 reducer 을 요구

const onChange = () =>{
  number.innerText = countStore.getState();
}

countStore.subscribe(onChange);

add.addEventListener("click", ()=>countStore.dispatch({type : Add}))
minus.addEventListener("click", ()=>countStore.dispatch({type : Minus}))

console.log(countStore.getState());// 현재 값 출력할 때 