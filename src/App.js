import Users from "./components/Users";
import store from "./redux/store";
import { Provider } from "react-redux";


function App() {
  return (
    <Provider store={store}>
      <Users/>
    </Provider>
  );
}

export default App;
