import Actions from "../constants/actions";
import { StateType } from "typesafe-actions";

interface PhotosReducer {
    loading: boolean;
    photos?: [];
    error?: string;
    query?: string;
}

type State = PhotosReducer[];

const photoReducer = (state: State, action: Actions) => {
    switch (action.type) {
        case "SET_PHOTOS_REQUEST":
            return {
                loading: true,
            };
        case "SET_PHOTOS_SUCCESS":
            return {
                loading: false,
                photos: action.payload,
                query: action.query,
            };
        case "SET_PHOTOS_FAILURE":
            return {
                loading: false,
                error: action.payload,
            };
        case "SET_PHOTOS_RESET":
            return {
                loading: false,
                error: "",
                photos: {},
                query: "",
            };
        default:
            return {
                ...state,
            };
    }
};

export type Store = StateType<typeof photoReducer>;

export default photoReducer;
