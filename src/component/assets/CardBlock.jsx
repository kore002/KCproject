import PropTypes from "prop-types";
function CardBlock({ source }) {
  return (
    <>
    <div>
        <img src={source} alt="A" />
    </div>
    </>

  );
}
CardBlock.propsTypes = {
    source: PropTypes.string,
  //action: PropTypes.func,
};

export default CardBlock;
