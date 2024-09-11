import axios from "axios";

const commonConfig = {
    headers: {
        "Content-Type": "applocation/json",
        Accept: "applocation/json",
    },
};

export default (baseURL) => {
    return axios.create({
        baseURL,
        ...commonConfig,
    });
};