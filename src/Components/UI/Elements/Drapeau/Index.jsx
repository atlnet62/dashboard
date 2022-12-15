import France from "../../../../assets/drapeau/france.svg";

function Drapeau() {

    return (
        <section className="drapeau">
            <img src={France} alt="France" />
            <p>France</p>
        </section>
    );
}

export default Drapeau;
