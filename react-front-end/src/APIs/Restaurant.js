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
    static async create() {}
    static async update() {}
    static async delete() {}
}

export class DeptTag {
    static async getAll() {}
    static async create() {}
    static async update() {}
    static async delete() {}
}

export class Table {
    static async get() {}
    static async create() {}
    static async update() {}
    static async delete() {}
}

export class PaymentType {
    static async getAll() {}
    static async create() {}
    static async update() {}
    static async delete() {}
}
