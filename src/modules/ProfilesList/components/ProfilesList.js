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
        const { listData } = this.props;

        return (
            <Fragment>
                <button onClick={this.onUpdate}>
                    Update list data
                </button>

                <List items={listData}/>

            </Fragment>
        );
    }
}

export default ProfilesList;
