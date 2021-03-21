import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

const BestSelectionsTable = () => (
  <Container>
    <h2>Best Possible Selctions</h2>
    <Table striped bordered hover variant="dark" responsive>
      <thead>
        <tr>
          <th>F1</th>
          <th>F2</th>
          <th>F3</th>
          <th>F4</th>
          <th>F5</th>
          <th>WC</th>
          <th>Best Possible Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            Colin Morikawa <br></br> -1
          </td>
          <td>
            Brooks Koepka <br></br> -1
          </td>
          <td>
            Tiger Woods <br></br> -1
          </td>
          <td>
            Bubba Watson <br></br> -1
          </td>
          <td>
            Henrik Stenson <br></br> -1
          </td>
          <td>
            Jordan Spieth <br></br> -1
          </td>
          <td>-12</td>
        </tr>
      </tbody>
    </Table>
  </Container>
);

export default BestSelectionsTable;
