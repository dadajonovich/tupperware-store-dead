function Sort() {
  return (
    <select className="select-bordered select w-fit max-w-xs">
      <option disabled selected>
        Сортировать по?
      </option>
      <option>Популярные</option>
      <option>Недорогие</option>
    </select>
  );
}

export default Sort;
