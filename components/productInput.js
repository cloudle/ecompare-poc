import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Button, Input } from 'react-universal-ui';
import { colors, } from '../utils';

const groupBorderRadius = 4;

export default class ProductInput extends Component {
	render() {
		return <View style={styles.container}>
			<Input
				forceFloating floatingLabel="Enter a product link"
				wrapperStyle={{
					backgroundColor: '#ffffff',
					borderTopLeftRadius: groupBorderRadius, borderTopRightRadius: groupBorderRadius, }}/>
			<View style={{ flexDirection: 'row', }}>
				<Input
					hint="another product link" hintColor="#fefefe"
					style={{ height: 50, }}
					wrapperStyle={{
						flex: 1, backgroundColor: '#ffffff', height: 50,
						borderBottomLeftRadius: groupBorderRadius, overflow: 'hidden', }}/>
				<Button
					title="GO"
					wrapperStyle={{
						borderTopLeftRadius: 0, borderBottomLeftRadius: 0,
						backgroundColor: colors.secondary }}
					innerStyle={{ flex: 1, paddingHorizontal: 30, }}/>
			</View>
		</View>;
	}
}

const styles = StyleSheet.create({
	container: {
		marginVertical: 20,
	},
});