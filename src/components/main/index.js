import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	View,
	Text,
	Button,
	Alert,
} from 'react-native';
import { connect } from 'react-redux';

import {
	fetchData,
} from '../../actions/api-actions';

import {
	LoadingStatusEnum,
} from '../../utils/utils';

import styles from './styles';

import FullScreenLoading from '../full-screen-loading';

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

		const {
			loadingStatus,
		} = this.props;

		return (
			<View style={styles.container}>
				<View style={styles.contentContainer}>
					<Button
						title='Fetch Data'
						onPress={_handlePressFetchDataButton}
					/>

					{_renderData()}
				</View>

				<FullScreenLoading
					hidden={!(LoadingStatusEnum.LOADING === loadingStatus)}
				/>
			</View>
		);
	}

	componentDidUpdate(prevProps) {
		const {
			loadingStatus,
			loadingStatusMessage,
		} = this.props;

		if (LoadingStatusEnum.LOADING === prevProps.loadingStatus) {
			if (LoadingStatusEnum.FAILED === loadingStatus) {
				Alert.alert(JSON.stringify(loadingStatusMessage));
			}
		}
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
		loadingStatus: api.get("loadingStatus"),
		loadingStatusMessage: api.get("loadingStatusMessage"),
	};
};

const mapDispatchToProps = {
	fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
