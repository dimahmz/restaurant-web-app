import axios from "../utils/axios";

export class Branch {
  static async get() {
    try {
      const resp = await axios.get("/branches");
      return resp.data;
    } catch (e) {
      return e.response.data;
    }
  }
  static async create({ name, phone, delivery_charge, address }) {
    try {
      const resp = await axios.post("/branches", {
        name,
        phone,
        delivery_charge,
        address,
      });
      return resp.data;
    } catch (e) {
      return e.response.data;
    }
  }
  static async update({ name, phone, delivery_charge, address, id }) {
    try {
      const resp = await axios.put(`/branches/${id}`, {
        name,
        phone,
        delivery_charge,
        address,
      });
      return resp.data;
    } catch (e) {
      return e.response.data;
    }
  }
  static async delete(id) {
    try {
      const resp = await axios.delete(`/branches/${id}`);
      return resp.data;
    } catch (e) {
      return e.response.data;
    }
  }
}
export class DeptTag {
  static async get() {
    try {
      const resp = await axios.get("/department_tags");
      return resp.data;
    } catch (e) {
      return e.response.data;
    }
  }
  static async create({ name, commission }) {
    try {
      const resp = await axios.post("/department_tags", { name, commission });
      return resp.data;
    } catch (e) {
      return e.response.data;
    }
  }
  static async update({ id, name, commission }) {
    try {
      const resp = await axios.put(`/department_tags/${id}`, {
        name,
        commission,
      });
      return resp.data;
    } catch (e) {
      return e.response.data;
    }
  }
  static async delete(id) {
    try {
      const resp = await axios.delete(`/department_tags/${id}`);
      return resp.data;
    } catch (e) {
      return e.response.data;
    }
  }
}

export class Table {
  static async get() {
    try {
      const resp = await axios.get("/tables/branch");
      return resp.data;
    } catch (e) {
      return e.response.data;
    }
  }
  static async create({ name, branch_id, capacity }) {
    try {
      const resp = await axios.post("/tables", { name, branch_id, capacity });
      return resp.data;
    } catch (e) {
      return e.response.data;
    }
  }

  static async update({ id, name, capacity, branch_id }) {
    try {
      const resp = await axios.put(`/tables/${id}`, {
        id,
        name,
        capacity,
        branch_id,
      });
      return resp.data;
    } catch (e) {
      return e.response.data;
    }
  }
  static async delete(id) {
    try {
      const resp = await axios.delete(`/tables/${id}`);
      return resp.data;
    } catch (e) {
      return e.response.data;
    }
  }
}

export class PaymentType {
  static async get() {
    try {
      const resp = await axios.get("/payment_types");
      return resp.data;
    } catch (e) {
      return e.response.data;
    }
  }
  static async create({ name, unique_key }) {
    try {
      const resp = await axios.post("/payment_types", { name, unique_key });
      return resp.data;
    } catch (e) {
      return e.response.data;
    }
  }
  static async update({ id, name }) {
    try {
      const resp = await axios.put(`/payment_types/${id}`, { name });
      return resp.data;
    } catch (e) {
      console.error(e);
      return e.response.data;
    }
  }
  static async delete(id) {
    try {
      const resp = await axios.delete(`/payment_types/${id}`);
      return resp.data;
    } catch (e) {
      return e.response.data;
    }
  }
}
