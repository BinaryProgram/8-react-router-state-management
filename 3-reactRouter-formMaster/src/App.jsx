import "./App.css";
import CustomHookForm from "./components/CustomHookForm/CustomHookForm";
import Grandpa from "./components/Grandpa/Grandpa";
import RefForm from "./components/RefForm/RefForm";
import ReuseableForm from "./components/ReuseableForm/ReuseableForm";
import SimpleForm from "./Components/SimpleForm/SimpleForm";
import StateForm from "./components/StateForm/StateForm";

function App() {
  const handleSignUp = (data) => {
    console.log("sign up form data", data);
  };
  const handleUpdate = (data) => {
    console.log("update form data", data);
  };
  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateForm></StateForm> */}
      {/* <RefForm></RefForm> */}
      {/* <CustomHookForm></CustomHookForm> */}
      <ReuseableForm
        handleSubmit={handleSignUp}
        formTitle="Sign Up"
      >
        <div>
          <h2>Sign Up</h2>
          <p>Hurry! Sign Up right now.</p>
        </div>
      </ReuseableForm>
      <ReuseableForm
        handleSubmit={handleUpdate}
        formBtn="Update"
        formTitle="Update Profile"
      >
        <div>
          <h2>Update</h2>
          <p>Always keep your profile up-to-date!</p>
        </div>
      </ReuseableForm>
      <Grandpa></Grandpa>
    </>
  );
}

export default App;
