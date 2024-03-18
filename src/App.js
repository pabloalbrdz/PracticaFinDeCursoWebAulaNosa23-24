import './App.css';
import Header from './component/header.js'
import PantallaPrincipal from './view/PantallaPrincipal.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
  return (
    <div className="App">
      <Header/>
      <PantallaPrincipal/>
      <Footer/>
    </div>
    
    

    
  );
}
export default App;