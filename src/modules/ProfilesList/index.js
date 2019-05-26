import { connect } from 'react-redux';
import { onLoad, getUsers } from './actions';
import ProfilesList from './components/ProfilesList';

const mapStateToProps = state => ({
    listData: state.profiles.list,
    isLoading: state.profiles.loading,
    hasError: state.profiles.error !== null,
    errorMessage: state.profiles.error,
});

const mapDispatchToProps = dispatch => ({
    onLoad: () => {
        dispatch(onLoad());
        dispatch(getUsers());
    },
    onUpdate: () => {
        dispatch(getUsers());
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProfilesList);
