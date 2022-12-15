function Sport(props) {
    return (
        <section className="sport">
            <img src={props.logo} alt="logo" />
            <p>14/12/2022 - Terminé</p>
            <p>FRANCE - MAROC</p>
            <p>2 - 0</p>

            <div className="clear"></div>
            <aside className="mfoot">updated 12/12/2022 18:00:00</aside>
        </section>
    );
}

export default Sport;
