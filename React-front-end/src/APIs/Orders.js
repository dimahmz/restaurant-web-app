import axios from "../utils/axios";

const ServerError = {
  success: false,
  message: "a server error pleaser try again later",
};

export default class Order {
  static async getOneOrder(id) {
    try {
      const resp = await axios.get(`/order/${id}`);
      return resp.data;
    } catch (e) {
      return e.response.data;
    }
  }
  static async get({ status }) {
    try {
      const resp = await axios.get(`/orders?status=${status}`);
      return resp.data;
    } catch (e) {
      return e.response.data;
    }
  }

  static async getKitchenOrders() {
    try {
      const resp = await axios.get(`/orders/kitchen`);
      return resp.data;
    } catch (e) {
      return e.response.data;
    }
  }
}

// Point of sales orders
export class PosOrder extends Order {
  static async create(order) {
    const new_food_order = {
      ...order,
    };
    try {
      const resp = await axios.post("/pos_order", new_food_order);
      return resp.data;
    } catch (e) {
      return e.response.data;
    }
  }
  static async get() {
    try {
      const resp = await axios.get("/pos_orders");
      return resp.data;
    } catch (e) {
      return e.response.data;
    }
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
      // property_items
      // [{id : 1 , {quantity : 3}}]
      // property_items : $order.order_propery_items.map(()=> )
      note = $order.order_note_to_rider;
    try {
      const resp = await axios.post("/online_order", {
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

      return resp.data;
    } catch (e) {
      console.log(e.response.data);
      return e.response.data;
    }
  }

  // get order
  static async get() {
    try {
      const resp = await axios.get("/online_orders");
      return resp.data;
    } catch (e) {
      return e.response.data;
    }
  }
  // update
  static async update({ id, status }) {
    try {
      const resp = await axios.put("/online_order", {
        id,
        status,
      });
      return resp.data;
    } catch (e) {
      return e.response.data;
    }
  }
  // delete order
  static async delete(id) {
    try {
      const resp = await axios.delete("/online_order", {
        data: { id },
      });
      return resp.data;
    } catch (e) {
      if (e.response) return e.response.data;
      return ServerError;
    }
  }
}
