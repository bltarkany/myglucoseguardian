import React from 'react';
import { Table } from 'reactstrap';

const TableLog = (props) => {
  return (
    <Table hover>
      <thead>
        <tr>
          <th>Date</th>
          <th>Time Collected</th>
          <th>Glucose Level (mg/dL) (</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>11/16/2019</td>
          <td>6:00 AM</td>
          <td>120</td>
        </tr>
        <tr>
          <th scope="row">{props.glucoseSchema.dateCollected}</th>
          <td>{props.glucoseSchema.timeCollected}</td>
          <td>{props.glucoseSchema.glucoseLevel}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableLog;