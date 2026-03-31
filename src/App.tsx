import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Pagination from '@mui/material/Pagination'
import Typography from '@mui/material/Typography'

import CustomerDataForm from './components/CustomerDataForm'
import InsuranceDetailsForm from './components/InsuranceDetailsForm'
import Summary from './components/Summary'

import {
	schema,
	FormStep,
	InsuranceType,
	RiskLevel,
	type FormInput,
} from './types.ts'

import { useForm } from 'react-hook-form'
import { useState, useEffect} from 'react'
import { zodResolver } from '@hookform/resolvers/zod'

function App() {
	const [formStep, setFormStep] = useState<FormStep>(FormStep.CustomerData)
	const [validatedFormData, setValidatedFormData] =
		useState<FormInput | null>(null)
	const [summaryAvailable, setSummaryAvailable] = useState<boolean>(false)
	const [riskLevel, setRiskLevel] = useState<RiskLevel | null>(null)
	const [fetchError, setFetchError] = useState<boolean | null>(null)
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
		setValidatedFormData(data)
		console.log('Form sent the following data:', data)
		setSummaryAvailable(true)
		setFormStep(FormStep.Summary)
		setRiskLevel(null)
		setFetchError(null)
		getRiskLevel(data)
	}

	async function getRiskLevel(data: FormInput) {
		const url = new URL(
			`${await import.meta.env['VITE_API_URL']}/calculate-risk/`
		)
		const res = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		})
		if (res.ok) {
			const resData = await res.json()
			setRiskLevel(resData.riskLevel)
			setFetchError(false)
		} else {
			setFetchError(true)
		}
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
				<Typography
					sx={{
						textAlign: 'center',
						typography: { xs: 'h4', sm: 'h2' },
						mb: 3,
					}}
				>
					Insurance Risk Wizard
				</Typography>
				<form
					onSubmit={handleSubmit(onSubmit)}
					id="risk-form"
					autoComplete="off"
				>
					<Box
						sx={{
							maxWidth: { xs: '350px', sm: '550px' },
							mx: 3,
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
							<Summary
								data={validatedFormData}
								riskLevel={riskLevel}
								fetchError={fetchError}
							/>
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
					page={formStep}
					count={
						summaryAvailable
							? FormStep.Summary
							: FormStep.InsuranceDetails
					}
					onChange={(_, page) => setFormStep(page)}
				/>
				{Object.values(formState.errors).length > 0 && (
					<Alert severity="warning">
						Some of the values are incorrect. Please check the form.
					</Alert>
				)}
				<Button type="submit" variant="contained" form="risk-form">
					Calculate risk
				</Button>
			</Container>
		</>
	)
}

export default App
