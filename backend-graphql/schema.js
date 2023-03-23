const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Match {
        match_id: Int,
        match_date: String,
        kick_off: String,
        home_team: Team,
        away_team: Team,
        home_score: Int,
        away_score: Int,
        stadium: Stadium,
        referee: Referee,
        competition: Competition,
        player_stats: [PlayerStat]
    }

    type Competition {
        competition_id: Int,
        competition_name: String,
        country: String
    }

    type PlayerStat {
        player_id: Int,
        player_name: String,
        player_match_minutes: Float,

        player_match_np_xg: Float,
        player_match_xa: Float,

        player_match_np_shots: Int,
        player_match_np_shots_on_target: Int,
        player_match_key_passes: Int,

        player_match_assists: Int,
        player_match_goals: Int,

        player_match_touches_inside_box: Int,
        player_match_interceptions: Int,
        player_match_dribbles: Int,
        player_match_successful_passes: Int,
        player_match_passing_ratio: Float,
        player_match_forward_passes: Int,


    }

    type Team {
        id: Int,
        name: String
    }

    type Stadium {
        id: Int,
        name: String
    }

    type Referee {
        id: Int,
        name: String
    }

    type Query {
        matches: [Match],
        match (id: Int): Match
    }
`

module.exports = typeDefs