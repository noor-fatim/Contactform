const Formsubmission = ({ name, email, num, message }) => {
  return (
    <div className="form-submit">
      <p>Name : {name}</p>
      <p>Email : {email}</p>
      <p>Num : {num}</p>
      <p>Message : {message}</p>
    </div>
  );
};
export default Formsubmission;
