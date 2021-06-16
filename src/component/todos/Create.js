import React  from 'react';
//import { useState } from 'react';
//import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_TODO } from '../../graphql/todo';

function TodosCreate(props) {
  const [AddTodo, { data }] = useMutation(ADD_TODO);
console.log(data)
  const clickHandler= function(){
    var title = document.getElementById('title');
// console.log("clickHandler: " + title.value)
    AddTodo({ variables: { title: title.value } });
    title.value= ''
    props.history.push("/");
  }
  return (
  <div className="container py-2">
    <h3>Todos - Create</h3>
    <hr />
    <input type="text" name="title" id="title" />
    <button onClick={() => {clickHandler()}}>
      AddTodo
    </button>      
    <hr />
  </div>
  );
}
export default TodosCreate;
