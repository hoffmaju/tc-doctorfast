import React from 'react';
import { Container, Typography, Button, Card, CardContent } from '@material-ui/core';
import history from '../router/history';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import ls from 'local-storage'
import { appointmentURL } from '../config';


const useStyles = makeStyles({
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
});

function WelcomePageView(props) {
	const classes = useStyles();
	let { appointmentID, procedureID } = useParams();
	
	function getAppointmentData(name, email, department, procedure) {
		console.log(appointmentID)
		console.log(procedureID)
		axios.get(appointmentURL + '/appointment', { params: {"appointmentID": appointmentID, "procedureID": procedureID} }).then(response => {
			console.log(response.data[0])
			ls.set('appointmentID', response.data[0]._id)
			ls.set('patientName', response.data[0].name)
			ls.set('date', response.data[0].date)
			if (procedureID == response.data[0].procedure[0]._id) {
				console.log("0")
				ls.set('procedureName', response.data[0].procedure[0].name)
				ls.set('infoName', response.data[0].procedure[0].information[0].name)
				ls.set('infoExplanation', response.data[0].procedure[0].information[0].explanation)
				ls.set('infoExplanationVideo', response.data[0].procedure[0].information[0].explanationVideo)
				ls.set('googleFormLink', response.data[0].procedure[0].information[0].googleFormLink)
				console.log(response.data[0].procedure[0].name)
				console.log(response.data[0].procedure[0].information[0].name)
				console.log(response.data[0].procedure[0].information[0].explanation)
				console.log(response.data[0].procedure[0].information[0].explanationVideo)
				console.log(response.data[0].procedure[0].information[0].googleFormLink)
			} else {
				console.log("1")
				ls.set('procedureName', response.data[0].procedure[1].name)
				ls.set('infoName', response.data[0].procedure[1].information[0].name)
				ls.set('infoExplanation', response.data[0].procedure[1].information[0].explanation)
				ls.set('infoExplanationVideo', response.data[0].procedure[1].information[0].explanationVideo)
				ls.set('googleFormLink', response.data[0].procedure[1].information[0].googleFormLink)
				console.log(response.data[0].procedure[1].name)
				console.log(response.data[0].procedure[1].information[0].name)
				console.log(response.data[0].procedure[1].information[0].explanation)
				console.log(response.data[0].procedure[1].information[0].explanationVideo)
				console.log(response.data[0].procedure[1].information[0].googleFormLink)
			}
		}).catch(err => {
			console.error(err);
		})
		history.push('/form');
	}
	
		return (
			<Container component="main" maxWidth="md">
				<div className="WelcomePageView">
					<Typography align='center' component="h1" variant="h5" style={{ marginTop: '22px' }}>
						Welcome to the MRI!
					</Typography>
				</div>
				<Card className={classes.root}>
					<CardContent>
						<Typography align='center' >
							Thank you for choosing the MRI! To make your appointment as easy and as comfortable as possible, please read through the following  
							patient guide. Here, you will have the possibility to upload requested files, fill in your medical data and inform yourself about your 
							upcoming appointment with us. If you still have questions, you will also have the opportunity to talk to a doctor at your appointment.
						</Typography>
						<div align='center'>
								<Button variant="contained" color="primary" onClick={getAppointmentData}>
									Start
								</Button>
						</div>
					</CardContent>
				</Card>
			</Container >
		);
}

export default WelcomePageView;