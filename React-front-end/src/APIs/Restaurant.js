import makeRequest from ".";

export class Branch {
  static async get() {
    const response = await makeRequest(`/branches`, "get", null);
    return response;
  }
  static async create({ name, phone, delivery_charge, address }) {
    const response = await makeRequest(`/branches`, "post", {
      name,
      phone,
      delivery_charge,
      address,
    });
    return response;
  }
  static async update({ name, phone, delivery_charge, address, id }) {
    const response = await makeRequest(`/branches/${id}`, "put", {
      name,
      phone,
      delivery_charge,
      address,
    });
    return response;
  }
  static async delete(id) {
    const response = await makeRequest(`/branches/${id}`, "delete", null);
    return response;
  }
}
export class DeptTag {
  static async get() {
    const response = await makeRequest(`/department_tags`, "get", null);
    return response;
  }
  static async create({ name, commission }) {
    const response = await makeRequest(`/department_tags`, "post", {
      name,
      commission,
    });
    return response;
  }
  static async update({ id, name, commission }) {
    const response = await makeRequest(`/department_tags/${id}`, "put", {
      name,
      commission,
    });
    return response;
  }
  static async delete(id) {
    const response = await makeRequest(
      `/department_tags/${id}`,
      "delete",
      null
    );
    return response;
  }
}

export class Table {
  static async get() {
    const response = await makeRequest(`/tables/branch`, "get", null);
    return response;
  }
  static async create({ name, branch_id, capacity }) {
    const response = await makeRequest("/tables", "post", {
      name,
      branch_id,
      capacity,
    });
    return response;
  }

  static async update({ id, name, capacity, branch_id }) {
    const response = await makeRequest(`/tables/${id}`, "put", {
      id,
      name,
      capacity,
      branch_id,
    });
    return response;
  }
  static async delete(id) {
    const response = await makeRequest(`/tables/${id}`, "delete", null);
    return response;
  }
}

export class PaymentType {
  static async get() {
    const response = await makeRequest(`/payment_types`, "get", null);
    return response;
  }
  static async create({ name, unique_key }) {
    const response = await makeRequest(`/payment_types`, "post", {
      name,
      unique_key,
    });
    return response;
  }
  static async update({ id, name }) {
    const response = await makeRequest(`/payment_types/${id}`, "put", { name });
    return response;
  }
  static async delete(id) {
    const response = await makeRequest(`/payment_types/${id}`, "delete", null);
    return response;
  }
}
