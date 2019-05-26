import React, { Fragment } from 'react';
import List from '../../../components/List';

class ProfilesList extends React.Component {
    componentDidMount() {
        this.props.onLoad();
    }

    onUpdate = () => {
        this.props.onUpdate();
    }

    render() {
        const {
            listData, isLoading, errorMessage, hasError,
        } = this.props;

        return (
            <Fragment>
                <button onClick={this.onUpdate}>
                    Update list data
                </button>

                {isLoading === true && <h4>Loading...</h4> }
                {hasError === true && <h4>{errorMessage}</h4> }
                {isLoading === false && <List items={listData}/>}

            </Fragment>
        );
    }
}

export default ProfilesList;
