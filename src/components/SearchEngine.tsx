import React from "react";
import { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { useDispatch } from "react-redux";

import { getPhotos } from "../actions/photosActions";

interface Props {
    searched?: string;
}

const SearchEngine: React.FC<Props> = ({ searched = "" }) => {
    const [query, setQuery] = useState<string>("");
    const location = useLocation();
    const history = useHistory();
    const dispatch = useDispatch();

    if (searched && query.length === 0) {
        setQuery(searched);
    }

    const submitQuery = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(getPhotos(query));
        if (location.pathname !== "/photos") {
            history.push("/photos");
        }
    };

    return (
        <div className="search-engine-container">
            <form onSubmit={submitQuery} className="search-engine-form">
                <div className="search-engine-wrapper">
                    <label htmlFor="query" className="search-engine-label">
                        {" "}
                        <i className="fas fa-search"></i>
                    </label>
                    <input
                        className="search-engine-input"
                        placeholder="Search free images..."
                        type="text"
                        name="query"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchEngine;
