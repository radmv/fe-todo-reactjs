const CenteredContent = ({ children, variant }) => {
  return <div className={`max-w-6xl mx-auto ${variant}`}>{children}</div>;
};

export default CenteredContent;
