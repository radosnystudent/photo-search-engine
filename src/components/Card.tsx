import React from "react";

interface Props {
    src: string;
    alt: string;
    tags: [];
    imageActive: (src: string, alt: string) => void;
    full: string;
}

interface Tags {
    source: {};
    title: string;
    type: string;
}

const Card: React.FC<Props> = ({ src, alt, tags, imageActive, full }) => {
    return (
        <div className="card-item">
            <img onClick={() => imageActive(alt, full)} src={src} alt={alt} />
            <div className="card-tags-container">
                Tags:{" "}
                {tags &&
                    tags.map((tag: Tags, idx) => {
                        return (
                            <div className="card-tags" key={`${idx}_${alt}`}>
                                <p>{tag.title}</p>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default Card;
