import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import { useChangeTheme } from "~src/theme";
import { useTheme } from "@material-ui/core/styles";

export default function Index() {
	const theme = useTheme();
	const changeTheme = useChangeTheme();
	return (
		<Container maxWidth="sm">
			<button
				onClick={changeTheme}
			>
				{theme.palette.type === "light" ? "Toggle dark mode" : "Toggle light mode"}
			</button>
			<Box my={4}>
				<Typography variant="h4" component="h1" gutterBottom>
					Next.js with TypeScript example
				</Typography>
				<Link href="/about" color="secondary">
					Go to the about page
				</Link>
				<ProTip />
				<Copyright />
			</Box>
		</Container>
	);
}
