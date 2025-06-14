import React from "react";
import useInputState from "../../hooks/useInputState";

const CustomHookForm = () => {
  //   const [name, handleNameChange] = useInputState("Akatsuki");
  //   const [email, handleEmailChange] = useInputState("");
  //   const [phone, handlePhoneChange] = useInputState("");
  const emailState = useInputState("");

  const handleSubmit = (e) => {
    console.log(emailState.value);
    e.preventDefault();
  };
  return (
    <div className="mt-5">
      {/* onSubmit is a react build-in props */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* <input
          type="text"
          placeholder="Type your name"
          name="name"
          value={name}
          onChange={handleNameChange}
          className="input"
        /> */}
        <br />
        <input
          type="email"
          {...emailState}
          placeholder="mail@site.com"
          name="email"
          className="input"
        />
        <br />
        <input
          type="number"
          placeholder="Type your phone number here"
          name="phone"
          className="input"
        />
        <br />
        <button className="btn btn-wide">
          <input type="submit" value="Submit" />
        </button>
      </form>
    </div>
  );
};

export default CustomHookForm;
