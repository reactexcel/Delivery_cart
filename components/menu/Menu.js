import { connect } from "react-redux";
import MenuCard from "./MenuCard";

const Menu = ({ addToCart, payload }) => {
  return (
    <div className="mb-5">
      {payload
        ? payload.map((category, index) => (
            <div key={index} className="row">
              <h3
                className=" col-md-8 col-12 mb-4 text-left"
                style={{ fontWeight: "500", color: "#323232" }}
                id={`${category.category}`}
              >
                {" "}
                {category.category}
                <hr style={{ margin: "30px 0" }} />
              </h3>

              {category.items.map((item, index) => (
                <MenuCard key={index} item={item} addToCart={addToCart} />
              ))}
            </div>
          ))
        : null}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    payload: state.store.payload,
  };
}

export default connect(mapStateToProps)(Menu);
