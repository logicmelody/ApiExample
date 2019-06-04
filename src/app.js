import React, { Component } from 'react';
import { Provider } from 'react-redux';
import initializeStore from './initialize-store';

import Main from './components/main';

const store = initializeStore();

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Main />
			</Provider>
		);
	}
}

export default App;
