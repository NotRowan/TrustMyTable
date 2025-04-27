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

export const FloatingButton = ({ icon, onPress, label }) => {
	// Initialisations ---------------------
	// State -------------------------------
	const [isPressed, setIsPressed] = useState(false);
	// Handlers ----------------------------
	const handlePressed = () => {
		setIsPressed(true);
	};

	const handleNotPressed = () => {
		setIsPressed(false);
	};

	// View --------------------------------
	return (
		<Pressable
			style={[buttonStyles.addFriendButton, { opacity: isPressed ? 0.5 : 1 }]}
			onPressIn={handlePressed}
			onPressOut={handleNotPressed}
			onPress={onPress}
		>
			{icon}
			{label && <Text style={buttonStyles.label}>{label}</Text>}
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
