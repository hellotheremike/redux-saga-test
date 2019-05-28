import { connect } from 'react-redux';
import { onLoad, setUsers } from './actions';
import ProfilesList from './components/ProfilesList';

const mapStateToProps = state => ({
    listData: state.profiles.list,
});

const mapDispatchToProps = dispatch => ({
    onLoad: () => {
        dispatch(onLoad());
        dispatch(setUsers());
    },
    onUpdate: () => {
        dispatch(setUsers());
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProfilesList);
