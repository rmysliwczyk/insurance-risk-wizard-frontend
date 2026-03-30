import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { type SelectChangeEvent } from '@mui/material/Select'
import TextField from '@mui/material/TextField'

import { InsuranceType, type InsuranceDetailsFormProps } from '../types.ts'

export default function InsuranceDetailsForm({
	insuranceType,
	setInsuranceType,
}: InsuranceDetailsFormProps) {
	return (
		<Box
			component="form"
			autoComplete="off"
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<Grid container spacing={1}>
				<Grid size={{ xs: 12, sm: 6 }}>
					<FormControl fullWidth>
						<InputLabel id="insurance-type">
							Insurance type
						</InputLabel>
						<Select
							labelId="insurance-type"
							id="insurance-type-select"
							label="Insurance type"
							value={insuranceType}
							onChange={(event: SelectChangeEvent) => {
								setInsuranceType(
									event.target.value as InsuranceType
								)
							}}
						>
							{Object.keys(InsuranceType).map(
								(insuranceTypeOption) => (
									<MenuItem value={insuranceTypeOption}>
										{insuranceTypeOption}
									</MenuItem>
								)
							)}
						</Select>
					</FormControl>
				</Grid>
				{insuranceType == InsuranceType.Car && (
					<Grid size={{ xs: 12, sm: 6 }}>
						<TextField
							name="vehicleProductionYear"
							id="vehicle-production-year"
							label="Vehicle production year"
							fullWidth
							slotProps={{
								htmlInput: { inputMode: 'numeric' },
							}}
						/>
					</Grid>
				)}
				<Grid size={{ xs: 12, sm: 6 }}>
					<TextField
						name="coverageAmount"
						id="coverage-amount"
						label="Coverage amount"
						fullWidth
						slotProps={{
							htmlInput: { inputMode: 'numeric' },
						}}
					/>
				</Grid>
				<Grid
					size="grow"
					sx={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<FormGroup>
						<FormControlLabel
							control={<Checkbox />}
							label="Add additional options"
						/>
					</FormGroup>
				</Grid>
			</Grid>
		</Box>
	)
}
