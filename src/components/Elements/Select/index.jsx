const Select = (props) => {
  const { title, name, defaultValue } = props;
  return (
    <div className="mb-6">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-color-text-input dark:text-white"
      >
        {title}
      </label>
      <select
        id={name}
        className="bg-color-bg border border-color-outline text-white text-sm rounded-lg focus:ring-color-outline focus:border-colorring-color-outline block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-color-outline dark:focus:border-colorring-color-outline"
        defaultValue={defaultValue}
      >
        <option value="Todo">Todo</option>
        <option value="On Progress">On Progress</option>
        <option value="Done">Done</option>
      </select>
    </div>
  );
};

export default Select;
