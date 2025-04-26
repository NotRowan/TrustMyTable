import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { Button, ButtonTray } from './Button';
import { formStyles } from './Stylesheet';

const Form = ({ children, buttons = [] }) => {
	// Initialisation ---------------
	// State ------------------------
	// Handlers ---------------------
	// View -------------------------
	return (
		<View style={formStyles.formContainer}>
			<View style={formStyles.formItems}>{children}</View>
			<ButtonTray>
				{buttons.map((btn, index) => (
					<Button
						key={index}
						label={btn.label}
						icon={btn.icon}
						onClick={btn.onClick}
					/>
				))}
			</ButtonTray>
		</View>
	);
};
const InputText = ({ label, value, onChange }) => {
	// Initialisation ---------------
	// State ------------------------
	// Handlers ---------------------
	// View -------------------------
	return (
		<View style={formStyles.item}>
			<Text style={formStyles.itemlabel}>{label}</Text>
			<TextInput
				value={value}
				onChangeText={onChange}
				style={formStyles.itemTextInput}
			/>
		</View>
	);
};
const InputDescription = ({ label, value, onChange }) => {
	// Initialisation ---------------
	// State ------------------------
	// Handlers ---------------------
	// View -------------------------
	return (
		<View style={styles.item}>
			<Text style={styles.itemlabel}>{label}</Text>
			<TextInput
				value={value}
				onChangeText={onChange}
				multiline={true}
				numberOfLines={4}
				style={styles.itemDescriptionInput}
			/>
		</View>
	);
};

const InputPassword = ({ label, value, onChange }) => {
	// Initialisation ---------------
	// State ------------------------
	// Handlers ---------------------
	// View -------------------------
	return (
		<View style={formStyles.item}>
			<Text style={formStyles.itemlabel}>{label}</Text>
			<TextInput
				value={value}
				onChangeText={onChange}
				style={formStyles.itemTextInput}
				secureTextEntry={true}
			/>
		</View>
	);
};

const InputSelect = ({ label, prompt, options, value, onChange }) => {
	// Initialisation ---------------
	// State ------------------------
	// Handlers ---------------------
	// View -------------------------
	return (
		<View style={formStyles.item}>
			<Text style={formStyles.itemlabel}>{label}</Text>
			<Picker
				mode="dropdown"
				selectedValue={value}
				onValueChange={onChange}
				style={formStyles.itemPicker}
			>
				<Picker.Item
					value={null}
					label={prompt}
				/>
				{options.map((option, index) => (
					<Picker.Item
						key={index}
						value={option.value}
						label={option.label}
					/>
				))}
			</Picker>
		</View>
	);
};

const styles = StyleSheet.create({
	formContainer: {
		gap: 10,
	},
	formItems: {
		gap: 5,
	},
	itemlabel: {
		color: 'grey',
		fontSize: 16,
		marginBottom: 5,
	},
	itemTextInput: {
		height: 50,
		paddingLeft: 10,
		fontSize: 16,
		backgroundColor: 'white',
		borderRadius: 7,
		borderWidth: 1,
		borderColor: 'lightgray',
	},
	itemDescriptionInput: {
		height: 120,
		padding: 10,
		fontSize: 16,
		backgroundColor: 'white',
		borderRadius: 7,
		borderWidth: 1,
		borderColor: 'lightgray',
		textAlignVertical: 'top',
	},
	itemPicker: {
		minHeight: 50,
	},
	itemTextBox: {
		paddingLeft: 10,
		height: 50,
		backgroundColor: '#f0f0f0',
		borderRadius: 7,
		justifyContent: 'center',
		alignItems: 'center',
	},
	itemText: {
		fontSize: 16,
		color: '#333',
	},
});
Form.InputText = InputText;
Form.InputSelect = InputSelect;
Form.InputPassword = InputPassword;
Form.InputDescription = InputDescription;
export default Form;
