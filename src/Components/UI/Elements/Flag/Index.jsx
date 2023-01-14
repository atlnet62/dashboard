import pictureFlag from "../../../../assets/drapeau/france.svg";

function Flag() {
    return (
        <section className="drapeau">
            <img src={pictureFlag} alt="France" />
            <p>France</p>
        </section>
    );
}

export default Flag;
