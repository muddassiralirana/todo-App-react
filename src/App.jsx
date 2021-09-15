// // import logo from './logo.svg';
// import react from 'react';
// import './App.css';
// import Header from './components/header';  
// import Footer from './components/footer';


// function App (){
//   return(
//     <div>
//       <h1>hello world</h1>
//     </div>
//   )
// }


// class App extends react.Component{
//   render(){
//     return(
//       <div> 

//         <Header/>

//         <h1>main body</h1>

//         <Footer/>
//       </div>
//     )
//   }
// }


// class App extends react.Component{
//   render(){

//     var name=[{name:"ali"},{name:"rana"}];


//     return(
//       <div>
//         <ul>
//           <li>{name[0].name}</li>
//           <li>{name[0].name}</li>
//         </ul>
//       </div>
//     )
//   }
// }

// class Header extends react.Component{
//   render(){
//     return(
//       <div className="header">
//         <h1>this is header</h1>
//       </div>
//     )
//   }
// }

// class Footer extends react.Component{
//   render(){
//     return(
//       <div className="footer">
//         <h2>Footer</h2>
//       </div>
//     )
//   }
// }



// class App extends react.Component{
//   render(){
//     var fname="ali"
//     var lname="rana"
//     let fulname=  `${fname} ${lname}`
//     return(
//       <div>
//         {/* <h1>my name is {name}</h1> */}
//         {/* <h1>my full name is  {fname} {lname} </h1> */}
//         <h2>{fulname} </h2>

//       </div>
//     )
//   }
// }



// for helloworld program
// class App extends react.Component{
//   render(){
//    return(
//      <div>

//        <h1>hello world</h1>
//      </div>
//    )
//   }
// }










// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;




// -===================-------------------------------------------------
//   todo Apllication in react

// -----------------------------------------------------------////


import react from "react";
import "./App.css";
// import Footer from "./components/footer"
import Header from "./components/header";
import Todo from "./components/todo";
// import firebase from "./config/firebase";




function App() {
  return (
    <main >
      <div>
        <Header />
        <Todo />
      </div>

    </main>
  )

}

// function Todo() {

//   var [value, setValues] = react.useState("");
//   var [todos, setTodos] = react.useState([]);

//   var addTodo = () => {
//     let arr = [...todos];
//     // firebase.database().ref(`/todos`).push(arr)
//     arr.push(value)
//     setTodos(arr)
//     setValues("")
//   }

//   var deleteTodo = (i) => {
//     let arr = [...todos];
//     arr.splice(i, 1)
//     setTodos(arr)
//   }
//   var editTodo = (i) => {
//     var updatedValue = prompt("enter a value");
//     todos[i] = updatedValue
//     setValues(todos[i])

//   }
//   var dellTodo = () => {

//     setTodos([])

//   }

//   return (

// <div>
// <div className="sectionTodo">
//       <label htmlFor="">Enter Your Todo.</label>
//       <input value={value} onChange={(e) => setValues(e.target.value)} type="text" placeholder="enter a value" />
//       <button className="add" onClick={addTodo}>Add Todo</button>
//       <button className="delall" onClick={dellTodo}>Delete All</button>
//       <ol>
//         {todos.map((v, i) => {
//           return <li key={i}>{v}
//             <button className="edit" onClick={() => editTodo(i)}>edit todo</button>
//             <button className="delete" onClick={() => deleteTodo(i)}>delete todo</button>

//           </li>


//         })}
//       </ol>
//     </div>
// </div>

//   )

// }


// function Header() {
//   return (
//     <div className="header">
//       <div>

//         <img src={logo} alt="" />



//       </div>
//       <div>
//         <h1>TODO APP REACT</h1>
//       </div>


//     </div>
//   )
// }

export default App;