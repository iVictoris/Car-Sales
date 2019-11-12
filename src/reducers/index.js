import { ADD_FEATURE, DELETE_FEATURE } from "../actions";

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

const filter = (list, id) => {
  const [item] = list.filter(({ id: itemID }) => itemID === id);
  const others = list.filter(({ id: itemID }) => itemID !== id);
  return [item, others];
};

const addFeature = (list, item) => [...list, item];

export const reducer = (state = initialState, action) => {
  const { car: carObj } = state;
  switch (action.type) {
    case ADD_FEATURE: {
      const { id: payloadID } = action.payload;
      const { additionalFeatures: featureToFilter } = state;
      const [feature, additionalFeatures] = filter(featureToFilter, payloadID);

      const features = addFeature(carObj.features, feature);
      const car = { ...carObj, features };
      const additionalPrice = state.additionalPrice + feature.price;

      const newState = { ...state, car, additionalFeatures, additionalPrice };
      return newState;
    }
    case DELETE_FEATURE: {
      const { id: payloadID } = action.payload;
      const { features: featuresToFilter } = carObj;
      const [feature, carFeatures] = filter(featuresToFilter, payloadID);


      const car = { ...carObj, features: carFeatures };
      const additionalFeatures = addFeature(state.additionalFeatures, feature);
      const additionalPrice = state.additionalPrice - feature.price;

      const newState = { ...state, car, additionalFeatures, additionalPrice };
      return newState;
    }
    default:
      console.log("We here");
      return state;
  }
};
