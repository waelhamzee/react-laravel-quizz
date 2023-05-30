import axios from "axios";
import Constants from "./Constants";
import Utilities from "./Utilities";

class RequestEngine {
    constructor(ContentType = "application/json") {
        let token = sessionStorage.getItem("token");
        this.apiEngine = axios.create({
            baseURL: Constants.serverlink,
            timeout: Constants.timeout,
            headers: {
                "Content-Type": ContentType,
                Authorization: `Bearer ${token}`,
            },
        });
        // this.debugit();
    }

    debugit() {
        this.apiEngine.interceptors.request.use((request) => {
            console.log("Starting Request", request);
            return request;
        });

        this.apiEngine.interceptors.response.use((response) => {
            console.log("Response:", response);
            return response;
        });
    }

    async getData(path) {
        return await this.apiEngine.get(path);
    }

    async postData(path, filtered = {}) {
        try {
            return await this.apiEngine.post(path, filtered);
        } catch (error) {
            console.log(error);
            Utilities.showErrorMessage(error.response.data.message);
            return false;
        }
    }

    async patchData(path, filtered = {}) {
        return await this.apiEngine.patch(path, filtered);
    }

    async deleteData(path, filtered = {}) {
        return await this.apiEngine.delete(path, filtered);
    }
}

export default RequestEngine;
