import axios from 'axios';
import { SiCoinmarketcap } from 'react-icons/si';
import { MdEventAvailable, MdPriceChange } from 'react-icons/md';
import { FaPercent } from 'react-icons/fa';
import { RiStockFill } from 'react-icons/ri';

export default class DetailModel {
  constructor(coin) {
    this.coin = coin;

  
    this.infoFields = [
      {
        icon: <SiCoinmarketcap />,
        label: 'Market Volume',
        value: coin?.detail.marketCapUsd,
      },
      {
        icon: <MdEventAvailable />,
        label: 'Supply',
        value: coin?.detail.maxSupply,
      },
      {
        icon: <MdPriceChange />,
        label: 'Price',
        value: coin?.detail.priceUsd,
      },
      {
        icon: <FaPercent />,
        label: '24s Variation (%)',
        value: coin?.detail.changePercent24Hr,
      },
      {
        icon: <RiStockFill />,
        label: '24 Volume',
        value: coin?.detail.volumeUsd24Hr,
      },
    ];

    
    this.chartData = {
      labels: coin?.history.map((i) =>
        new Date(i.date).toLocaleDateString()
      ),
      datasets: [
        {
          id: 1,
          label: 'Price',
         
          data: coin?.history.map((i) => i.priceUsd),
        },
      ],
    };
  }

 
  static async getCoin(id) {
  
    const detailRes = await axios.get(
      `https://api.coincap.io/v2/assets/${id}`
    );


    const historyRes = await axios.get(
      `https://api.coincap.io/v2/assets/${id}/history?interval=d1`
    );

   
    return {
      detail: detailRes.data.data,
      history: historyRes.data.data,
    };
  }
}