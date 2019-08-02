import React from 'react';

import { goWatcherActionType } from './actions';
import { connect } from 'react-redux';

const App = (props) => {

  console.log(props);

  const { goWatcherActionType } = props;

  return (
    <div>
      <button onClick={goWatcherActionType}>click</button>
    </div>
  );
};

const mapStateToProps = state =>({
photos: state.photos.photos
});

const mapDispatchToProps = {
  goWatcherActionType
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
