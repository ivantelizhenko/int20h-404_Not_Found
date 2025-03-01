import Header from "./components/Header/Header";
import Input from "./components/Input/Input";

function App() {
  return <div className='flex flex-col items-center justify-between h-full gap-[100px]'>
    <Header/>
    <Input/>
  </div>;
}

export default App;
