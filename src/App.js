import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import Card from './components/Card';
import articles from './assets/articles.json';

function App() {
  return (
    <div className="App container mx-auto px-20">
      <Header />
      <div className="flex items-center justify-between">
        <Categories />
        <Sort />
      </div>
      <div className="flex flex-wrap justify-center">
        {articles.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default App;
