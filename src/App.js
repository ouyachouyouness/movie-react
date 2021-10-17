import "./App.css";
import Body from "./Component/body";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

import store from "./Store";
import { Provider as StoreProvider} from "react-redux";

function App() {
  return (
    <StoreProvider store={store}>
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    </StoreProvider>
  );
}

export default App;
