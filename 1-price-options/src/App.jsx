import AxiosBarChart from "./Components/AxiosBarChart/AxiosBarChart";
import DaisyNavbar from "./Components/DaisyNavbar/DaisyNavbar";
import Navbar from "./Components/Navbar/Navbar";
import PriceOptions from "./Components/PriceOptions/PriceOptions";
import ReChart from "./Components/ReChart/ReChart";


function App() {
  return (
    <>
     <Navbar></Navbar>
     {/* <DaisyNavbar></DaisyNavbar> */}
     <PriceOptions></PriceOptions>
     <ReChart></ReChart>
    <AxiosBarChart></AxiosBarChart>
    </>
  );
}

export default App;
