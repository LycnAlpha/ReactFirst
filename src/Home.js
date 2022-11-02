import{ useState} from 'react';

const Home = () => {

   // let name = 'Mario';

    const [name , setName] = useState('Mario');
    const [click, setClick] = useState(0);

    const handleClick = () => {
        //console.log('hello dimal',e);

        //name = 'Luigi';
        //console.log(name);

        setName('Luigi');
        setClick(click+1);
    }

    /*const handleClickAgain = (name,e)=> {
        console.log('Hello '+name,e.target)
    }
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click me</button>
           <button onClick={(e)=>{
                handleClickAgain('Shashith',e)
            }}>Click me again</button>
        </div>
     );*/

     return(
        <div className="home">
            <h2>Home Page</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click me</button>
            <p>Clicked {click} times</p>
        </div>
     );
}
 
export default Home;