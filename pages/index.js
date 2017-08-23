import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import { TouchableOpacity, View, Image, Text, StyleSheet, } from 'react-native';
import { Button, Input } from 'react-universal-ui';
import Link from 'next/link';

import Layout from '../components/layout';
import store from '../store';
import * as appActions from '../store/action/app';

type Props = {
	dispatch?: Function,
	counter?: number,
};

@withRedux(store, ({ app }) => {
	return {
		counter: app.counter,
	};
})

export default class IndexPage extends Component {
	props: Props;

	render() {
		return <Layout>
			<Text>Hi</Text>
			<Link href="counter"><a>Goto Counter Page!</a></Link>
		</Layout>;
	}
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
		justifyContent: 'center', alignItems: 'center',
	},
});