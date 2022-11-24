import "./App.css";
import NavbarHome from "./components/Navbar";
import {test} from "./homepage.js"
import {Helmet} from "react-helmet"



function App() {
  const Demo = props => (
    <div className="application">
                <Helmet>
                  <script src="./homepage.js" type="text/javascript" />
                </Helmet>
            </div>
      
    );
  return (
    <>
      <div class="moon"></div>
      <NavbarHome />
      {/* <div class="filter"></div>
      <canvas id="canvas"></canvas> */}
      <test />
    </>
  );
}




export default App;
