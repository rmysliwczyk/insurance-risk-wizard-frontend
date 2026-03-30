import Alert from '@mui/material/Alert'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Pagination from '@mui/material/Pagination'
import Typography from '@mui/material/Typography'

import CustomerDataForm from './components/CustomerDataForm'
import InsuranceDetailsForm from './components/InsuranceDetailsForm'
import Summary from './components/Summary'

import { useState } from 'react'

enum FormStep {
	CustomerData = 1,
	InsuranceDetails,
	Summary,
}

function App() {
	const [formStep, setFormStep] = useState<FormStep>(FormStep.CustomerData)
	const [summaryAvailable] = useState<boolean>(true)

	return (
		<>
			<CssBaseline />
			<Container
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Typography variant="h1">Insurance Risk Wizard</Typography>
				{formStep == FormStep.CustomerData ? (
					<CustomerDataForm />
				) : formStep == FormStep.InsuranceDetails ? (
					<InsuranceDetailsForm />
				) : formStep == FormStep.Summary ? (
					<Summary />
				) : (
					<Alert severity="error">
						Something went wrong. Requested form page was not found.
					</Alert>
				)}
				<Pagination
					count={
						summaryAvailable
							? FormStep.Summary
							: FormStep.InsuranceDetails
					}
					onChange={(_, page) => setFormStep(page)}
				/>
			</Container>
		</>
	)
}

export default App
