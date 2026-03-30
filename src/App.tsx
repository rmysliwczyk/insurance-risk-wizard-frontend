import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Pagination from '@mui/material/Pagination'
import Typography from '@mui/material/Typography'

import CustomerDataForm from './components/CustomerDataForm'
import InsuranceDetailsForm from './components/InsuranceDetailsForm'
import Summary from './components/Summary'

import { FormStep, InsuranceType } from './types.ts'

import { useState } from 'react'

function App() {
	const [formStep, setFormStep] = useState<FormStep>(FormStep.CustomerData)
	const [summaryAvailable] = useState<boolean>(true)
	const [insuranceType, setInsuranceType] = useState<InsuranceType>(
		InsuranceType.Car
	)

	return (
		<>
			<CssBaseline />
			<Container
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 1,
				}}
			>
				<Typography variant="h1">Insurance Risk Wizard</Typography>
				<Box
					sx={{
						maxWidth: '640px',
						margin: '5px',
					}}
				>
					{formStep == FormStep.CustomerData ? (
						<CustomerDataForm />
					) : formStep == FormStep.InsuranceDetails ? (
						<InsuranceDetailsForm
							insuranceType={insuranceType}
							setInsuranceType={setInsuranceType}
						/>
					) : formStep == FormStep.Summary ? (
						<Summary />
					) : (
						<Alert severity="error">
							Something went wrong. Requested form page was not
							found.
						</Alert>
					)}
				</Box>
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
