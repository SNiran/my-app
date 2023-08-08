const Btn = ({ btnText, className }) => {
  return (
    <a href="/reservations" className={`btn ${className}`}>
      {btnText}
    </a>
  );
};
export default Btn;
