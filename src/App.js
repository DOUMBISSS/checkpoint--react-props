import './App.css';
import Profil from './profil/Profil';


function App() {
  function handle (fullName) {
    alert(fullName)
};
  return (
    <Profil fullName='doumbia' bio='description' profession= 'Etudiant' handleName={handle} /> 
  );
}

export default App;
