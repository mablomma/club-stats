const { Match } = require('./models/match');
const { Stat } = require('./models/stat');
const graphqlFields = require('graphql-fields');

const resolvers = {
    Query: {
        matches (parent, args, context, info) {
            return Match.find().sort({ match_date: 'desc' })
                .then(matches => {
                    return matches;
                })
                .catch(err => {
                    console.error(err)
                })
        },
        match (parent, args, context, info) {
            return Match.findOne({ match_id: args.id })
                .then(match => {
                    const requestedFields = Object.keys(graphqlFields(info));
                    if (requestedFields.includes('player_stats')) {
                        return Stat.find({ match_id: match.match_id, team_id: 977 })
                            .then(player_stats => {
                                return { ...match.toObject(), player_stats}
                            })
                            .catch(err => {
                                console.error(err)
                            })
                    }
                    else {
                        return match
                    }
                })
                .catch(err => {
                    console.error(err)
                })
        }
    }
    
}

module.exports = resolvers