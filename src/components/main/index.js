import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	View,
	Text,
	Button,
} from 'react-native';
import { connect } from 'react-redux';

import {
	fetchData,
} from '../../actions/api-actions';

import styles from './styles';

class Main extends Component {
	_handlePressFetchDataButton = () => {
		this.props.fetchData();
	}

	_renderData = () => {
		const {
			data,
		} = this.props;

		if (data) {
			return (
				<Text style={styles.responseText}>
					{`Response:\n ${JSON.stringify(data)}`}
				</Text>
			);
		}
	}

	render() {
		const {
			_handlePressFetchDataButton,
			_renderData,
		} = this;

		return (
			<View style={styles.container}>
				<Button
					title='Fetch Data'
					onPress={_handlePressFetchDataButton}
				/>

				{_renderData()}
			</View>
		);
	}
}

Main.propTypes = {

};

Main.defaultProps = {

};

const mapStateToProps = (state) => {
	const {
		api,
	} = state;

	return {
		data: api.get("data"),
	};
};

const mapDispatchToProps = {
	fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
