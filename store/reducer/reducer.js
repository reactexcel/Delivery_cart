import { HYDRATE } from "next-redux-wrapper";
import ActionTypes from "../constant/constant";

const INITIAL_STATE = {
  userName: "Haider",
  recipientID: "",
  day: false,
  time: false,
  deliveryAddress: "Your Delivery Address",
  method: "Delivery",
  selectedData: "ASAP",
  restaurantData: {
    name: "Souvlaki Express",
    number: "+1 416-840-2754",
    address: "82 Ontario St, Toronto, ON M5A 1P8",
    type: "$ . Greek-Mediterranean . Home-Made . Salad",
    estimatedDeliveryTime: "25-35 Minutes",
    deliveryFee: 4.99,
    rating: "4.3 (64)",
    allowPickup: true,
    allowDelivery: true,
    openTime: 4,
    closeTime: 9,
    openDays: [
      "Tuesday. May 26",
      "Wednesday, May 27",
      "Thursday, May 28",
      "Friday, May 29",
      "Saturday, May 30",
      "Sunday, May 31",
    ],
  },
  payload: [
    {
      category: "Appetizers",
      items: [
        {
          itemName: "Sm.Tzatziki",
          details:
            "Greek yogurt dip with cucumbers garlic and olive oil, served with pita bread",
          price: 3.49,
          quantity: 1,
        },
        {
          itemName: "Sm. Hummus",
          details:
            "4oz. Cup Puréed chickpeas, tahini, garlic lemon and olive oil, served with 1 pita bread",
          price: 3.49,
          quantity: 1,
        },
        {
          itemName: "Lg.Tzatziki",
          details:
            "Puréed chickpeas, tahini, garlic, lemon and olive oil, served with pita bread",
          price: 6.99,
          quantity: 1,
        },
        {
          itemName: "Lg.Humus",
          details:
            "8oz. Cup & Puréed chickpeas, tahini, garlic lemon and olive oil, served with 2 pita brea",
          price: 6.99,
          quantity: 1,
        },
        {
          itemName: "Dolmadakia",
          details:
            "Vine leaves stuffed with seasoned rice, served with tzatziki and pita bread",
          price: 7.49,
          quantity: 1,
        },
      ],
    },
    {
      category: "Special Dinners Offers",
      items: [
        {
          itemName: "Dinner For 2",
          details:
            "Includes 4 Souvlaki Sticks, choose from Chicken or Pork (also available Beef or Lamb) and choose from two drinks",
          price: 29.99,
          minSelectedItems: 6,
          quantity: 1,
          selections: [
            {
              selectOptionText: "Choose Four Souvlaki Sticks",
              itemSelectionHint: "Choose Exactly 4",
              requiredQuantity: 4,
              options: [
                {
                  itemName: "Stick Chicken",
                  price: 0,
                  quantity: 1,
                },
                {
                  itemName: "Stick Pork",
                  price: 0,
                  quantity: 1,
                },
                {
                  itemName: "Stick Beef",
                  price: 1.5,
                  quantity: 1,
                },
                {
                  itemName: "Stick lamb",
                  price: 1.5,
                  quantity: 1,
                },
              ],
            },
            {
              selectOptionText: "Drinks",
              itemSelectionHint: "Choose Exactly 2",
              requiredQuantity: 2,
              options: [
                {
                  price: 0,
                  quantity: 1,
                  itemName: "Coke Cola Can",
                },
                {
                  itemName: "Coke Zero Can",
                  price: 0,
                  quantity: 1,
                },
                {
                  itemName: "7up Can",
                  price: 0,
                  quantity: 1,
                },
                {
                  itemName: "Diet 7up Can",
                  price: 0,
                  quantity: 1,
                },
                {
                  itemName: "A&W Root Beer Can",
                  price: 0,
                  quantity: 1,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      category: "Desserts",
      items: [
        {
          itemName: "Sm.Tzatziki",
          details:
            "Greek yogurt dip with cucumbers garlic and olive oil, served with pita bread",
          price: 3.49,
          quantity: 1,
        },
        {
          itemName: "Sm. Hummus",
          details:
            "4oz. Cup Puréed chickpeas, tahini, garlic lemon and olive oil, served with 1 pita bread",
          price: 3.49,
          quantity: 1,
        },
        {
          itemName: "Lg.Tzatziki",
          details:
            "Puréed chickpeas, tahini, garlic, lemon and olive oil, served with pita bread",
          price: 6.99,
          quantity: 1,
        },
        {
          itemName: "Lg.Humus",
          details:
            "8oz. Cup & Puréed chickpeas, tahini, garlic lemon and olive oil, served with 2 pita brea",
          price: 6.99,
          quantity: 1,
        },
        {
          itemName: "Dolmadakia",
          details:
            "Vine leaves stuffed with seasoned rice, served with tzatziki and pita bread",
          price: 6.49,
          quantity: 1,
        },
      ],
    },
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case ActionTypes.USERNAME:
      return {
        ...state,
        userName: action.payload,
      };
    case ActionTypes.CURRENTUSER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case "changeDeliveryAddress":
      return {
        ...state,
        deliveryAddress: action.payload,
      };
    case "changeSelect":
      return {
        ...state,
        selectedData: action.payload,
      };
    case "changeTime":
      return {
        ...state,
        time: action.payload,
      };
    case "changeMethod":
      return {
        ...state,
        method: action.payload,
      };
    case "changeDay":
      return {
        ...state,
        day: action.payload,
      };
    case ActionTypes.MESSAGES:
      return {
        ...state,
        messages: action.payload,
      };
    default:
      return state;
  }
};
