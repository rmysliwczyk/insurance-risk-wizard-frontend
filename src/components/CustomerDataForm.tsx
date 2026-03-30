import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'

export default function CustomerDataForm() {
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
					<TextField
						name="firstName"
						id="first-name"
						label="First name (required)"
						variant="outlined"
						fullWidth
					/>
				</Grid>
				<Grid size={{ xs: 12, sm: 6 }}>
					<TextField
						name="lastName"
						id="last-name"
						label="Last name (required)"
						variant="outlined"
						fullWidth
					/>
				</Grid>
				<Grid size={{ xs: 12, sm: 6 }}>
					<TextField
						name="age"
						id="age"
						label="Age (required)"
						fullWidth
						slotProps={{
							htmlInput: { inputMode: 'numeric' },
						}}
					/>
				</Grid>
				<Grid size={{ xs: 12, sm: 6 }}>
					<TextField
						name="city"
						id="city"
						label="City (required)"
						variant="outlined"
						fullWidth
					/>
				</Grid>
			</Grid>
		</Box>
	)
}
