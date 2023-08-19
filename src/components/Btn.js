const Btn = ({ btnText, className, href }) => {
  return (
    <a href={href} className={`btn ${className}`}>
      {btnText}
    </a>
  );
};
export default Btn;
