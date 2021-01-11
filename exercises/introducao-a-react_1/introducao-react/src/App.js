import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['estudar jest com API', 'estudar react', 'pedir ajuda', 'participar dos plantões'];

function App() {
  return (
    <ul>
    {compromissos.map(elem => task(elem))}
    </ul>
  );
}

export default App;
