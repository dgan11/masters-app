import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

const Leaderboard = () => (
  <Container>
    <h2>Leaders in the Clubhouse</h2>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>🏆 T1</td>
          <td>Cem “Seize The Means of Production” Okcu</td>
          <td>+3</td>
        </tr>
        <tr>
          <td>🏆 T1</td>
          <td>Ollie</td>
          <td>+3</td>
        </tr>
        <tr>
          <td>🥈 T2</td>
          <td>David Gan</td>
          <td>+4</td>
        </tr>
        <tr>
          <td>🥈 T2</td>
          <td>Davis Nelson</td>
          <td>+4</td>
        </tr>
        <tr>
          <td>🥈 T2</td>
          <td>Slam Fisher</td>
          <td>+4</td>
        </tr>
        {/* <tr>
          <td>🥉</td>
          <td>Jackson</td>
          <td>0</td>
        </tr> */}
        {/* <tr>
          <td colSpan="3">...</td>
        </tr> */}
        <tr>
          <td>last 😩</td>
          <td>David Fitzpatrick & GutzWilli</td>
          <td>+13</td>
        </tr>
      </tbody>
    </Table>
  </Container>
);

export default Leaderboard;
