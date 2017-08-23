import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Router from 'next/router';

import ProductInput from './productInput';
import { colors, sizes, iStyles } from '../utils/index';

type Props = {
	url?: Object,
};

export default class Navigation extends Component {
	props: Props;

	render() {
		return <View style={styles.container}>
			<View style={styles.topBarContainer}>
				<View style={[iStyles.contentContainer, styles.topBarContentContainer]}>
					<Text style={{ fontSize: 12, marginRight: 10, }}>by Cloud Le, August 2017</Text>
				</View>
			</View>
			<View style={[iStyles.contentContainer, styles.contentContainer]}>
				{this.renderLogo()}
				{this.renderInputs()}
			</View>
		</View>;
	}

	renderLogo() {
		return <View style={styles.logoContainer}>
			<TouchableOpacity
				onPress={() => Router.push('/')}>
				<Text style={styles.text}>ECOMPARE</Text>
			</TouchableOpacity>
		</View>;
	}

	renderInputs() {
		return <View style={styles.inputsContainer}>
			<ProductInput/>
		</View>;
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.main,
	},
	topBarContainer: {
		height: 50,
		backgroundColor: '#11252f',
	},
	topBarContentContainer: {
		alignItems: 'flex-end',
		paddingHorizontal: 10,
	},
	contentContainer: {
		flexDirection: 'row', paddingHorizontal: 10,
	},
	text: {
		color: '#ffffff',
	},
	logoContainer: {
		alignItems: 'center', justifyContent: 'center',
		marginRight: 20,
	},
	inputsContainer: {
		flex: 1,
	},
});