import Graph from "./Graph";
import NavBar from "./Navbar";
import { AuthProvider } from "./AuthProvider";

function App() {
  return (
    <AuthProvider>
      <NavBar/>
      <Graph/>
    </AuthProvider>
  );
}

export default App;
