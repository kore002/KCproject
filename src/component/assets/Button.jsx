import PropTypes from "prop-types";
function Button({ action, name }) {
  return (
    <button
      onClick={() => {
        action();
      }}
    >
      {name}
    </button>
  );
}
Button.propsTypes = {
  name: PropTypes.string,
  action: PropTypes.func,
};

export default Button;
