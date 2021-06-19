import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { Store } from "../reducers/photoReducer";
import { RootState } from "../store";
import SearchEngine from "../components/SearchEngine";
import Loading from "../components/Loading";
import Message from "../components/Message";
import Card from "../components/Card";
import { imageActive, closeActiveImage } from "../utils/unsplashFun";
import { resetPhotos } from "../actions/photosActions";
import { UnsplashInf } from "../interfaces/picturePageInf";

const PicturePage: React.FC = () => {
    const { loading, photos, query, error } = useSelector<RootState, Store>(
        (state) => state.photo
    );

    const history = useHistory();
    const dispatch = useDispatch();
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (photos) {
            if (Object.keys(photos).length === 0 && loading === false) {
                history.push("/");
            }
        }
        // eslint-disable-next-line
    }, [photos, loading]);

    return (
        <div className="picture-page">
            <div
                ref={imageRef}
                className="active-img-container"
                onClick={() => closeActiveImage(imageRef)}
            >
                <div className="active-img-card"></div>
            </div>
            <div className="picture-page-search">
                <i
                    className="fas fa-home"
                    onClick={() => {
                        dispatch(resetPhotos());
                        history.push("/");
                    }}
                ></i>
                {query ? <SearchEngine searched={query} /> : <SearchEngine />}
            </div>
            {loading ? (
                <Loading size="100px" />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <div>
                    <h2 className="page-title">
                        <span className="page-title-lowercase">
                            Searched phrase:
                        </span>{" "}
                        {query}
                    </h2>
                    <div className="photos-container">
                        {photos instanceof Array &&
                            photos.map((photo: UnsplashInf, idx: number) => {
                                return (
                                    <Card
                                        imageActive={() =>
                                            imageActive(
                                                photo.alt_description,
                                                photo.urls.small,
                                                imageRef,
                                                photo.user
                                            )
                                        }
                                        key={photo.id}
                                        src={photo.urls.regular}
                                        alt={photo.alt_description}
                                        tags={photo.tags}
                                        full={photo.urls.raw}
                                        user={photo.user}
                                    />
                                );
                            })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PicturePage;
