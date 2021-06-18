import { createApi } from "unsplash-js";

const unsplashApi = createApi({
    accessKey: process.env.REACT_APP_ACCESS_KEY as string,
});

export default unsplashApi;
