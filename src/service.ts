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
  const fromCurr: Currency = list[from];
  const toCurr: Currency = list[to];

  console.log(`from 1 ${from} =  ${fromCurr.inverseRate} USD`);

  // convert to dolars

  return fromCurr.inverseRate * toCurr.rate * amount;
};

export const convert = (
  list: CurrencyList,
  from: CurrencyCode,
  to: CurrencyCode,
  amount: number
): number => {
  return 1;
};