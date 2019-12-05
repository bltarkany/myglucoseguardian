import React from "react";
import { Table } from "reactstrap";
const TableLog = (props) => {
    return (
        <Table hover size="sm">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Time Collected</th>
                    <th>Glucose Level (mg/dL)</th>
                </tr>
            </thead>
            <tbody>{props.children}</tbody>
        </Table>
    );
};
const TableLine = props => {
    console.log("inside TableLog Prop" + props.dateCollected);
    return (
        <tr>
            <th scope="row">{props.dateCollected}</th>
            <td>{props.timeCollected}</td>
            <td>{props.glucoseLevel}</td>
        </tr>
    );
};
export { TableLog, TableLine };
