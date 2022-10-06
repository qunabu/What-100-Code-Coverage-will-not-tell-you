import fetch from "node-fetch";

export type Currency = {
  code: CurrencyCode;
  alphaCode: CurrencyCode;
  numericCode: string;
  name: string;
  rate: number;
  date: string;
  inverseRate: number;
};
type CurrencyCode = "eur" | "gbp" | "pln" | "usd";

type CurrencyList = Record<CurrencyCode, Currency>;

const fetchCurrencies = async (): Promise<CurrencyList> => {
  const req = await fetch("http://www.floatrates.com/daily/usd.json");
  const data = await req.json();
  return data as CurrencyList;
};
export const downloadAndConvert = async (
  from: CurrencyCode,
  to: CurrencyCode,
  amount: number
) => {
  const list = await fetchCurrencies();
  return convert(list, from, to, amount);
};

export const convert = (
  list: CurrencyList,
  from: CurrencyCode,
  to: CurrencyCode,
  amount: number
): number => {
  const fromCurrInverseRate: number =
    from === "usd" ? 1 : list[from].inverseRate; // note ternary here and CC
  const toCurrRate: number = to === "usd" ? 1 : list[to].rate; // note ternary here and CC

  return fromCurrInverseRate * toCurrRate * amount;
};
