import React from "react";

const SimpleForm = () => {
  const handleForm = (e) => {
    // To prevent default loading
    e.preventDefault();
    console.log(e.target.name.value);
  };
  return (
    <div className="mt-5">
      {/* onSubmit is a react build-in props */}
      <form onSubmit={handleForm} className="space-y-4">
        <input
          type="text"
          placeholder="Type here"
          name="name"
          className="input"
        />
        <br />
        <input
          type='email'
          placeholder="mail@site.com"
          name="email"
          className="input"
        />
        <br />
        <input
          type="number"
          placeholder="Type here"
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

export default SimpleForm;
