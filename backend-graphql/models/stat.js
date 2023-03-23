const mongoose = require('mongoose');
const { Schema } = mongoose;

const StatSchema = new Schema({
    match_id: {
      type: Number
    },
    team_id: {
      type: Number
    },
    team_name: {
      type: String
    },
    player_id: {
      type: Number
    },
    player_name: {
      type: String
    },
    player_match_minutes: {
      type: Number
    },
    player_match_np_xg_per_shot: {
      type: Number
    },
    player_match_np_xg: {
      type: Number
    },
    player_match_np_shots: {
      type: Number
    },
    player_match_goals: {
      type: Number
    },
    player_match_np_goals: {
      type: Number
    },
    player_match_xa: {
      type: Number
    },
    player_match_key_passes: {
      type: Number
    },
    player_match_op_key_passes: {
      type: Number
    },
    player_match_assists: {
      type: Number
    },
    player_match_through_balls: {
      type: Number
    },
    player_match_passes_into_box: {
      type: Number
    },
    player_match_op_passes_into_box: {
      type: Number
    },
    player_match_touches_inside_box: {
      type: Number
    },
    player_match_tackles: {
      type: Number
    },
    player_match_interceptions: {
      type: Number
    },
    player_match_possession: {
      type: Number
    },
    player_match_dribbled_past: {
      type: Number
    },
    player_match_dribbles_faced: {
      type: Number
    },
    player_match_dribbles: {
      type: Number
    },
    player_match_challenge_ratio: {
      type: Number
    },
    player_match_fouls: {
      type: Number
    },
    player_match_dispossessions: {
      type: Number
    },
    player_match_long_balls: {
      type: Number
    },
    player_match_successful_long_balls: {
      type: Number
    },
    player_match_long_ball_ratio: {
      type: Number
    },
    player_match_shots_blocked: {
      type: Number
    },
    player_match_clearances: {
      type: Number
    },
    player_match_aerials: {
      type: Number
    },
    player_match_successful_aerials: {
      type: Number
    },
    player_match_aerial_ratio: {
      type: Number
    },
    player_match_passes: {
      type: Number
    },
    player_match_successful_passes: {
      type: Number
    },
    player_match_passing_ratio: {
      type: Number
    },
    player_match_op_passes: {
      type: Number
    },
    player_match_forward_passes: {
      type: Number
    },
    player_match_backward_passes: {
      type: Number
    },
    player_match_sideways_passes: {
      type: Number
    },
    player_match_op_f3_passes: {
      type: Number
    },
    player_match_op_f3_forward_passes: {
      type: Number
    },
    player_match_op_f3_backward_passes: {
      type: Number
    },
    player_match_op_f3_sideways_passes: {
      type: Number
    },
    player_match_np_shots_on_target: {
      type: Number
    },
    player_match_crosses: {
      type: Number
    },
    player_match_successful_crosses: {
      type: Number
    },
    player_match_crossing_ratio: {
      type: Number
    },
    player_match_penalties_won: {
      type: Number
    },
    player_match_passes_inside_box: {
      type: Number
    },
    player_match_op_xa: {
      type: Number
    },
    player_match_op_assists: {
      type: Number
    },
    player_match_pressured_long_balls: {
      type: Number
    },
    player_match_unpressured_long_balls: {
      type: Number
    },
    player_match_aggressive_actions: {
      type: Number
    },
    player_match_turnovers: {
      type: Number
    },
    player_match_crosses_into_box: {
      type: Number
    },
    player_match_sp_xa: {
      type: Number
    },
    player_match_op_shots: {
      type: Number
    },
    player_match_touches: {
      type: Number
    },
    player_match_pressure_regains: {
      type: Number
    },
    player_match_box_cross_ratio: {
      type: Number
    },
    player_match_deep_progressions: {
      type: Number
    },
    player_match_shot_touch_ratio: {
      type: Number
    },
    player_match_fouls_won: {
      type: Number
    },
    player_match_xgchain: {
      type: Number
    },
    player_match_op_xgchain: {
      type: Number
    },
    player_match_xgbuildup: {
      type: Number
    },
    player_match_op_xgbuildup: {
      type: Number
    },
    player_match_xgchain_per_possession: {
      type: Number
    },
    player_match_op_xgchain_per_possession: {
      type: Number
    },
    player_match_xgbuildup_per_possession: {
      type: Number
    },
    player_match_op_xgbuildup_per_possession: {
      type: Number
    },
    player_match_pressures: {
      type: Number
    },
    player_match_pressure_duration_total: {
      type: Number
    },
    player_match_pressure_duration_avg: {
      type: Number
    },
    player_match_pressured_action_fails: {
      type: Number
    },
    player_match_counterpressures: {
      type: Number
    },
    player_match_counterpressure_duration_total: {
      type: Number
    },
    player_match_counterpressure_duration_avg: {
      type: Number
    },
    player_match_counterpressured_action_fails: {
      type: Number
    },
    player_match_obv: {
      type: Number
    },
    player_match_obv_pass: {
      type: Number
    },
    player_match_obv_shot: {
      type: Number
    },
    player_match_obv_defensive_action: {
      type: Number
    },
    player_match_obv_dribble_carry: {
      type: Number
    },
    player_match_obv_gk: {
      type: Number
    },
    player_match_deep_completions: {
      type: Number
    },
    player_match_ball_recoveries: {
      type: Number
    },
    player_match_np_psxg: {
      type: Number
    },
    player_match_penalties_faced: {
      type: Number
    },
    player_match_penalties_conceded: {
      type: Number
    },
    player_match_fhalf_ball_recoveries: {
      type: Number
    },
    player_match_360_minutes: {
      type: Number
    }
})

const Stat = mongoose.model('Stat', StatSchema);

module.exports = {
    Stat
}