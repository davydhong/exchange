import { useMemo, useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import CurrencyTable from './CurrencyTable';
import { ExchangeRate } from './exchangeRates';
import CurrencyForm from './CurrencyForm';

const queryClient = new QueryClient()

const QueryComponent: React.FC = () => {
  const { isLoading, error, data } = useQuery('exchangeRates', async () => {
    const res = await fetch('https://cors-anywhere.herokuapp.com/https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt')
    return res.text();
  }
  );

  const exchangeRates: ExchangeRate[] = useMemo(() => {
    if (!data) return [];

    const lines = data.split('\n').slice(2);

    return lines.map((line: string) => {
      const fields = line.split('|');
      if (fields.length < 5) return null;
      const [country, currency, amount, code, rate] = fields;
      return new ExchangeRate(country, currency, parseFloat(amount), code, parseFloat(rate));
    }).filter((exchangeRate: ExchangeRate) => exchangeRate !== null);
  }, [data]);

  const [amount, setAmount] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState<ExchangeRate | null>(null);




  if (isLoading) return <>Loading...</>

  if (error) return <>{'An error has occurred: ' + error}</>

  const handleConvert = (amount: number, selectedCurrency: ExchangeRate) => {
    const convertedAmount = (amount / selectedCurrency.rate).toFixed(2);
    alert(`${amount} CZK is equal to ${convertedAmount} ${selectedCurrency.code}`);
  }


  return (
    <>
      <CurrencyForm exchangeRates={exchangeRates} onConvert={handleConvert} />
      <CurrencyTable currencyData={exchangeRates} />
    </>
  )

}

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <QueryComponent />
    </QueryClientProvider>
  );
};

export default App;
