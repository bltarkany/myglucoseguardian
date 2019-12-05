import React from "react";
import { Table } from "reactstrap";

const TableLog = props => {
    return (
        <Table hover size="sm">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Time Collected</th>
                    <th>Glucose Level (mg/dL) (</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">11/16/2019</th>
                    <td>6:00 AM</td>
                    <td>120</td>
                </tr>
                <tr>
                    <th scope="row"> {props.dateCollected}</th>
                    <td>{props.timeCollected}</td>
                    <td>{props.glucoseLevel}</td>
                </tr>
            </tbody>
        </Table>
    );
};

export default TableLog;
