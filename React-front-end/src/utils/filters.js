export default class Filter {
  //
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
  //
  static byId(records, id) {
    let filtredRecords = [...records];
    if (id) {
      const filtredByName = records.filter((row) => {
        const namePattern = new RegExp(id, "i");
        return namePattern.test(row.id);
      });

      filtredRecords = [...filtredByName];
    }
    return filtredRecords;
  }
  //
  static byBranchId(records, branchId) {
    let filtredRecords = [...records];
    if (branchId) {
      const filtredByBranch = records.filter(
        (row) => row.branch.id == branchId
      );
      filtredRecords = [...filtredByBranch];
    }
    return filtredRecords;
  }
}
