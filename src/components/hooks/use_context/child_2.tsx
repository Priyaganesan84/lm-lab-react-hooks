import  { useContext } from 'react';
import { ThemeContext } from './parent';

export const Child2 = () => {
  const theme = useContext(ThemeContext);

  return (
    <div style={theme}>
      <h3>Child 2</h3>
      <p>This is Child 2.</p>
    </div>
  );
};


//initial code can be removed
// export const Child2: React.FC<{ dark: boolean }> = ({ dark }) => {
// 	const theme = {
// 		backgroundColor: dark ? '#333' : '#CCC',
// 		color: dark ? 'white' : '#333',
// 		padding: '2rem',
// 		margin: '2rem',
// 	};

// 	return <div style={theme}>Child 2</div>;
// };
