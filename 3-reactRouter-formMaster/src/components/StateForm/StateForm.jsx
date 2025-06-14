import React, { useState } from "react";

const StateForm = () => {
    // saklain is a default value of name input field
  const [name, setName] = useState("saklain");
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [phone, setPhone] = useState(null);

  const [error, setError] = useState("");

  const handleForm = (e) => {
    // To prevent default loading
    e.preventDefault();

    // password length > 6
    if (password.length < 6) {
      setError("password must be 6 character or longer");
    } else {
      error("");
      console.log(name, email, password, phone);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNumberChange = (e) => {
    setPhone(e.target.value);
  };

  return (
    <div className="mt-5">
      {/* onSubmit,onChange is a react build-in props */}
      <form onSubmit={handleForm} className="space-y-4">
        <input
          onChange={handleNameChange}
          type="text"
          placeholder="entered name"
          name="name"
          value={name}
          className="input"
        />
        <br />
        <input
          onChange={handleEmailChange}
          type="email"
          placeholder="mail@site.com"
          name="email"
          className="input"
        />
        <br />
        <input
          onChange={handlePasswordChange}
          type="password"
          placeholder="entered password"
          name="password"
          className="input"
          required
        />
        <br />
        <input
          onChange={handleNumberChange}
          type="number"
          placeholder="entered phone"
          name="phone"
          className="input"
          required
        />
        <br />
        <button className="btn btn-wide">
          <input type="submit" value="Submit" />
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default StateForm;
