import { TextField } from '@mui/material'

export default function FormLabelText({
	label,
	autoFocus,
	fullWidth,
}: {
	label: string
	autoFocus?: boolean
	fullWidth?: boolean
}) {
	return (
		<TextField
			autoFocus={autoFocus ?? false}
			color="primary"
			fullWidth={fullWidth ?? false}
			id="standard-basic"
			label={label}
			sx={{
				width: '280px',
				pt: '15px',
			}}
			variant="standard"
		/>
	)
}
