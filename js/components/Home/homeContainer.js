import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './home';
import { getDestinyUserProfileAction } from './homeActions';

const mapStateToProps = (state, ownProps) => {
    return {
        home : state.home,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getDestinyUserProfileAction
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
