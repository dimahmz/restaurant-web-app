import makeRequest from ".";

export class Food {
  static async get() {
    const response = await makeRequest("/foods", "get", null);
    return response;
  }

  static async create(food) {
    const { name, image, price, variations_IDs, food_group_id, is_special } =
      food;
    const form = new FormData();

    form.append("name", name);
    form.append("image", image);
    form.append("price", price);
    form.append("variations_IDs", JSON.stringify(variations_IDs));
    form.append("food_group_id", food_group_id);
    form.append("is_special", is_special);

    console.log(form);

    const response = await makeRequest("/food", "post", form);
    return response;
  }
  static async update({ id, item }) {
    const response = await makeRequest(`/food/${id}`, "put", { ...item });
    return response;
  }

  static async updateImg({ image, id }) {
    const form = new FormData();
    form.append("image", image);
    const resp = await makeRequest(`/food/img/${id}`, "post", form, true);
    return resp;
  }
  static async delete(id) {
    const resp = await makeRequest(`/food/${id}`, "delete", null);
    return resp;
  }

  static async addVariations({ id, variations_IDs }) {
    const resp = await makeRequest(`/food/variation/${id}`, "post", {
      variations_IDs,
    });
    return resp;
  }
  static async editVariations({ food_variations }) {
    const resp = await makeRequest(`/food/variations`, "put", {
      food_variations,
    });
    return resp;
  }
}

export class Group {
  static async get() {
    const response = await makeRequest(`/groups`, "get", null);
    return response;
  }
  static async getGroupFood() {
    const response = await makeRequest(`/groups/foods`, "get", null);
    return response;
  }

  static async create(name) {
    const response = await makeRequest(`/groups`, "post", { name });
    return response;
  }

  static async delete(id) {
    const response = await makeRequest(`/groups/${id}`, "delete", null);
    return response;
  }

  static async update({ id, name }) {
    const response = await makeRequest(`/groups/${id}`, "put", { name });
    return response;
  }
}

export class Variation {
  static async get() {
    const response = await makeRequest(`/variations`, "get", null);
    return response;
  }

  static async create(name) {
    const response = await makeRequest(`/variations`, "post", { name });
    return response;
  }

  static async update({ id, name }) {
    const response = await makeRequest(`/variations/${id}`, "put", { name });
    return response;
  }

  static async delete(id) {
    const response = await makeRequest(`/variations/${id}`, "delete", null);
    return response;
  }
}
