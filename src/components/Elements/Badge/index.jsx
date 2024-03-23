const Badge = ({ children, bg }) => {
  return (
    <div
      className={`flex flex-row items-center px-6 py-3 rounded-full w-fit gap-x-3 bg-${bg}`}
    >
      {children}
    </div>
  );
};

export default Badge;
