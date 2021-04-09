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
            Patrick Reed, Webb Simpson <br></br> -2
          </td>
          <td>
            Viktor Hovland, Paul Casey <br></br> +1
          </td>
          <td>
            Hideki Matsuyama <br></br> -3
          </td>
          <td>
            Christiaan Bezuidenhout <br></br> -2
          </td>
          <td>
            Justin Rose <br></br> -7
          </td>
          <td>
            Michael Thompson, Mackenzie Hughes <br></br> E
          </td>
          <td>-13</td>
        </tr>
      </tbody>
    </Table>
  </Container>
);

export default BestSelectionsTable;
