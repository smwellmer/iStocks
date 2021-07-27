import React, {useState} from 'react'

const Stock = (props) => {

    const apiKey = 'b1ad58f0237948c502a6e32248a69f30'
    const symbol = props.match.params.symbol;
    const url = `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apiKey}`

    const [stockData, setStockData] = useState(null)

    const getStock = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setStockData(data[0]);
        console.log(data)
      };

      React.useEffect(() => {
        getStock();
      }, []);

        const loaded = () => {
            return (
            <div>
                <h1>{stockData.companyName}</h1>
                <h2>Company Symbol: {stockData.symbol}</h2>
                <h2>Current Stock Price: ${stockData.price}</h2>
            </div>
            )
        }

        const loading = () => {
            return <h1>Loading...</h1>
        }


    return stockData ? loaded() : loading()
}

export default Stock 