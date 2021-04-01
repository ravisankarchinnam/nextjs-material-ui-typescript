import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { lightTheme, darkTheme } from "../theme";

const TOGGLE_THEME = "TOGGLE_THEME";
const LIGHT_THEME_TYPE = "light";
const DARK_THEME_TYPE = "dark";

interface ThemeProviderProps {
	children: React.ReactNode
}

const ThemeDispatchContext = React.createContext<any>(null);

export const ThemeContextProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

	const themeInitialOptions = {
		paletteType: prefersDarkMode ? DARK_THEME_TYPE : LIGHT_THEME_TYPE,
	};

	const [state, dispatch] = React.useReducer((state: any, action: any) => {
		switch (action.type) {
			case TOGGLE_THEME:
				return {
					...state,
					paletteType: action.payload,
				};
			default:
				throw new Error();
		}
	}, () => themeInitialOptions);

	const memoizedTheme = React.useMemo(() => {
		return state.paletteType === LIGHT_THEME_TYPE ? lightTheme : darkTheme;
	}, [state.paletteType]);

	return (
		<MuiThemeProvider theme={memoizedTheme}>
			<ThemeDispatchContext.Provider value={dispatch}>
				{children}
			</ThemeDispatchContext.Provider>
		</MuiThemeProvider>
	);
};

export default ThemeContextProvider;

export const useChangeTheme = () => {
	const dispatch = React.useContext(ThemeDispatchContext);
	const theme = useTheme();
	return React.useCallback(() =>
			dispatch({
				type: TOGGLE_THEME,
				payload: theme.palette.type === LIGHT_THEME_TYPE ? DARK_THEME_TYPE : LIGHT_THEME_TYPE,
			}),
		[theme.palette.type, dispatch]);
};
