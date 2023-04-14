import { GlobalProvider } from "./components/Global";
import Containers from "./pages/Containers";
import Boxes from "./pages/Boxes";

import Home from "./pages/Home";

function App() {
  let component;
  switch (window.location.pathname) {
    default:
      component = <Home />;
      break;
    case "/containers":
      component = <Containers />;
      break;
    case "/boxes":
      component = <Boxes />;
      break;
  }
  return <GlobalProvider>{component}</GlobalProvider>;
}

export default App;
