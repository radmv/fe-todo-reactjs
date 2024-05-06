import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const Input = forwardRef((props, ref) => {
  const { type, placeholder, name, defaultValue, onChange } = props;
  return (
    <input
      type={type}
      className="bg-color-bg border border-color-outline text-white text-sm rounded-lg focus:ring-color-outline focus:border-colring-color-outline block w-full p-2.5 dark:bg-color-bg dark:placeholder-gray-400 dark:text-white dark:focus:ring-color-outline dark:focus:border-colring-color-outline"
      placeholder={placeholder}
      name={name}
      id={name}
      ref={ref}
      onChange={onChange}
      defaultValue={defaultValue}
    />
  );
});

export default Input;
