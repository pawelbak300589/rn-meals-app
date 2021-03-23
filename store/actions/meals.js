export const TOGGLE_FAVOURITES = 'TOGGLE_FAVOURITES';

export const toggleFavourite = (id) => {
  return { type: TOGGLE_FAVOURITES, mealId: id };
};