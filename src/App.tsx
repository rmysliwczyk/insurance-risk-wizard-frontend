import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Pagination from '@mui/material/Pagination'
import Typography from '@mui/material/Typography'

import CustomerDataForm from './components/CustomerDataForm'
import InsuranceDetailsForm from './components/InsuranceDetailsForm'
import Summary from './components/Summary'

import { schema, FormStep, InsuranceType, type FormInput } from './types.ts'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'

function App() {
	const [formStep, setFormStep] = useState<FormStep>(FormStep.CustomerData)
	const [summaryAvailable] = useState<boolean>(true)
	const { handleSubmit, control, watch, formState } = useForm<FormInput>({
		defaultValues: {
			firstName: '',
			lastName: '',
			age: '' as any as number,
			city: '',
			insuranceType: InsuranceType.Car,
			vehicleProductionYear: '' as any as number,
			coverageAmount: '' as any as number,
			additionalOptions: false,
		},
		resolver: zodResolver(schema),
	})

	function onSubmit(data: FormInput) {
		console.log(data)
	}

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
				<form
					onSubmit={handleSubmit(onSubmit)}
					id="risk-form"
					autoComplete="off"
				>
					<Box
						sx={{
							maxWidth: '640px',
							margin: '5px',
						}}
					>
						{formStep == FormStep.CustomerData ? (
							<CustomerDataForm
								control={control}
								formState={formState}
							/>
						) : formStep == FormStep.InsuranceDetails ? (
							<InsuranceDetailsForm
								control={control}
								formState={formState}
								watch={watch}
							/>
						) : formStep == FormStep.Summary ? (
							<Summary />
						) : (
							<Alert severity="error">
								{
									'Something went wrong. Requested form page was not found.'
								}
							</Alert>
						)}
					</Box>
				</form>
				<Pagination
					count={
						summaryAvailable
							? FormStep.Summary
							: FormStep.InsuranceDetails
					}
					onChange={(_, page) => setFormStep(page)}
				/>
				<input type="submit" form="risk-form" />
			</Container>
		</>
	)
}

export default App
