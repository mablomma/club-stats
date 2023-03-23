const mongoose = require('mongoose');
const { Schema } = mongoose;

const CountrySchema = new Schema({
    id: Number,
    name: String
})

const ManagerSchema = new Schema({
    id: Number,
    name: String,
    nickname: String,
    dob: String,
    country: CountrySchema
})

const TeamSchema = new Schema({
    id: Number,
    name: String,
    gender: String,
    youth: Boolean,
    group: Boolean,
    country: CountrySchema,
    managers: [ManagerSchema]
})

const MatchSchema = new Schema({
    match_id: { type: Number, required: true },
    match_date: String,
    kick_off: String,
    competition: {
        competition_id: Number,
        country_name: String,
        competition_name: String
    },
    season: {
        season_id: Number,
        season_name: String
    },
    home_team: TeamSchema,
    away_team: TeamSchema,
    home_score: Number,
    away_score: Number,
    attendance: Number,
    behind_closed_doors: Boolean,
    neutral_ground: Boolean,
    play_status: String,
    match_status: String,
    match_status_360: String,
    last_updated: String,
    last_updated_360: String,
    metadata: {
        data_version: String,
        shot_fidelity_version: String,
        xy_fidelity_version: String
    },
    match_week: Number,
    competition_stage: {
        id: Number,
        name: String
    },
    stadium: {
        id: Number,
        name: String,
        country: CountrySchema
    },
    referee: {
        id: Number,
        name: String,
        country: CountrySchema
    },
    match_date_utc: String
})

const Match = mongoose.model('Match', MatchSchema);

module.exports = {
    Match
}