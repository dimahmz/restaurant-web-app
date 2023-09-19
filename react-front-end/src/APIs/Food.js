import axios from "../utils/axios";

export class Food {
    static async get() {
        try {
            const resp = await axios.get("/foods");
            return resp.data;
        } catch (e) {
            return e.response.data;
        }
    }
    static async create(food) {
        const {
            name,
            image,
            price,
            properties_IDs,
            food_group_id,
            is_special,
        } = food;
        const form = new FormData();

        form.append("name", name);
        form.append("image", image);
        form.append("price", price);
        form.append("properties_IDs", JSON.stringify(properties_IDs));
        form.append("food_group_id", food_group_id);
        form.append("is_special", is_special);
        try {
            const resp = await axios.post("/food", form);
            return resp.data;
        } catch (e) {
            return e.response.data;
        }
    }
    static async update() {}
    static async delete() {}
}

export class Property {
    static async get() {
        try {
            const resp = await axios.get("/food_properties");
            return resp.data;
        } catch (e) {
            return e.response.data;
        }
    }
    static async create() {}
    static async update() {}
    static async delete() {}
}

export class Group {
    static async get() {
        try {
            const resp = await axios.get("/food_groups");
            return resp.data;
        } catch (e) {
            return e.response.data;
        }
    }
    static async create() {}
    static async update() {}
    static async delete() {}
}

export class Variation {
    static async get() {
        try {
            const resp = await axios.get("/food_variations");
            return resp.data;
        } catch (e) {
            return e.response.data;
        }
    }
    static async create() {}
    static async update() {}
    static async delete() {}
}
