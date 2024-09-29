import { useState } from "react";
import Formsubmission from "./Formsubmission";

const InputForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [num, setNum] = useState("");
  const [message, setMessage] = useState("");
  const onsubmit = (e) => {
    e.preventDefault();
    console.log(e);
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setNum(e.target[2].value);
    setMessage(e.target[3].value);
  };

  return (
    <>
      <form onSubmit={onsubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="John"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="+92300 7291111"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="btn-container">
          <button
            type="submit"
            className="btn btn-secondary"
            style={{ backgroundColor: "black" }}
          >
            Submit
          </button>
        </div>
      </form>
      <Formsubmission name={name} email={email} num={num} message={message} />
    </>
  );
};

export default InputForm;
