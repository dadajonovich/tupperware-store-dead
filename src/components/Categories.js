/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';

function Categories() {
  const [active, setActive] = useState(0);

  const categories = ['Все', 'Бутылки', 'Посуда', 'Разное'];

  return (
    <div className="tabs">
      {categories.map((item, index) => (
        <a
          key={index}
          onClick={() => setActive(index)}
          className={
            active === index
              ? 'tab-bordered tab tab-active'
              : 'tab-bordered tab'
          }
        >
          {item}
        </a>
      ))}
    </div>
  );
}

export default Categories;
