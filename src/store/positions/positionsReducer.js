import { ADD_POSITIONS } from "./positionsActions";

export const positionsReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_POSITIONS: {
            return action.positions;
        }
        default:
            return state;
    }
};
