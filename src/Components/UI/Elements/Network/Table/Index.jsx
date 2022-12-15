import React, { Fragment } from "react";

function Table(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>{props.titleA && props.titleA}</th>
                    <th>{props.titleB && props.titleB}</th>
                </tr>
            </thead>
            <tbody>
                {props.ipList &&
                    props.ipList.map((ip) => {
                        return (
                            <Fragment key={ip.IP_Address}>
                                <tr>
                                    <td>{ip.Host_Name}</td>
                                    <td className={ip.Status === "ON" ? "class-four" : "class-one"}>{ip.Status}</td>
                                </tr>
                            </Fragment>
                        );
                    })}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={2}>{props.date && `updated : ${props.date}`}</td>
                </tr>
            </tfoot>
        </table>
    );
}

export default Table;
