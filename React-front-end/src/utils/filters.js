export default class Filter {
  static byName(records, name) {
    let filtredRecords = [...records];
    if (name) {
      const filtredByName = records.filter((food) => {
        const namePattern = new RegExp(name, "i");
        return namePattern.test(food.name);
      });

      filtredRecords = [...filtredByName];
    }
    return filtredRecords;
  }
}
