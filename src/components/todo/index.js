import react from "react";
import "./css/index.css"




  
  function Todo() {
  
    var [value, setValues] = react.useState("");
    var [todos, setTodos] = react.useState([]);
  
    var addTodo = () => {
      let arr = [...todos];
      // firebase.database().ref(`/todos`).push(arr)
      arr.push(value)
      setTodos(arr)
      setValues("")
    }
  
    var deleteTodo = (i) => {
      let arr = [...todos];
      arr.splice(i, 1)
      setTodos(arr)
    }
    var editTodo = (i) => {
      var updatedValue = prompt("enter a value");
      todos[i] = updatedValue
      setValues(todos[i])
     
  
    }
    var dellTodo = () => {
  
      setTodos([])
  
    }
  
    return (
  
  <div>
  <div className="sectionTodo">
        <label htmlFor="">Enter Your Todo.</label>
        <input value={value} onChange={(e) => setValues(e.target.value)} type="text" placeholder="enter a value" />
        <button className="add" onClick={addTodo}>Add Todo</button>
        <button className="delall" onClick={dellTodo}>Delete All</button>
        <ol>
          {todos.map((v, i) => {
            return <li key={i}>{v}
              <button className="edit" onClick={() => editTodo(i)}>edit todo</button>
              <button className="delete" onClick={() => deleteTodo(i)}>delete todo</button>
  
            </li>
  
  
          })}
        </ol>
      </div>
  </div>
  
    )
  
  }
  

  export default Todo;