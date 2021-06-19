export interface UnsplashInf {
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
    user: { name: string; location: string; profile_image: { medium: string } };
    width: number;
}
