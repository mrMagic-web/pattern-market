import * as React from "react";
import classnames from "classnames";

interface ITextArea {
  name?: string;
  placeholder?: string;
  value?: string;
  error?: any;
  info?: string;
  onChange?: any;
}
const TextArea: React.SFC<ITextArea> = ({
  name,
  error,
  value,
  info,
  placeholder,
  onChange
}) => {
  return (
    <div className="form-group">
      <textarea
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default TextArea;
