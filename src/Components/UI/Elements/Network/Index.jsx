import { useState, useEffect } from "react";
import { getIpStaticList,getIpDhcpList } from "../../../../services/network/API/network.js";
import Table from "./Table/Index.jsx";

function Index() {
    const [ipStaticList, setIpStaticList] = useState(null);
    const [ipDhcpList, setIpDhcpList] = useState(null);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        const timer = setInterval(() => {

            const ListingIpStatic = async () => {
                try {
                    const response = await getIpStaticList();
                    if (response.status !== 200) {
                        setMessage("We can't retrieve the ip static list.");
                    }
                    if (response.status === 200) {
                        setIpStaticList(response.data);
                    }
                } catch (error) {
                    setMessage("We have a problem to connect with the DB, please contact your admin.");
                }
            };
            
            const ListingIpDhcp = async () => {
                try {
                    const response = await getIpDhcpList();
                    if (response.status !== 200) {
                        setMessage("We can't retrieve the ip static list.");
                    }
                    if (response.status === 200) {
                        setIpDhcpList(response.data);
                    }
                } catch (error) {
                    setMessage("We have a problem to connect with the DB, please contact your admin.");
                }
            };

            ListingIpStatic();
            ListingIpDhcp();
            
        }, 1000);

        return () => {clearInterval(timer)}

    }, []);

    return (
        <section className="network">
            <Table ipList={ipDhcpList} titleA={'DHCP list online'} />
            <Table ipList={ipStaticList} titleA={'Static host list'} titleB={"Status"} date={new Date().toLocaleString()}/>
        </section>
    );
}

export default Index;
