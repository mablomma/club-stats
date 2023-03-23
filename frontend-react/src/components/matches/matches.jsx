import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import MatchCard from "./match-card/match-card";
import moment from "moment";

class Matches extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="d-flex justify-content-end mb-3">
          <select class="form-control" style={{ width: "200px" }}>
            <option>Seizoen 2021/2022</option>
            <option disabled>Seizoen 2022/2023</option>
          </select>
        </div>
        <Query query={MATCHES_QUERY}>
          {({ data, loading, error, refetch }) => {
            if (loading) {
              return (
                <div className="flex w-100 h-100 items-center justify-center pt7">
                  <div>Match data ophalen ...</div>
                </div>
              );
            }

            if (error) {
              return (
                <div className="flex w-100 h-100 items-center justify-center pt7">
                  <div>Er liep iets mis bij het laden van de data.</div>
                </div>
              );
            }

            return (
              <React.Fragment>
                {data.matches &&
                  data.matches.map((match, index) => {
                    let mt;
                    if (index > 0) {
                      const match_month = moment(match.match_date).format("M");
                      const prev_match_month = moment(
                        data.matches[index - 1].match_date
                      ).format("M");
                      if (match_month !== prev_match_month) mt = true;
                    }
                    return (
                      <MatchCard match={match} mt={mt} key={match.match_id} />
                    );
                  })}
              </React.Fragment>
            );
          }}
        </Query>
      </React.Fragment>
    );
  }
}

export const MATCHES_QUERY = gql`
  query MatchesQuery {
    matches {
      match_id
      match_date
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
      competition {
        competition_id
      }
    }
  }
`;

export default Matches;
