import * as React from "react";
import classnames from "classnames";

interface ISelectList {
  name?: string;
  value?: string;
  error?: any;
  placeholder?: string;
  info?: string;
  onChange?: any;
  options?: any;
}
const SelectList: React.SFC<ISelectList> = ({
  name,
  error,
  value,
  info,
  placeholder,
  onChange,
  options
}) => {
  const selectOptions = options.map((option: any) => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <div className="form-group">
      <select
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      >
        {selectOptions}
      </select>
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default SelectList;
