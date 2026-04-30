import './App.css';
import { store } from './store';
import  {Provider} from "react-redux";
import {Counter} from './Components/Counter/counter';
import { Todo } from './Components/Todo/Todo';

function App() {
  return (
      <>
        <Provider store={store}>
          {/* <Counter/> */}
          <Todo/>
        </Provider>
        
      </>
  );
}

export default App;
