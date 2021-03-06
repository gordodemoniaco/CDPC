import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "whitesmoke",
	},
	containerCenter: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "whitesmoke",
	},
	button: {
		marginHorizontal: 30,
		backgroundColor: "#228B22",
		borderRadius: 4,
		height: 52,
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 15,
		marginTop: 15,
	},
	buttonText: {
		color: 'white',
		fontWeight: '500',
	},
	logo: {
		alignSelf: "center",
		height: 180,
		width: 180,
		marginTop: 25,
		marginBottom: 15,
	},
	logoSmall: {
		alignSelf: "center",
		height: 60,
		width: 60,
		marginTop: 25,
		marginBottom: 15,
	},
	text: {
		fontSize: 16,
		textAlign: 'justify',
		color: '#363636',
		marginHorizontal: 15,
		marginTop: 20,
	},
	textCenter: {
		fontSize: 16,
		textAlign: 'center',
		color: '#363636',
		marginHorizontal: 15,
		marginTop: 20,
		marginBottom: 20,
	},
	textAbout: {
		textAlign: "justify",
		marginBottom: 25,
		marginHorizontal: 15,
		fontSize: 18,
		color: '#333333',
		lineHeight: 30,
	},
	textBold: {
		textAlign: "justify",
		marginBottom: 25,
		marginHorizontal: 15,
		fontSize: 18,
		fontWeight: 'bold',
		color: '#333333',
		lineHeight: 30,
	},
	title: {
		marginHorizontal: 15,
		marginTop: 25,
		marginBottom: 20,
		fontSize: 30,
		fontWeight: 'bold',
		color: '#111111',
	},
	titleAbout: {
		fontWeight: 'bold',
		fontSize: 22,
		color: '#111111',
		marginBottom: 10,
	},
	link: {
		fontSize: 20,
		textAlign: 'justify',
		color: "blue",
		marginHorizontal: 40,
		marginTop: 25,
		marginBottom: 25,
		textDecorationLine: 'underline',
	},
	horizontal: {
		alignItems: 'center', 
		flexDirection: 'row', 
		justifyContent: 'space-around',
	}
})
