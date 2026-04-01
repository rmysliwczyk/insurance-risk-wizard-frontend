import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#BD2F2C',
		},
		secondary: {
			main: '#54585A',
		},
		text: {
			primary: '#54585A',
		},
	},
	colorSchemes: {
		dark: {
			palette: {
				secondary: {
					main: '#F7F7F7',
				},
			},
		},
	},
})

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline enableColorScheme />
			<App />
		</ThemeProvider>
	</StrictMode>
)
