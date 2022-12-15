import { useState, useEffect } from "react";
import Calendar from "./Components/UI/Elements/Calendar/Index";
import Sport from "./Components/UI/Elements/Sport/Index";
import Network from "./Components/UI/Elements/Network/Index";
import Weather from "./Components/UI/Elements/Weather/Index";
import logoFrance from "./assets/teams/fff.png";
import logoLens from "./assets/teams/lens.png";
import Drapeau from "./Components/UI/Elements/Drapeau/Index";

function App() {
    const [team, setTeam] = useState(logoLens);

    useEffect(() => {
        let sport = "france";
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
        <main>
            <Calendar />
            <Sport logo={team} />
            <Network />
            <Weather />
            <Drapeau />
        </main>
    );
}

export default App;

