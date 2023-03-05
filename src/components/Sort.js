function Sort() {
  return (
    <select className="select-bordered select w-fit max-w-xs">
      <option value="" disabled selected>
        Сортировать
      </option>
      <option>Популярные</option>
      <option>Недорогие</option>
    </select>
  );
}

export default Sort;
