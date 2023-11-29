import makeRequest from ".";

export default class Order {
  static async getOneOrder(id) {
    const response = await makeRequest(`/order/${id}`, "get", null);
    return response;
  }

  static async get({ status }) {
    const response = await makeRequest(`/orders?status=${status}`, "get", null);
    return response;
  }

  static async getKitchenOrders() {
    const response = await makeRequest(`/orders/kitchen`, "get", null);
    return response;
  }

  static async changeStatus(id, status) {
    const response = await makeRequest(`/order/${id}`, "put", { status });
    return response;
  }
  static async delete(id) {
    const response = await makeRequest(`/order/${id}`, "delete", null);
    return response;
  }
}

// Point of sales orders
export class PosOrder extends Order {
  static async create(order) {
    const new_food_order = {
      ...order,
    };
    const response = await makeRequest(`/pos_order`, "post", new_food_order);
    return response;
  }
  static async get() {
    const response = await makeRequest(`/pos_orders`, "get", null);
    return response;
  }
}

// online orders
export class OnlineOrder extends Order {
  static async create($order) {
    const branch_id = $order.order_branch_id,
      variation_id = $order.order_variation?.id || null,
      food_id = $order.id,
      costumer_id = 1,
      quantity = $order.order_quantity,
      delivery_address = $order.order_delivery_address,
      subtotal = $order.order_subtotal,
      total_bill = $order.order_total_bill,
      note = $order.order_note_to_rider;

    const response = await makeRequest("/online_order", `post`, "", {
      branch_id,
      variation_id,
      food_id,
      costumer_id,
      quantity,
      delivery_address,
      subtotal,
      total_bill,
      note,
    });
    return response;
  }

  // get order
  static async get() {
    const response = await makeRequest(`/online_orders`, "get", null);
    return response;
  }
  // update
  static async update({ id, status }) {
    const response = await makeRequest(`/online_order`, "put", {
      id,
      status,
    });
    return response;
  }
}
