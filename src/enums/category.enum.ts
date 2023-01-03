export enum Categories {
  GROCERIES = "Groceries",
  FOOD = "Food",
  CLOTHS = "Cloths",
  CATS = "Cats",
  HOUSE = "House",
}
export const CategoriesArray = Object.values(Categories).slice(Object.values(Categories).length / 2 - 1);
