import ActionTypes from "../constant/constant";

export function changeUserName() {
  return (dispatch) => {
    dispatch({ type: ActionTypes.USERNAME, payload: "Ali" });
  };
}

export function changeRecipientUID(recpUID) {
  return (dispatch) => {
    dispatch({ type: "ADDtoCART", payload: recpUID });
  };
}

export function changeSelectOption(option) {
  return (dispatch) => {
    dispatch({ type: "changeSelectOption", payload: option });
  };
}

export function changeDay(day) {
  return (dispatch) => {
    dispatch({ type: "changeDay", payload: day });
  };
}

export function changeTime(time) {
  return (dispatch) => {
    dispatch({ type: "changeTime", payload: time });
  };
}

export function changeMethod(method) {
  return (dispatch) => {
    dispatch({ type: "changeMethod", payload: method });
  };
}

export function changeDeliveryAddress(deliveryAddress) {
  return (dispatch) => {
    dispatch({ type: "changeDeliveryAddress", payload: deliveryAddress });
  };
}

export function addDetailedItem(itemDetails, currentState) {
  return (dispatch) => {
    let currentValue = currentState;
    if (currentValue) {
      currentValue.push(itemDetails);
    } else {
      currentValue = [];
      currentValue.push(itemDetails);
    }
    dispatch({ type: "addDetailedItem", payload: currentValue });
  };
}

export function addToCart(value, state) {
  //todo - look if there already is an identical item and just increase the quantity of it
  return (dispatch) => {
    let currentState = state;
    //make sure that if our initial state is empty dont use spread operators
    if (currentState === []) {
      currentState.push(value);
      return dispatch({ type: "addToCart", payload: currentState });
    } else {
      let doesItemExist = false;
      currentState = currentState.map((x) => {
        if (!value.details && x.name == value.name) {
          x.quantity++;
          doesItemExist = true;
        }
        return x;
      });
      if (doesItemExist === false) {
        currentState.push(value);
      }
      return dispatch({ type: "addToCart", payload: currentState });
    }
  };
}

export function removeFromCart(value, state) {
  return (dispatch) => {
    let currentState = state;

    currentState = currentState.map((item) => {
      if (item.itemName == value.itemName) {
        item.quantity = value.quantity;
      }
      return item;
    });

    currentState = currentState.filter((item) => {
      return item.quantity > 0;
    });

    dispatch({ type: "removeFromCart", payload: currentState });
  };
}

export function updateCart(value, state) {
  return (dispatch) => {
    let currentState = state;

    currentState = currentState.map((item) => {
      if (item.itemName == value.itemName) {
        item.quantity = value.quantity;
      }
      return item;
    });

    currentState = currentState.filter((item) => {
      return item.quantity > 0;
    });

    dispatch({ type: "updateCart", payload: currentState });
  };
}
