import axios from "axios";

export const getIpStaticList = async () => {
    try {
        return await axios.get(`http://network-api:8080/api/ip_static_list`);
    } catch (error) {
        return error.response;
    }
};

export const getIpDhcpList = async () => {
    try {
        return await axios.get(`http://network-api:8080/api/ip_dhcp_list`);
    } catch (error) {
        return error.response;
    }
};