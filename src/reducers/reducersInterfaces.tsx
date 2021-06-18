interface PhotosReducer {
    loading: boolean;
    photos?: {};
    error?: string;
    query?: string;
}

type State = PhotosReducer[];

export default State;
