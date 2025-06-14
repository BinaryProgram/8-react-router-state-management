// Reusable form using props and children

const ReuseableForm = (props) => {
    const {handleSubmit,formTitle,formBtn='Submit',children} = props;
    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name:e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value
        }
       handleSubmit(data);
    }
    return (
      <div>
        <div className="mt-5">
          {/* onSubmit is a react build-in props */}
          <h2 className='font-bold text-2xl mb-3'>{children}</h2>
          <form onSubmit={handleLocalSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="your name"
              name="name"
              className="input"
            />
            <br />
            <input
              type="email"
              placeholder="mail@site.com"
              name="email"
              className="input"
            />
            <br />
            <input
              type="number"
              placeholder="your phone number"
              name="phone"
              className="input"
            />
            <br />
            <button className="btn btn-wide">
              <input type="submit" value={formBtn} />
            </button>
          </form>
        </div>
      </div>
    );
};

export default ReuseableForm;