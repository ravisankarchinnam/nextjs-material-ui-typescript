import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeOptions } from "@material-ui/core";
import createPalette from "@material-ui/core/styles/createPalette";

const THEME_WHITE_COLOR = "#FFFFFF";
const THEME_BLACK_COLOR = "#000000";
const THEME_GRAY_COLOR = "#202020";
const THEME_BACKGROUND_COLOR = "#F5F5F5";
const THEME_SECONDARY_COLOR = "#17c5c7";
const THEME_DIVIDER_COLOR = "#a1a1a1";

const lightPaletteOptions = {
	primary: {
		main: THEME_BLACK_COLOR,
		contrastText: THEME_WHITE_COLOR,
	},

	background: {
		default: THEME_BACKGROUND_COLOR,
		paper: THEME_WHITE_COLOR,
	},
	text: {
		primary: THEME_BLACK_COLOR,
	},
};

const darkPaletteOptions = {
	primary: {
		main: THEME_WHITE_COLOR,
		contrastText: THEME_BLACK_COLOR,
	},

	background: {
		default: THEME_GRAY_COLOR,
		paper: THEME_BLACK_COLOR,
	},
	text: {
		primary: THEME_WHITE_COLOR,
	},
};

const getTheme = (dark: boolean): ThemeOptions => {
	const paletteColors = dark ? darkPaletteOptions : lightPaletteOptions;
	return {
		palette: createPalette({
			type: dark ? "dark" : "light",

			...paletteColors,

			common: {
				black: THEME_BLACK_COLOR,
				white: THEME_WHITE_COLOR,
			},
			secondary: {
				main: THEME_SECONDARY_COLOR,
			},
			divider: THEME_DIVIDER_COLOR,
		}),
	};
};

export const darkTheme = createMuiTheme(getTheme(true));
export const lightTheme = createMuiTheme(getTheme(false));

export default darkTheme;
