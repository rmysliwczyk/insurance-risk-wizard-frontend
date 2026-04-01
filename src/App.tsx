import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import Pagination from '@mui/material/Pagination'
import Typography from '@mui/material/Typography'

import { useColorScheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

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

import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'

function App() {
	// Hooks preparation section
	// Dark theme related
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
	const { mode, setMode } = useColorScheme()

	// General info and state related
	const [formStep, setFormStep] = useState<FormStep>(FormStep.CustomerData)
	const [summaryAvailable, setSummaryAvailable] = useState<boolean>(false)
	const [riskLevel, setRiskLevel] = useState<RiskLevel | null>(null)

	// Form data and validation
	const [validatedFormData, setValidatedFormData] =
		useState<FormInput | null>(null)
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
	// End of hooks preparation section

	// Functions and hook calling section
	// Dark theme related
	useEffect(() => {
		if (prefersDarkMode) {
			setMode('dark')
		} else {
			setMode('light')
		}
	}, [prefersDarkMode])

	function toggleColorSchemeMode() {
		if (mode == 'system') {
			if (prefersDarkMode) {
				setMode('light')
			} else {
				setMode('dark')
			}
		} else if (mode == 'light') {
			setMode('dark')
		} else {
			setMode('light')
		}
	}

	// General info and state related
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
			console.error('API returned the following error', await res.json())
			setFetchError(true)
		}
	}

	// Form data and validation
	function onSubmit(data: FormInput) {
		console.log('Form sent the following data:', data)

		setValidatedFormData(data)
		setSummaryAvailable(true)
		setFormStep(FormStep.Summary)
		setRiskLevel(null)
		setFetchError(null)
		getRiskLevel(data)
	}
	// End of functions and hook calling sections

	return (
		<>
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
						mb: 1,
					}}
				>
					Insurance Risk Wizard
				</Typography>
				<Button color="inherit" onClick={toggleColorSchemeMode}>
					<DarkModeIcon />
				</Button>
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
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
					}}
				>
					<Button
						href="https://www.linkedin.com/in/rafal-mysliwczyk"
						color="secondary"
					>
						<FontAwesomeIcon size="2x" icon={faGithub} />
					</Button>

					<Button
						href="https://github.com/rmysliwczyk"
						color="secondary"
					>
						<FontAwesomeIcon size="2x" icon={faLinkedin} />
					</Button>
				</Box>
			</Container>
		</>
	)
}

export default App
