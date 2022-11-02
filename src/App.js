import Navbar from './Navbar';
import Home from './Home';
import Post from './Post';

function App() {
  const title = "Hi welcome to new page";
  

  
  
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        
        <h1>{title}</h1>
        <Home />
        <Post />
        
      </div>
    </div>
  );
}

export default App;
