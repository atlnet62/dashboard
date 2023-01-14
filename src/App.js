import Calendar from "./Components/UI/Elements/Calendar/Index";
import Sport from "./Components/UI/Elements/Sport/Index";
import Network from "./Components/UI/Elements/Network/Index";
import Weather from "./Components/UI/Elements/Weather/Index";
import Flag from "./Components/UI/Elements/Drapeau/Index";

function App() {


    return (
        <main>
            <Calendar />
            {/* <Sport logo={team} /> */}
            <Network />
            <Weather />
            <Flag />
        </main>
    );
}

export default App;

