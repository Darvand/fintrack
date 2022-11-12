const ColFormatter = Intl.NumberFormat("es-CO");

export const toColCurrency = (value: number): string => `$ ${ColFormatter.format(value)}`;
