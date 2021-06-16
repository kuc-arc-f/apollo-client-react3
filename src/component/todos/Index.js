import React  from 'react';
import { Link } from 'react-router-dom';
import IndexRow from './IndexRow';
//import LibTodo from '../../libs/LibTodo';
import {
  useQuery,
  gql
} from "@apollo/client";
//import client from '../../apollo-client'

const GET_TODOS = gql`
  query {
    todos {
      id
      title
    }
  }
`;

function GetTodos() {
  const { loading, error, data } = useQuery(GET_TODOS)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
console.log(data.todos)
  return data.todos.map((item ,index) => (
    <IndexRow obj={item} key={index} />
  ));
}

function TodosIndex() {
  return (
    <div className="container py-2">
      <h3>Todos - index</h3>
      <hr />
      <Link to={`/todos_create`} >
          <button>Create</button>
      </Link>      
      <hr />
      <GetTodos />
    </div>
  );
}
export default TodosIndex;