import "./styles.scss";

const getButtonClassByType = (type) => {
  if (type === "primary") {
    return "camp-button_primary";
  } else if (type === "secondary") {
    return "camp-button_secondary";
  }
};

const Button = (props) => {
  const className = getButtonClassByType(props.type);
  return <button className={`camp-button ${className}`}>{props.text}</button>;
};

export default Button;
