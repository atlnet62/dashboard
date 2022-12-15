import React, { useState, useEffect } from "react";

function Calendar() {
    const [clock, setClock] = useState(new Date());
    const [week, setWeek] = useState(1);
    
    useEffect(() => {
        const timer = setInterval(() => {
            setClock(new Date());
        }, 1000);

        return () => clearInterval(timer);

    }, []);
    
    useEffect(() => {
        const weekNumber = () => {
    
            let d = clock;
            d.setHours(0, 0, 0);
            d.setDate(d.getDate() + 4 - (d.getDay() || 7));
            const w = Math.ceil(((d - new Date(d.getFullYear(), 0, 1)) / 8.64e7 + 1) / 7);
            
            if (w < 10) {
                setWeek(`0${w}`);
            } else {
                setWeek(w);
            }
        };
        
        weekNumber();
        // due to clock implement the next line
        // eslint-disable-next-line
    }, []);

    return (
        <section className="clock">
            <p className="time">{`${clock.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}`}</p>

            <p className="date">{`${clock.toLocaleDateString("fr-FR", { weekday: "long", year: "numeric", month: "short", day: "numeric" })}`}</p>

            <p className="week">semaine {week}</p>
        </section>
    );
}

export default Calendar;
