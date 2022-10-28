import React, { useState } from 'react';
import TodoCard from '../TodoCard/TodoCard.js';

function TodoContainer(prop) {
  const todos = prop.todos.map(todo => 
    <TodoCard key={todo.id} todoInfo={todo}></TodoCard>);

  return (
    <div>
      {todos}
    </div>
  );
}

export default TodoContainer;