import { Pressable, Text, View } from 'react-native';
import { useState } from 'react';

import { buttonStyles } from './Stylesheet';

export const Button = ({ label, icon, onClick, styleLabel, styleButton }) => {
	// Initialisations ---------------------
	// State -------------------------------
	// Handlers ----------------------------
	// View --------------------------------
	return (
		<Pressable
			onPress={onClick}
			style={[buttonStyles.button, styleButton]}
		>
			{icon ? icon : null}
			<Text style={[buttonStyles.label, styleLabel]}>{label}</Text>
		</Pressable>
	);
};

export const IconButton = ({ icon, onClick }) => {
	// Initialisations ---------------------
	// State -------------------------------
	// Handlers ----------------------------
	// View --------------------------------
	return (
		<Pressable
			onPress={onClick}
			style={buttonStyles.iconButton}
		>
			{icon}
		</Pressable>
	);
};

export const ButtonTray = ({ children }) => {
	// Initialisations ---------------------
	// State -------------------------------
	// Handlers ----------------------------
	// View --------------------------------
	return <View style={buttonStyles.buttonTray}>{children}</View>;
};
