import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'

import { InsuranceType, type FormComponentProps } from '../types.ts'

import { Controller } from 'react-hook-form'

export default function InsuranceDetailsForm({
	control,
	formState,
	watch,
}: FormComponentProps) {
	const insuranceTypeField = watch
		? watch(['insuranceType'])
		: InsuranceType.Car

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<Grid container spacing={1}>
				<Grid size={{ xs: 12, sm: 6 }}>
					<Controller
						name="insuranceType"
						control={control}
						render={({ field }) => (
							<FormControl fullWidth>
								<InputLabel id="insurance-type">
									Insurance type
								</InputLabel>
								<Select
									inputRef={field.ref}
									value={field.value}
									onChange={field.onChange}
									error={Boolean(
										field.name in formState.errors
									)}
									labelId="insurance-type"
									label="Insurance type"
								>
									{Object.keys(InsuranceType).map(
										(insuranceTypeOption) => (
											<MenuItem
												value={insuranceTypeOption}
											>
												{insuranceTypeOption}
											</MenuItem>
										)
									)}
								</Select>
							</FormControl>
						)}
					/>
				</Grid>
				{insuranceTypeField == InsuranceType.Car && (
					<Grid size={{ xs: 12, sm: 6 }}>
						<Controller
							name="vehicleProductionYear"
							control={control}
							render={({ field }) => (
								<TextField
									name={field.name}
									inputRef={field.ref}
									value={field.value}
									onChange={field.onChange}
									error={Boolean(
										field.name in formState.errors
									)}
									helperText={
										formState.errors[field.name]?.message
									}
									label="Vehicle production year"
									variant="outlined"
									fullWidth
									slotProps={{
										htmlInput: { inputMode: 'numeric' },
									}}
								/>
							)}
						/>
					</Grid>
				)}
				<Grid size={{ xs: 12, sm: 6 }}>
					<Controller
						name="coverageAmount"
						control={control}
						render={({ field }) => (
							<TextField
								name={field.name}
								inputRef={field.ref}
								value={field.value}
								onChange={field.onChange}
								error={Boolean(field.name in formState.errors)}
								helperText={
									formState.errors[field.name]?.message
								}
								label="Coverage amount"
								variant="outlined"
								fullWidth
								slotProps={{
									htmlInput: { inputMode: 'numeric' },
								}}
							/>
						)}
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
					<Controller
						name="additionalOptions"
						control={control}
						render={({ field }) => (
							<FormGroup>
								<FormControlLabel
									name={field.name}
									inputRef={field.ref}
									value={field.value}
									onChange={field.onChange}
									control={<Checkbox />}
									label="Add additional options"
								/>
							</FormGroup>
						)}
					/>
				</Grid>
			</Grid>
		</Box>
	)
}
