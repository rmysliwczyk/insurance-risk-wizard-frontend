import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { RiskLevel, type SummaryComponentProps } from '../types.ts'

interface DisplayNames {
	[k: string]: string
}
const displayNames: DisplayNames = {
	firstName: 'First name',
	lastName: 'Last name',
	age: 'Age',
	city: 'City',
	insuranceType: 'Insurance type',
	vehicleProductionYear: 'Vehicle production year',
	coverageAmount: 'Coverage amount',
	additionalOptions: 'Additional options',
}

export default function Summary({
	data,
	riskLevel,
	fetchError,
}: SummaryComponentProps) {
	return (
		<>
			<Grid container columnSpacing={6}>
				{data
					? Object.entries(data).map(([key, value]) => {
							return (
								<Grid
									key={key}
									size={{ xs: 12, sm: 6 }}
									sx={{
										display: 'flex',
										flexDirection: 'row',
										alignItems: 'center',
										justifyContent: 'space-between',
										overflow: 'auto',
									}}
								>
									<Typography variant="subtitle2">
										{
											displayNames[
												key as keyof DisplayNames
											]
										}
									</Typography>
									<Typography variant="body1">
										{String(value)
											.replace('false', 'No')
											.replace('true', 'Yes')}
									</Typography>
								</Grid>
							)
						})
					: 'Loading...'}
				<Grid size={12}>
					{riskLevel == null && fetchError == null ? (
						<Box
							sx={{
								my: 2,
								display: 'flex',
								justifyContent: 'center',
							}}
						>
							<CircularProgress />
						</Box>
					) : (
						<Alert
							severity={
								riskLevel == RiskLevel.Low
									? 'success'
									: riskLevel == RiskLevel.Medium
										? 'warning'
										: 'error'
							}
							sx={{ justifyContent: 'center' }}
						>
							{fetchError == false
								? `Risk level is ${riskLevel}`
								: 'There was an unexpected error.'}
						</Alert>
					)}
				</Grid>
			</Grid>
		</>
	)
}
