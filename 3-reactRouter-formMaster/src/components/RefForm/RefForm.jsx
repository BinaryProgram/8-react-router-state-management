import { useEffect, useRef } from "react";

const RefForm = () => {
  const refName = useRef(null);
  const refEmail = useRef(null);
  const refPassword = useRef(null);
  const refPhone = useRef(null);
  
  // if page reload cursor will focus inside name input field
  useEffect(() => {
    refName.current.focus();
  }, []);

  const handleForm = (e) => {
    // To prevent default loading
    e.preventDefault();

    console.log(refName.current.value);
    console.log(refEmail.current.value);
    console.log(refPassword.current.value);
    console.log(refPhone.current.value);
  };
  return (
    <div className="mt-5">
      {/* onSubmit,onChange is a react build-in props */}
      <form onSubmit={handleForm} className="space-y-4">
        <input
          ref={refName}
          type="text"
          placeholder="entered name"
          name="name"
          className="input"
        />
        <br />
        <input
          ref={refEmail}
          type="email"
          placeholder="mail@site.com"
          name="email"
          className="input"
        />
        <br />
        <input
          ref={refPassword}
          type="password"
          placeholder="entered password"
          name="password"
          className="input"
          required
        />
        <br />
        <input
          ref={refPhone}
          type="number"
          placeholder="entered phone"
          name="phone"
          defaultValue={8801000000000}
          className="input"
          required
        />
        <br />
        <button className="btn btn-wide">
          <input type="submit" value="Submit" />
        </button>
      </form>
    </div>
  );
};

export default RefForm;
