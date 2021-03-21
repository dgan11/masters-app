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
          <td>🏆</td>
          <td>Macro</td>
          <td>-21</td>
        </tr>
        <tr>
          <td>🥈</td>
          <td>David</td>
          <td>-20</td>
        </tr>
        <tr>
          <td>🥉</td>
          <td>Jackson</td>
          <td>-13</td>
        </tr>
        {/* <tr>
          <td colSpan="3">...</td>
        </tr> */}
        <tr>
          <td>last 😩</td>
          <td>Shrey</td>
          <td>+13</td>
        </tr>
      </tbody>
    </Table>
  </Container>
);

export default Leaderboard;
