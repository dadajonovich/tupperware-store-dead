import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import Card from './components/card_block/Card';
import Skeleton from './components/card_block/Skeleton';
import { useEffect, useState } from 'react';

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://640df143b07afc3b0dba8dc9.mockapi.io/articles')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setArticles(arr);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="App container mx-auto px-20">
      <Header />
      <div className="flex items-center justify-between">
        <Categories />
        <Sort />
      </div>
      <div className="flex flex-wrap justify-center">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : articles.map((item, index) => <Card key={index} {...item} />)}
      </div>
    </div>
  );
}

export default App;
