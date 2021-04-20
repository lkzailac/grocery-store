import produceData from "../mockData/produce.json";

const POPULATE = "produce/POPULATE";

//action creator, returns action object
export const populateProduce = () => {
  //   console.log("action called");
  return {
    type: POPULATE,
    produce: produceData,
  };
};

export default function produceReducer(state = {}, action) {
  //   console.log("reducer");
  switch (action.type) {
    case POPULATE:
      const newState = {};
      action.produce.forEach((produce) => {
        newState[produce.id] = produce;
      });
      return newState;
    default:
      return state;
  }
}
