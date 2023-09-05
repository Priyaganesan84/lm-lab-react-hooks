// make an api call using useEffect

import React, { useState, useEffect } from 'react';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
} 

export const APICall = () => {
  // Step 2: Create state using useState
  const [todo, setTodo] = useState<Todo | null>(null);

  // Step 3: Use useEffect to make the API call
  useEffect(() => {
    // Step 4: Define an asynchronous function to make the API call
    async function fetchTodo() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        // Step 5: Update the state with the fetched data
        setTodo(data);
      } catch (error) {
        console.error('Error fetching todo:', error);
      }
    }

    // Call the fetchTodo function
    fetchTodo();
  }, []); // Empty dependency array means the effect runs once after the initial render

  return (
    <>
      <h2>useEffect</h2>
      {/* Step 6: Display the fetched todo data */}
      {todo ? (
        <p>{todo.title} {todo.id} {todo.userId}</p>
      
      ) : (
        <p>Loading todo...</p>
      )}
    </>
  );
};























