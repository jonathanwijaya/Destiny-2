import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Clan from './clan';
import { getDestinyClanProfileAction } from './clanActions';

const mapStateToProps = (state, ownProps) => {
    return {
        clan : state.clan,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getDestinyClanProfileAction
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Clan);
