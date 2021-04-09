import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

const FlightSelectionsTable = () => (
  <Container>
    <h2>Player Selections</h2>
    <Table striped bordered hover variant="dark" responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>F1</th>
          <th>F2</th>
          <th>F3</th>
          <th>F4</th>
          <th>F5</th>
          <th>WC</th>
          <th>Current Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Beez</td>
          <td>
            Bryson DeChambeau <br></br> +4
          </td>
          <td>
            Brooks Koepka <br></br> +2
          </td>
          <td>
            Louis Oosthuizen <br></br> +4
          </td>
          <td>
            Jordan Spieth <br></br> -1
          </td>
          <td>
            Justin Rose <br></br> -7
          </td>
          <td>
            Vijay Singh <br></br> +7
          </td>
          <td>+9</td>
        </tr>

        <tr>
          <td>Cem “Seize The Means of Production” Okcu</td>
          <td>
            Dustin Johnson <br></br> +2
          </td>
          <td>
            Brooks Koepka <br></br> +2
          </td>
          <td>
            Hideki Matsuyama <br></br> -3
          </td>
          <td>
            Adam Scott <br></br> +2
          </td>
          <td>
            Justin Rose <br></br> -7
          </td>
          <td>
            Vijay Singh <br></br> +7
          </td>
          <td>+3</td>
        </tr>

        <tr>
          <td>David Gan</td>
          <td>
            Colin Morikawa
            <br></br> +1
          </td>
          <td>
            Sungjae Im <br></br> +5
          </td>
          <td>
            Hideki Matsuyama <br></br> -3
          </td>
          <td>
            Kevin Na <br></br> +3
          </td>
          <td>
            Justin Rose <br></br> -7
          </td>
          <td>
            Jason Day <br></br> +5
          </td>
          <td>+4</td>
        </tr>

        <tr>
          <td>David Fitzpatrick</td>
          <td>
            Bryson DeChambeau
            <br></br> +4
          </td>
          <td>
            Lee Westwood
            <br></br> +6
          </td>
          <td>
            Tommy Fleetwood
            <br></br> +2
          </td>
          <td>
            Jordan Spieth
            <br></br> -1
          </td>
          <td>
            Matt Kuchar
            <br></br> +6
          </td>
          <td>
            Ian Poulter
            <br></br> +2
          </td>
          <td>+19</td>
        </tr>

        <tr>
          <td>Davis Nelson</td>
          <td>
            Dustin Johnson
            <br></br> +2
          </td>
          <td>
            Brooks Koepka
            <br></br> +2
          </td>
          <td>
            Tommy Fleetwood
            <br></br> +2
          </td>
          <td>
            Kevin Na
            <br></br> +3
          </td>
          <td>
            Justin Rose
            <br></br> -7
          </td>
          <td>
            Francesco Molinari
            <br></br> +2
          </td>
          <td>+4</td>
        </tr>

        <tr>
          <td>GutzWilli</td>
          <td>
            Collin Morikawa
            <br></br> +1
          </td>
          <td>
            Billy Horschel
            <br></br> +4
          </td>
          <td>
            Louis Oosthuizen
            <br></br> +4
          </td>
          <td>
            Adam Scott
            <br></br> +2
          </td>
          <td>
            Matt Kuchar
            <br></br> +6
          </td>
          <td>
            Ian Poulter
            <br></br> +2
          </td>
          <td>+19</td>
        </tr>

        <tr>
          <td>Jack Trouvé</td>
          <td>
            Justin Thomas
            <br></br> +1
          </td>
          <td>
            Sungjae Im
            <br></br> +5
          </td>
          <td>
            Tommy Fleetwood
            <br></br> +2
          </td>
          <td>
            Abraham Ancer
            <br></br> +1
          </td>
          <td>
            Corey Conners
            <br></br> +1
          </td>
          <td>
            Jason Day
            <br></br> +5
          </td>
          <td>+15</td>
        </tr>

        <tr>
          <td>Jackson “Mud Ball” Taylor</td>
          <td>
            Justin Thomas
            <br></br> +1
          </td>
          <td>
            Rory McIlroy
            <br></br> +4
          </td>
          <td>
            Cameron Smith
            <br></br> +2
          </td>
          <td>
            Jordan Spieth
            <br></br> -1
          </td>
          <td>
            Corey Conners
            <br></br> +1
          </td>
          <td>
            C.T. Pan
            <br></br> +7
          </td>
          <td>+14</td>
        </tr>

        <tr>
          <td>Marco "Commish" Gutierrez</td>
          <td>
            Justin Thomas
            <br></br> +1
          </td>
          <td>
            Sungjae Im
            <br></br> +5
          </td>
          <td>
            Scottie Scheffler
            <br></br> +1
          </td>
          <td>
            Jordan Spieth
            <br></br> -1
          </td>
          <td>
            Corey Conners
            <br></br> +1
          </td>
          <td>
            Ian Poulter
            <br></br> +2
          </td>
          <td>+9</td>
        </tr>

        <tr>
          <td>Mitra “The Truth” Mirpour</td>
          <td>
            Dustin Johnson
            <br></br> +2
          </td>
          <td>
            Rory McIlroy
            <br></br> +4
          </td>
          <td>
            Cameron Smith
            <br></br> +2
          </td>
          <td>
            Jordan Spieth
            <br></br> -1
          </td>
          <td>
            Will Zalatoris
            <br></br> -2
          </td>
          <td>
            Jason Day
            <br></br> +5
          </td>
          <td>+10</td>
        </tr>

        <tr>
          <td>Ollie</td>
          <td>
            Justin Thomas
            <br></br> +1
          </td>
          <td>
            Rory McIlroy
            <br></br> +4
          </td>
          <td>
            Tommy Fleetwood
            <br></br> +2
          </td>
          <td>
            Abraham Ancer
            <br></br> +1
          </td>
          <td>
            Justin Rose
            <br></br> -7
          </td>
          <td>
            Bubba Watson
            <br></br> +2
          </td>
          <td>+3</td>
        </tr>

        <tr>
          <td>Sam</td>
          <td>
            Jon Rahm
            <br></br> E{/* <br></br> Thru: 8 */}
          </td>
          <td>
            Paul Casey
            <br></br> +1
          </td>
          <td>
            Cameron Smith
            <br></br> +2
          </td>
          <td>
            Jordan Spieth
            <br></br> -1
          </td>
          <td>
            Corey Conners
            <br></br> +1
          </td>
          <td>
            Phil Mickelson
            <br></br> +3
          </td>
          <td>+6</td>
        </tr>

        <tr>
          <td>Slam Fisher</td>
          <td>
            Dustin Johnson
            <br></br> +2
          </td>
          <td>
            Sungjae Im
            <br></br> +5
          </td>
          <td>
            Hideki Matsuyama
            <br></br> -3
          </td>
          <td>
            Jason Kokrak
            <br></br> -1
          </td>
          <td>
            Will Zalatoris
            <br></br> -2
          </td>
          <td>
            Robert Streb
            <br></br> +3
          </td>
          <td>+4</td>
        </tr>

        <tr>
          <td>Will Cates</td>
          <td>
            Dustin Johnson
            <br></br> +2
          </td>
          <td>
            Rory McIlroy
            <br></br> +4
          </td>
          <td>
            Ryan Palmer
            <br></br> +2
          </td>
          <td>
            Jordan Spieth
            <br></br> -1
          </td>
          <td>
            Will Zalatoris
            <br></br> -2
          </td>
          <td>
            Cameron Champ
            <br></br> E
          </td>
          <td>+5</td>
        </tr>
      </tbody>
    </Table>
  </Container>
);

export default FlightSelectionsTable;
