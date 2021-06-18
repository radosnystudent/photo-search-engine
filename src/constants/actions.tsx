type Actions =
    | { type: "SET_PHOTOS_REQUEST"; payload?: {} }
    | { type: "SET_PHOTOS_SUCCESS"; payload: {}; query?: string }
    | { type: "SET_PHOTOS_FAILURE"; payload: string }
    | { type: "SET_PHOTOS_RESET"; payload?: {} };

export default Actions;
