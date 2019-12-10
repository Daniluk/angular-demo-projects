export const CONFIG = {
    NAME_PROJECT: 'demo',
    LOCAL_STORAGE: {
        CURRENT_USER: 'US01P2545-CurrentUser',
        SETTINGS: 'US01P2545-Settings',
    },

    TYPE: {
        TEXT_EDITOR: {
            NAME: 'text-editor',
            LINK: 'text-editor'
        },
        STOCK: {
            NAME: 'stock',
            LINK: 'stock',
            MENU: {
                LINK: 'menu',
                CATEGORY: {
                    LINK: 'category',
                    DINNER_CLASSICS: {
                        LINK: 'dinner-classics'
                    },
                    FEATURED: {
                        LINK: 'featured'
                    },
                    DESSERTS: {
                        LINK: 'desserts',
                    },
                    SLAMS: {
                        LINK: 'slams'
                    },
                    STEAKS_AND_SEAFOOD: {
                        LINK: 'steaks-and-seafood'
                    },
                    BURGERS: {
                        LINK: 'burgers'
                    }

                }
            },
            FOOD: {
                LINK: 'food',
            }

        },
        BOOKS: {
            NAME: 'books',
            LINK: 'books'
        },
        MOVIES: {
            NAME: 'movies',
            LINK: 'movies'
        },
        COURSES: {
            NAME: 'courses',
            LINK: 'courses',
            API: 'assets/data/courses'
        },
        JOKES: {
            NAME: 'jokes',
            LINK: 'jokes',
            API: 'https://api.icndb.com'
        }
    },
};
