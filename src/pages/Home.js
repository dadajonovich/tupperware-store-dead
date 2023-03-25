import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Card from '../components/CardBlock/Card';
import Skeleton from '../components/CardBlock/Skeleton';
import { useEffect, useState } from 'react';

function Home() {
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
    <>
      <div className="flex flex-col-reverse items-center justify-between gap-5 sm:flex-row">
        <Categories />
        <Sort />
      </div>
      <div className="grid justify-items-center md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : articles.map((item, index) => <Card key={index} {...item} />)}
      </div>
    </>
  );
}

export default Home;
