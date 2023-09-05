import { useState,createContext } from 'react';
import { Child1 } from './child_1';
import { Child2 } from './child_2';


// Define the Theme type
interface Theme  {
    backgroundColor: string;
    color: string;
    padding: string;
    margin: string;
  };
  

// Defining the ThemeContext  in Parent.tsx
export const ThemeContext = createContext<Theme>({
    backgroundColor: '',
    color: '',
    padding: '',
    margin: '',
  });


export const Parent = () => {

    const [darkTheme, setDarkTheme] = useState(true)

    const toggleTheme = () => {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    const theme : Theme = darkTheme
    ? {
        backgroundColor: 'black',
        color: 'green',
        padding: '1rem',
		margin: '1rem',
      }
    : {
        backgroundColor: 'green',
        color: 'black',
        padding: '1rem',
		margin: '1rem',
      };


    return (
        <div className='section'>
            <h2>useContext</h2>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <ThemeContext.Provider value ={theme}>
            <Child1 />
            <Child2 />
            </ThemeContext.Provider>
        </div>

    )
}