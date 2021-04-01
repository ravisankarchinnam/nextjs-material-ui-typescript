import { createMuiTheme } from "@material-ui/core/styles";
import createPalette from "@material-ui/core/styles/createPalette";
import BaseTheme from "./theme";

const DarkTheme = createMuiTheme({
	...BaseTheme,
	palette: createPalette({
		type: "dark",

		primary: {
			main: "#ffffff",
			contrastText: "#000000",
		},

		background: {
			default: "#202020",
			paper: "#000000",
		},
		text: {
			primary: "#ffffff",
			secondary: "#202020",
		},
	}),
});

export default DarkTheme;
