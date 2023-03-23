import _ from "lodash";
import React, { Component } from "react";
import PieChart from "../../pie/pie";
import "./player-stats.css";

class PlayerStats extends Component {
  state = {};

  renderTableHeading() {
    return (
      <tr className="categories">
        <th className="corner">
          <br />
          <br />
          <br />
          Categorie
        </th>
        <th className="th-pie">Speelminuten</th>
        <th>Doelpunten</th>
        <th>Assisten</th>
        <th>Shots on target</th>
        <th>Dribbels</th>
        <th>Intercepties</th>
        <th className="th-pass">
          Pass ratio
          <br />
          <br />
          (Aantal)
        </th>
        <th>Passen vooruit</th>
        <th>Touches in box</th>
      </tr>
    );
  }

  render() {
    const players = this.props.stats;
    return (
      <div className="player-stats">
        <h2>Club Brugge Player Stats</h2>
        <div className="table-holder">
          <table className="table table-bordered table-heading-fixed">
            {this.renderTableHeading()}
          </table>
          <table className="table table-bordered">
            <tbody>
              {this.renderTableHeading()}
              {players.map((player) => {
                let player_image;
                try {
                  player_image = require(`../../../assets/img/players/${player.player_id}.png`);
                } catch (error) {
                  player_image = require("../../../assets/img/players/dummie.png");
                }
                return (
                  <tr key={player.player_id}>
                    <th className="player-name">
                      <div className="image-holder">
                        <img
                          className="player-image"
                          src={player_image}
                          alt=""
                        />
                      </div>
                      <div className="name">
                        <span>{player.player_name}</span>
                      </div>
                    </th>
                    <td>
                      <PieChart
                        value={Math.floor(player.player_match_minutes)}
                        total={Math.floor(
                          players
                            .map((p) => p.player_match_minutes)
                            .reduce((a, b) => Math.max(a, b), -Infinity)
                        )}
                      />
                    </td>
                    <td>
                      {Math.round(player.player_match_np_xg * 100) / 100 +
                        "(E)"}
                      &nbsp;
                      {player.player_match_goals > 0 && (
                        <div className="goal-icon">
                          <img
                            src={require("../../../assets/img/football.png")}
                            alt=""
                          />
                          {player.player_match_goals > 1 && (
                            <span>{player.player_match_goals}</span>
                          )}
                        </div>
                      )}
                    </td>
                    <td>
                      {Math.round(player.player_match_xa * 100) / 100 + "(E) "}
                      {player.player_match_assists > 0 &&
                        player.player_match_assists}
                    </td>
                    <td>
                      {player.player_match_np_shots_on_target +
                        "/" +
                        player.player_match_np_shots}
                    </td>
                    <td>{player.player_match_interceptions}</td>
                    <td>{player.player_match_dribbles}</td>
                    <td>
                      <PieChart
                        value={Math.round(
                          player.player_match_passing_ratio * 100
                        )}
                        total={100}
                      />
                      <br />({player.player_match_successful_passes})
                    </td>
                    <td>{player.player_match_forward_passes}</td>
                    <td>{player.player_match_touches_inside_box}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default PlayerStats;
