import "intl";
import "intl/locale-data/jsonp/es-CO";

export const toColCurrency = (value: number): string => {
  return `$ ${value}`;
};
