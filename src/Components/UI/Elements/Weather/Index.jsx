import { useEffect, useState } from "react";
import { getNetatmoInfo, getOpenWeather } from "../../../../services/weather/API/weather.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretRight, faCaretUp, faDroplet, faHouseChimney } from "@fortawesome/free-solid-svg-icons";

function Index() {
    const [netAtmoInfo, setNetatmoInfo] = useState();
    const [openWeather, setOpenWeather] = useState();
    const [message, setMessage] = useState(null);

    useEffect(() => {
        const getNetatmo = async () => {
            try {
                const response = await getNetatmoInfo();
                if (response.status !== 200) {
                    setMessage("We can't retrieve the ip static list.");
                }
                if (response.status === 200) {
                    setNetatmoInfo(response.data);
                }
            } catch (error) {
                setMessage("We have a problem to connect with the DB, please contact your admin.");
            }
        };

        const getOpenweather = async () => {
            try {
                const response = await getOpenWeather();
                if (response.status !== 200) {
                    setMessage("We can't retrieve the ip static list.");
                }
                if (response.status === 200) {
                    setOpenWeather(response.data);
                }
            } catch (error) {
                setMessage("We have a problem to connect with the DB, please contact your admin.");
            }
        };

        const timer = setInterval(() => {
            getNetatmo();
            getOpenweather();
        }, 60000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return netAtmoInfo ? (
        <section className="weather">
            <h2>Météo</h2>
            <article className="interior">
                <FontAwesomeIcon
                    className={
                        netAtmoInfo[0].Temperature < 17
                            ? "class-seven"
                            : netAtmoInfo[0].Temperature >= 17 && netAtmoInfo[0].Temperature < 18
                            ? "class-six"
                            : netAtmoInfo[0].Temperature >= 18 && netAtmoInfo[0].Temperature < 19
                            ? "class-five"
                            : netAtmoInfo[0].Temperature >= 19 && netAtmoInfo[0].Temperature < 20
                            ? "class-four"
                            : netAtmoInfo[0].Temperature >= 20 && netAtmoInfo[0].Temperature < 21
                            ? "class-three"
                            : netAtmoInfo[0].Temperature >= 21 && netAtmoInfo[0].Temperature < 11
                            ? "class-two"
                            : netAtmoInfo[0].Temperature >= 22
                            ? "class-one"
                            : "class-four"
                    }
                    icon={faHouseChimney}
                />

                {netAtmoInfo[0].temp_trend === "down" ? (
                    <FontAwesomeIcon className="class-one" icon={faCaretDown} />
                ) : netAtmoInfo[0].temp_trend === "up" ? (
                    <FontAwesomeIcon className="class-four" icon={faCaretUp} />
                ) : (
                    <FontAwesomeIcon className="class-two" icon={faCaretRight} />
                )}

                <p
                    className={
                        netAtmoInfo[0].Temperature < 17
                            ? "class-seven"
                            : netAtmoInfo[0].Temperature >= 17 && netAtmoInfo[0].Temperature < 18
                            ? "class-six"
                            : netAtmoInfo[0].Temperature >= 18 && netAtmoInfo[0].Temperature < 19
                            ? "class-five"
                            : netAtmoInfo[0].Temperature >= 19 && netAtmoInfo[0].Temperature < 20
                            ? "class-four"
                            : netAtmoInfo[0].Temperature >= 20 && netAtmoInfo[0].Temperature < 21
                            ? "class-three"
                            : netAtmoInfo[0].Temperature >= 21 && netAtmoInfo[0].Temperature < 11
                            ? "class-two"
                            : netAtmoInfo[0].Temperature >= 22
                            ? "class-one"
                            : "class-zero"
                    }>
                    {netAtmoInfo[0].Temperature} °C
                </p>

                <FontAwesomeIcon
                    className={
                        netAtmoInfo[0].Humidity < 30
                            ? "class-five"
                            : netAtmoInfo[0].Humidity >= 30 && netAtmoInfo[0].Humidity < 60
                            ? "class-six"
                            : netAtmoInfo[0].Humidity >= 60
                            ? "class-seven"
                            : "class-five"
                    }
                    icon={faDroplet}
                />
                <p>{netAtmoInfo[0].Humidity} %</p>
            </article>

            <article className="exterior">
                {openWeather && <img src={`http://openweathermap.org/img/wn/${openWeather.weather[0].icon}@2x.png`} alt={openWeather.weather[0].icon} />}

                {netAtmoInfo[1].temp_trend === "down" ? (
                    <FontAwesomeIcon className="class-one" icon={faCaretDown} />
                ) : netAtmoInfo[1].temp_trend === "up" ? (
                    <FontAwesomeIcon className="class-four" icon={faCaretUp} />
                ) : (
                    <FontAwesomeIcon className="class-two" icon={faCaretRight} />
                )}

                <p
                    className={
                        netAtmoInfo[1].Temperature < 17
                            ? "class-seven"
                            : netAtmoInfo[1].Temperature >= 17 && netAtmoInfo[1].Temperature < 18
                            ? "class-six"
                            : netAtmoInfo[1].Temperature >= 18 && netAtmoInfo[1].Temperature < 19
                            ? "class-five"
                            : netAtmoInfo[1].Temperature >= 19 && netAtmoInfo[1].Temperature < 20
                            ? "class-four"
                            : netAtmoInfo[1].Temperature >= 20 && netAtmoInfo[1].Temperature < 21
                            ? "class-three"
                            : netAtmoInfo[1].Temperature >= 21 && netAtmoInfo[1].Temperature < 22
                            ? "class-two"
                            : netAtmoInfo[1].Temperature >= 22
                            ? "class-one"
                            : "class-zero"
                    }>
                    {netAtmoInfo[1].Temperature} °C
                </p>

                <FontAwesomeIcon
                    className={
                        netAtmoInfo[1].Humidity < 30
                            ? "class-five"
                            : netAtmoInfo[1].Humidity >= 30 && netAtmoInfo[1].Humidity < 60
                            ? "class-six"
                            : netAtmoInfo[1].Humidity >= 60
                            ? "class-seven"
                            : "class-five"
                    }
                    icon={faDroplet}
                />
                <p>{netAtmoInfo[1].Humidity} %</p>
            </article>

            <aside className="mfoot">updated : {new Date(netAtmoInfo[0].time_utc * 1000).toLocaleString()} </aside>
        </section>
    ) : (
        <section className="weather">
            <p>Weather module aren't available.</p>
            <p>Please wait a few moment ...</p>
        </section>
    );
}

export default Index;
