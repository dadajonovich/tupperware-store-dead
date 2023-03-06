import { useState } from 'react';

function Sort() {
  const [selected, setSelected] = useState('');

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  return (
    <select
      value={selected}
      onChange={handleChange}
      className="select-bordered select w-fit max-w-xs"
    >
      <option value="" disabled>
        Сортировать
      </option>
      <option value="Популярные">Популярные</option>
      <option value="Недорогие">Недорогие</option>
    </select>
  );
}

export default Sort;
