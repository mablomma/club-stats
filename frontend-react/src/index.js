import React from 'react';
import ReactDOM from 'react-dom';
import './assets/fonts/aeonik.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import Header from './components/header/header';
import Matches from './components/matches/matches';
import Match from './components/match/match';
import moment from 'moment';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'moment/locale/nl';
import Footer from './components/footer/footer';
import ScrollToTop from './components/helpers/scrollToTop';
moment().locale('nl');

const client = new ApolloClient({ uri: 'https://desolate-wave-10821.herokuapp.com/graphql' })

ReactDOM.render((
    <BrowserRouter>
        <ApolloProvider client={client}>
            <div className='container'>

                <Header />
                <div className='content'>
                    <ScrollToTop />
                    <Switch>
                        <Route path="/match/:id" component={Match} />
                        <Route path="/" component={Matches} />

                    </Switch>
                </div>
                <Footer />
            </div>
        </ApolloProvider>
    </BrowserRouter>
), document.getElementById('root'));

