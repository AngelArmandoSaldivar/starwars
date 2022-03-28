import { Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";

import TaskList from "./components/TaskList";
import Heading from "./components/Heading";
import Favorites from "./components/Favorites";

function App() {
  return (
    <GlobalProvider>
      <div>        
        <div>
          <Heading />
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/favorites" element={<Favorites />} />            
          </Routes>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;