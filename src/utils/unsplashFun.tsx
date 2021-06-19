import React from "react";
import { createApi } from "unsplash-js";

const unsplashApi = createApi({
    accessKey: process.env.REACT_APP_ACCESS_KEY as string,
});

const closeActiveImage = (imageRef: React.RefObject<HTMLDivElement>) => {
    if (imageRef.current) {
        imageRef.current.style.visibility = "hidden";
        const childh2 = document.querySelector(".active-img-title");
        if (childh2 !== null) {
            childh2.parentNode!.removeChild(childh2);
        }

        const childAuthorImg = document.querySelector(".active-img-profile");
        if (childAuthorImg !== null) {
            childAuthorImg.parentNode!.removeChild(childAuthorImg);
        }

        const authorDiv = document.querySelector(".active-img-author");
        if (authorDiv !== null) {
            authorDiv.parentNode!.removeChild(authorDiv);
        }

        const childImg = document.querySelector(".active-img");
        if (childImg !== null) {
            childImg.parentNode!.removeChild(childImg);
        }

        const childP = document.querySelector(".active-img-location");
        if (childP !== null) {
            childP.parentNode!.removeChild(childP);
        }
    }
};

const imageActive = (
    alt: string,
    full: string,
    imageRef: React.RefObject<HTMLDivElement>,
    user: { name: string; location: string; profile_image: { medium: string } }
) => {
    if (imageRef.current) {
        imageRef.current.style.visibility = "visible";
        const activeImgCard = document.querySelector(".active-img-card")!;

        const newActiveCardAuthorDiv = document.createElement("div");
        newActiveCardAuthorDiv.classList.add("active-img-author");

        const newActiveImgProfileImg = document.createElement("img");
        newActiveImgProfileImg.src = user.profile_image.medium;
        newActiveImgProfileImg.alt = user.name;
        newActiveImgProfileImg.classList.add("active-img-profile");

        const newActiveImgCardTitle = document.createElement("h2");
        newActiveImgCardTitle.classList.add("active-img-title");
        newActiveImgCardTitle.innerText = `Author: ${user.name}`;

        const newImage = document.createElement("img");
        newImage.src = full;
        newImage.alt = alt;
        newImage.classList.add("active-img");

        newActiveCardAuthorDiv.appendChild(newActiveImgProfileImg);
        newActiveCardAuthorDiv.appendChild(newActiveImgCardTitle);
        activeImgCard.appendChild(newActiveCardAuthorDiv);

        activeImgCard.appendChild(newImage);
        if (user.location) {
            const newActiveImgLocation = document.createElement("p");
            newActiveImgLocation.classList.add("active-img-location");
            newActiveImgLocation.innerText = `Location: ${user.location}`;
            activeImgCard.appendChild(newActiveImgLocation);
        }
    }
};

export { imageActive, closeActiveImage };

export default unsplashApi;
