import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
  const [data, setData] = useState({}); // ! empty object is passed as default value to not let the program crash in case nothing is returned

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
    )
      .then(res => res.json())
      .then(res => setData(res[currency]));
  }, [currency]);

  console.log(data);
  return data;
}

export default useCurrencyInfo;
