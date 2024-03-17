import logo from './logo.svg';
import './App.css';
import Body from './Components/Body';
import Head from './Components/Head';
import Login from './Components/Login/Login';
import Store from "./Components/utils/store/Store";
import {Provider} from "react-redux";

function App() {
  return (
    <Provider store={Store}>
      <div className="">
        <Head/>
        <Body/>
        {/* <Login/> */}

    </div>
    </Provider>
  );
}

export default App;
