import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

// eslint-disable-next-line react/display-name
const InputForm = forwardRef((props, ref) => {
  const {
    label,
    name,
    type,
    placeholder,
    defaultValue = null,
    onChange = () => {},
  } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        ref={ref}
        defaultValue={defaultValue}
      />
    </div>
  );
});
export default InputForm;
