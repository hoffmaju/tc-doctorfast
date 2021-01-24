import React from 'react';
import { Container, Typography, Button, Card, CardContent, Grid, FormControl, FormGroup, Checkbox, FormControlLabel } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from "react-player";
import { appointmentURL } from '../config';
import history from '../router/history';
import axios from 'axios';
import ls from 'local-storage'

const useStyles = makeStyles(theme =>({
  paper: {
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

function ConfirmationPageView(props) {
	const classes = useStyles();
	const infoName = ls.get('infoName');
	const [state, setState] = useState({noquestions: false, nodiscussion: false, consented: false, refused: false });
	
	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};
	
	function handleSubmit(event) {
		event.preventDefault();
		let appointmentID = ls.get('appointmentID')
		axios.post(appointmentURL + '/confirmation', { params: { "_id": appointmentID, "noquestions": state.noquestions, "nodiscussion": state.nodiscussion, "consented": state.consented, "refused": state.refused, "readThrough": true } }).then(response => {
			
		}).catch(err => {
			console.error(err);
		})
		history.push('/end');
	}
	
	return (
		<Container component="main" maxWidth="md">
			<div>
				<Typography align='center' component="h1" variant="h5" >
					Declaration of Consent for {infoName}
				</Typography>
			</div>
			<Card className={classes.root}>
				<CardContent>
					<Typography align='center' >
						In addition to this information, your practitioner administering the procedure will provide you 
						with the opportunity to have a clarification discussion.
						I confirm that I read through the information sheet and and watched the information video.
					</Typography>
					<Typography align='center' >
						I have taken note of the contents of the information sheet and have seen the information video.
						I know that I have the opportunity to have a detailed discussion with my practitioner administering the procedure.
					</Typography>
					<Grid container spacing={2} justify="center" className={classes.paper}>
						<FormControl>
							<FormGroup>
								<FormControlLabel control={<Checkbox checked={state.noquestions} onChange={handleChange} name="noquestions"/>} label="I have no further questions." />
								<FormControlLabel control={<Checkbox checked={state.nodiscussion} onChange={handleChange} name="nodiscussion"/>} label="I expressly renounce the medical clarification discussion." />
								<FormControlLabel control={<Checkbox checked={state.consented} onChange={handleChange} name="consented"/>} label="I consent to the recommended procudure."/>
								<FormControlLabel control={<Checkbox checked={state.refused} onChange={handleChange} name="refused"/>} label="I refuse the recommened procedure."/>
							</FormGroup>
						</FormControl>
						<div align="center">
							<Button variant="contained" color="primary" style={{float: 'center'}} onClick={handleSubmit}>
								Confirm
							</Button>
						</div>
					</Grid>
				</CardContent>
			</Card>
		</Container >
	);
}

export default ConfirmationPageView;