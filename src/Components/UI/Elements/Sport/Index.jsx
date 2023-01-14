import { useEffect, useState } from "react";
import logoFrance from "../../../../assets/teams/fff.png";
import logoLens from "../../../../assets/teams/lens.png";

function Sport() {
    const [team, setTeam] = useState(null);

    useEffect(() => {
        let sport = "lens";
        const teams = () => {
            if (sport === "france") {
                setTeam(logoFrance);
            }
            if (sport === "lens") {
                setTeam(logoLens);
            }
        };
        teams();
    }, []);

    return (
        <section className="sport">
            <img src={team} alt="logo" />
            <p>VICTOIRE</p>
            <p>LENSOISE</p>
            <aside className="mfoot">updated 01/01/2023 23:15:00</aside>
            <div className="clear"></div>
        </section>
    );
}

export default Sport;
