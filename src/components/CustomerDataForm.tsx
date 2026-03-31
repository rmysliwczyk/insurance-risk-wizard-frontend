import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'

import { type FormComponentProps } from '../types.ts'

import { Controller } from 'react-hook-form'

export default function CustomerDataForm({
	control,
	formState,
}: FormComponentProps) {
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
						name="firstName"
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
								label="First name"
								variant="outlined"
								fullWidth
							/>
						)}
					/>
				</Grid>
				<Grid size={{ xs: 12, sm: 6 }}>
					<Controller
						name="lastName"
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
								label="Last name"
								variant="outlined"
								fullWidth
							/>
						)}
					/>
				</Grid>
				<Grid size={{ xs: 12, sm: 6 }}>
					<Controller
						name="age"
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
								label="Age"
								variant="outlined"
								fullWidth
								slotProps={{
									htmlInput: { inputMode: 'numeric' },
								}}
							/>
						)}
					/>
				</Grid>
				<Grid size={{ xs: 12, sm: 6 }}>
					<Controller
						name="city"
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
								label="City"
								variant="outlined"
								fullWidth
							/>
						)}
					/>
				</Grid>
			</Grid>
		</Box>
	)
}
