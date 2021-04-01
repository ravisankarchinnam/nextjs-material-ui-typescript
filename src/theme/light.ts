import { createMuiTheme } from "@material-ui/core/styles";
import createPalette from "@material-ui/core/styles/createPalette";
import BaseTheme from "./theme";

const LightTheme = createMuiTheme({
	...BaseTheme,
	palette: createPalette({
		type: "light",

		primary: {
			main: "#000000",
			contrastText: "#ffffff",
		},

		background: {
			default: "#f5f5f5",
			paper: "#ffffff",
		},
		text: {
			primary: "#000000",
			secondary: "#ffffff",
		},
	}),
});

export default LightTheme;
