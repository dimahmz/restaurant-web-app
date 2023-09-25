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
    static async get() {
        try {
            const resp = await axios.get("/department_tags");
            return resp.data;
        } catch (e) {
            return e.response.data;
        }
    }
    static async create() {}
    static async update() {}
    static async delete() {}
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
    static async create() {}
    static async update() {}
    static async delete() {}
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
    static async create() {}
    static async update() {}
    static async delete() {}
}
