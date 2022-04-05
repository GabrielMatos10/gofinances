import * as React from "react";
import "intl";
import "intl/locale-data/jsonp/pt-BR";
import AppLoading from "expo-app-loading";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";

import {
	useFonts,
	Poppins_400Regular,
	Poppins_500Medium,
	Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import theme from "./src/global/styles/theme";
import { Routes } from "./src/routes"

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SignIn } from "./src/screens/SignIn";

import { AuthProvider, useAuth } from "./src/hooks/auth";

export default function App() {
	const [fontsLoaded] = useFonts({
		Poppins_400Regular,
		Poppins_500Medium,
		Poppins_700Bold,
	});

	const {userStorageLoading} = useAuth()

	if (!fontsLoaded || userStorageLoading) {
		return <AppLoading />;
	}

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<StatusBar barStyle="light-content" />
			<ThemeProvider theme={theme}>
					<AuthProvider>
						<Routes />
					</AuthProvider>
			</ThemeProvider>
		</GestureHandlerRootView>
	);
}
