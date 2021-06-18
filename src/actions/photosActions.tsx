import { Dispatch } from "redux";

import unsplashApi from "../utils/unsplashFun";

import Actions from "../constants/actions";

const getPhotos =
    (query: string) => (dispatch: Dispatch<Actions | Actions>) => {
        dispatch({
            type: "SET_PHOTOS_REQUEST",
        });
        unsplashApi.search
            .getPhotos({
                query: query,
                page: 1,
                perPage: 20,
                orderBy: "relevant",
            })
            .then((result) => {
                if (result.errors) {
                    dispatch({
                        type: "SET_PHOTOS_REQUEST",
                        payload: result.errors,
                    });
                } else {
                    console.log(result);
                    dispatch({
                        type: "SET_PHOTOS_SUCCESS",
                        payload: result.response.results,
                        query: query,
                    });
                }
            });
    };

const resetPhotos = () => (dispatch: Dispatch<Actions | Actions>) => {
    dispatch({
        type: "SET_PHOTOS_RESET",
    });
};

export { getPhotos, resetPhotos };
