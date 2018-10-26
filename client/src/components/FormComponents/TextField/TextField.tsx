import * as React from "react";
import classnames from "classnames";

interface ITextField {
  name?: string;
  error?: any;
  type?: string;
  value?: string;
  placeholder?: string;
  onChange?: any;
  info?: string;
  disabled?: boolean;
}
const TextField: React.SFC<ITextField> = ({
  name,
  error,
  type,
  value,
  placeholder,
  onChange,
  info,
  disabled
}) => {
  return (
    <div className="form-group">
      <input
        type={type}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        disabled={disabled}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};
TextField.defaultProps = {
  type: "text"
};

export default TextField;
