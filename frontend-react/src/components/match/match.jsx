import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Moment from "react-moment";
import PlayerStats from "./player-stats/player-stats";
import "./match.css";

class Match extends Component {
  state = {
    match_id: 3829698,
  };

  render() {
    return (
      <Query
        query={MATCH_QUERY}
        variables={{ id: Number(this.props.match.params.id) }}
      >
        {({ data, loading, error }) => {
          if (loading) {
            return (
              <div className="flex w-100 h-100 items-center justify-center pt7">
                <div>Loading ...</div>
              </div>
            );
          }

          if (error) {
            return (
              <div className="flex w-100 h-100 items-center justify-center pt7">
                <div>An unexpected error occured.</div>
              </div>
            );
          }
          const { match } = data;
          return (
            <div className="match">
              <div className="info mb-4">
                <p className="date-time">
                  <Moment format="dddd DD MMMM YYYY">{match.match_date}</Moment>{" "}
                  - {match.kick_off.split(":").slice(0, 2).join(":")}
                </p>
                <p>{match.stadium.name}</p>
                <p>Scheidsrechter {match.referee.name}</p>
              </div>

              <div className="teams">
                <div className="team team-home">
                  <span>{match.home_team.name}</span>
                  <img
                    src={require("../../assets/img/team_icons/" +
                      match.home_team.id +
                      ".png")}
                    alt=""
                  />
                </div>
                <div className="score">
                  <div className="score-number">{match.home_score}</div>
                  <div className="separator"></div>
                  <div className="score-number">{match.away_score}</div>
                </div>
                <div className="team team-away">
                  <span>{match.away_team.name}</span>
                  <img
                    src={require("../../assets/img/team_icons/" +
                      match.away_team.id +
                      ".png")}
                    alt=""
                  />
                </div>
              </div>

              <PlayerStats stats={match.player_stats} />
            </div>
          );
        }}
      </Query>
    );
  }
}

export const MATCH_QUERY = gql`
  query MatchQuery($id: Int) {
    match(id: $id) {
      match_date
      kick_off
      stadium {
        name
      }
      referee {
        name
      }
      home_team {
        id
        name
      }
      away_team {
        id
        name
      }
      home_score
      away_score
      player_stats {
        player_id
        player_name
        player_match_minutes
        player_match_np_xg
        player_match_xa
        player_match_np_shots
        player_match_np_shots_on_target
        player_match_key_passes
        player_match_assists
        player_match_goals
        player_match_touches_inside_box
        player_match_interceptions
        player_match_dribbles
        player_match_successful_passes
        player_match_passing_ratio
        player_match_forward_passes
      }
    }
  }
`;

export default Match;
