import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './router/history';
import WelcomePageView from './views/WelcomePageView';
import FormPageView from './views/FormPageView';
import ExplanationPageView from './views/ExplanationPageView';
import ConfirmationPageView from './views/ConfirmationPageView';
import EndPageView from './views/EndPageView';

import { makeStyles } from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

class App extends Component {
	constructor() {
		super();
		this.state = { currentPage: 1, loading: true, error: false };
		//this.handleClick = this.handleClick.bind(this);
	}
	
	render() {
		let routes = [
			<Route exact path="/form" key="/form" component={FormPageView} />,
			<Route exact path="/explanation" key="/explanation" component={ExplanationPageView} />,
			<Route exact path="/confirmation" key="/confirmation" component={ConfirmationPageView} />,
			<Route exact path="/end" key="/end" component={EndPageView} />,
			<Route exact path="/appointment/:appointmentID/:procedureID" key="/welcome" component={WelcomePageView} />,
		]
		return (
				<div>
					<Router history={history}>
						<Switch>{routes}</Switch>
					</Router>
				</div>
		  );
	}
}

export default App;
