const Text = ({ title, subTitle, para, className }) => {
  return (
    <div className={`text ${className}`}>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <p>{para}</p>
    </div>
  );
};

export default Text;
