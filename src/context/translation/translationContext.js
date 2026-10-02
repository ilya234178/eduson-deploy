import React from "react";
export const TranslationContext = React.createContext();

export const translations = {
    en: {
        siteName: 'MovieRating',
        menu: {
            main: 'Main',
            about: 'About us',
            movieList: 'Movie List',
            reviews: 'Reviews'
        }
    },
    ru: {
        siteName: 'КиноРейтинг',
        menu: {
            main: 'Главная',
            about: 'О нас',
            movieList: 'Список фильмов',
            reviews: 'Отзывы'
        }
    }
}