// import { useEffect } from "react";
import { addToCart } from "../../store/cart";
import { useDispatch } from "react-redux";

function ProduceDetails({ produce }) {
  const cartItem = {};
  const dispatch = useDispatch();

  const plusButton = (e) => {
    console.log(e.target.value)
    dispatch(addToCart(e.target.value));
  };

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button className={"like-button" + (produce.liked ? " selected" : "")}>
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          value={produce.id}
          onClick={plusButton}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;
