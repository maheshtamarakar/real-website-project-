
import './App.css';
import  Header  from './MyComponent/Header';
// import { TodoItem } from './MyComponent/TodoItem';
import { Todos } from './MyComponent/Todos';
import { Footer } from './MyComponent/Footer';




function App() {
  // making todos object
  let todos = [
    {
      sno: 1,
      title:"Go to the market",
      desc:"You need to go to the market to get this job done"
    },
    {
      sno: 2,
      title:"Go to the mall",
      desc:"You need to go to the market to get this job done"
    },
    {
      sno: 3,
      title:"Go to the ghat",
      desc:"You need to go to the market to get this job done"
    },
  ]
  const onDelete1 = (todo)=>{
    console.log("I am onDelete", todo);
  }
  return (
    <>
    <Header title="Todos List" Searchbar={false}/>
    <Todos todos1={todos} onDelete={onDelete1} />
    <Footer/>
    </>
  );
}

export default App;
