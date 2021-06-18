import React, { useRef } from "react";
import { useSelector } from "react-redux";

import { Store } from "../reducers/photoReducer";
import { RootState } from "../store";
import SearchEngine from "../components/SearchEngine";
import Loading from "../components/Loading";
import Message from "../components/Message";
import Card from "../components/Card";

interface UnsplashInf {
    alt_description: string;
    blur_hash: string;
    categories: [];
    color: string;
    created_at: string;
    current_user_collections: [];
    description: string;
    height: number;
    id: string;
    liked_by_user: boolean;
    likes: number;
    links: {};
    promoted_at: string;
    sponsorship: null;
    tags: [];
    updated_at: string;
    urls: {
        raw: string;
        full: string;
        regular: string;
        small: string;
        thumb: string;
    };
    user: {};
    width: number;
}

const PicturePage: React.FC = () => {
    const imageRef = useRef<HTMLDivElement>(null);

    const imageActive = (alt: string, full: string) => {
        const closeActiveImage = () => {
            if (imageRef.current) {
                imageRef.current.style.visibility = "hidden";
                const child = document.querySelector(".active-img");
                // imageRef.current.removeChild(child);
                if (child !== null) {
                    child.parentNode!.removeChild(child);
                }
            }
        };

        if (imageRef.current) {
            imageRef.current.style.visibility = "visible";
            const activeImgCard = document.querySelector(".active-img-card")!;
            const newImage = document.createElement("img");
            newImage.src = full;
            newImage.alt = alt;
            newImage.classList.add("active-img");
            newImage.onclick = closeActiveImage;
            activeImgCard.appendChild(newImage);
        }
    };

    const { loading, photos, query, error } = useSelector<RootState, Store>(
        (state) => state.photo
    );

    return (
        <div className="picture-page">
            <div ref={imageRef} className="active-img-container">
                <div className="active-img-card"></div>
            </div>
            <div className="picture-page-search">
                {query ? <SearchEngine searched={query} /> : <SearchEngine />}
            </div>
            {loading ? (
                <Loading size="100px" />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <div>
                    <h2 className="page-title">{query}</h2>
                    <div className="photos-container">
                        {photos instanceof Array &&
                            photos.map((photo: UnsplashInf, idx: number) => {
                                return (
                                    <Card
                                        imageActive={imageActive}
                                        key={photo.id}
                                        src={photo.urls.regular}
                                        alt={photo.alt_description}
                                        tags={photo.tags}
                                        full={photo.urls.raw}
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
