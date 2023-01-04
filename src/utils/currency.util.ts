import "intl";
import "intl/locale-data/jsonp/es-CO";

const ColFormat = Intl.NumberFormat("es-CO");

export const toColCurrency = (value: number): string => {
  return `$ ${ColFormat.format(value)}`;
};
