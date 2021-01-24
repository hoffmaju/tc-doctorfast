import React from 'react';
import { Container, Typography, Button, Card, CardContent, Grid, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
  form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
}));
//<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSedsNBZzY4troFL7LukvQhunhfmMv8dYX9H8N7xdxs58EbH6g/viewform?embedded=true" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0">Wird geladen…</iframe>
function FormPageView(props) {
	const classes = useStyles();
	const googleFormLink = ls.get('googleFormLink');
	
	function handleSubmit(event) {
		event.preventDefault();
		history.push('/explanation');
    }
	
	return (
		<Container component="main" maxWidth="md">
			<div>
				<Typography align='center' component="h1" variant="h5" >
					Medical History
				</Typography>
			</div>
			<Card className={classes.root}>
				<CardContent>
					<Typography align='center' >
							Please fill out the medical history form below and click on "Send". Then please click on "Continue" to read through the explanation of
							the procedure.
						</Typography>
					<Grid container spacing={2} justify="center" className={classes.paper}>
						<iframe src={googleFormLink} width="700" height="520" frameBorder="0" marginHeight="0" marginWidth="0">Wird geladen…</iframe>
						<div align="center">
							<Button variant="contained" color="primary" style={{float: 'center'}} onClick={handleSubmit}>
								Continue
							</Button>
						</div>
					</Grid>
					<Button variant="contained" color="primary" style={{float: 'left', marginBottom: '18px' }} to={'/appointment/:appointmentID/:procedureID'} component={Link}>
						Back
					</Button>
				</CardContent>
			</Card>
		</Container >
	)
}

export default FormPageView;