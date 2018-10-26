import * as React from "react";
import classnames from "classnames";

interface IInputGroup {
  name?: string;
  placeholder?: string;
  value?: string;
  error?: any;
  icon?: string;
  type?: string;
  onChange?: any;
}
const InputGroup: React.SFC<IInputGroup> = ({
  name,
  error,
  value,
  placeholder,
  icon,
  type,
  onChange
}) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className={icon} />
        </span>
      </div>
      <input
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        value={value}
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

InputGroup.defaultProps = {
  type: "text"
};

export default InputGroup;
