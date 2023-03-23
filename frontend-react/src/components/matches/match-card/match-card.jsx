import React, { Component } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import "./match-card.css";

class MatchCard extends Component {
  state = {
    match: this.props.match,
  };

  getCardStyle = () => {
    let className = "match-card";
    if (this.props.mt) className = className + " mt-3";
    return className;
  };

  render() {
    return (
      <Link
        to={`/match/${this.state.match.match_id}`}
        style={{ textDecoration: "none" }}
      >
        <div className={this.getCardStyle()}>
          <div className="date ml-3">
            <img
              className="league-icon"
              src={require("../../../assets/img/league_icons/" +
                this.state.match.competition.competition_id +
                ".png")}
              alt=""
            />
            <span className="d-none d-md-inline">
              <Moment format="dddd DD MMMM YYYY">
                {this.state.match.match_date}
              </Moment>
            </span>
            <span className="d-none d-sm-inline d-md-none">
              <Moment format="DD MMM YYYY">
                {this.state.match.match_date}
              </Moment>
            </span>
            <span className="d-sm-none">
              <Moment format="D/MM/YY">{this.state.match.match_date}</Moment>
            </span>
          </div>
          <div className="teams">
            <div className="team">
              <span>{this.state.match.home_team.name}</span>
              <img
                src={require("../../../assets/img/team_icons/" +
                  this.state.match.home_team.id +
                  ".png")}
                alt=""
              />
            </div>
            <div className="score">
              <div className="score-number">{this.state.match.home_score}</div>
              <div className="separator"></div>
              <div className="score-number">{this.state.match.away_score}</div>
            </div>
            <div className="team team-away">
              <span>{this.state.match.away_team.name}</span>
              <img
                src={require("../../../assets/img/team_icons/" +
                  this.state.match.away_team.id +
                  ".png")}
                alt=""
              />
            </div>
          </div>
          <div>
            <button className="btn btn-sm btn-link mr-3">
              <span className="d-none d-sm-inline">Player </span>Stats{" "}
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </Link>
    );
  }
}

export default MatchCard;
