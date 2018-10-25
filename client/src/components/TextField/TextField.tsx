import * as React from "react";
import classnames from "classnames";

interface ITextField {
  name?: string;
  errors?: any;
  type?: string;
  value?: string;
  placeholder?: string;
  onChange?: any;
  disabled?: boolean;
}
const TextField: React.SFC<ITextField> = ({
  name,
  errors,
  type,
  value,
  placeholder,
  onChange,
  disabled
}) => {
  return (
    <div className="form-group">
      <input
        type={type}
        className={classnames("form-control form-control-lg", {
          "is-invalid": errors
        })}
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        disabled={disabled}
      />
      {errors && <div className="invalid-feedback">{errors}</div>}
    </div>
  );
};
TextField.defaultProps = {
  name: "Guest User"
};

export default TextField;
