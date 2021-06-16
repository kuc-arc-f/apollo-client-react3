import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import {
  ApolloProvider,
} from "@apollo/client";
import client from './apollo-client'

// import Home from './component/Home';
import Test from './component/Test';
import Navbar from './component/Navbar';
/* todos */
import todos from './component/todos/Index';
import todoCreate from './component/todos/Create';
import todoShow from './component/todos/Show';
import todoEdit from './component/todos/Edit';

class App extends Component {
  render() {
    return (
    <div className="App">
      <Router>
        <div>
          <ApolloProvider client={client}>
          <Navbar />
            <Route path='/test' component={Test} />
            <Route path='/todos' component={todos} />
            <Route path='/todo_show/:id' component={todoShow}/>
            <Route path='/todos_create' component={todoCreate} />
            <Route path='/todo_edit/:id' component={todoEdit} />
          </ApolloProvider>
        </div>
      </Router>
    </div>
    );
  }
}
export default App;
