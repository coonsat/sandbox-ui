import logo from './logo.svg';
import './UserInterface/main.scss';
// import './App.css';

//Component import
import SimpleButtons from './Components/Buttons/SimpleButtons';
import GroupButtons from './Components/Buttons/GroupButtons';

function App() {
  return (
    <div>
      <SimpleButtons />
      <GroupButtons />
    </div>
  );
}

export default App;
