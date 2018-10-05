import React, { Component } from 'react';
import Icon from './icon';

class Action extends Component {

    handleAction = function () {
        this.props.onClick()
    }.bind(this);

    render() {
        return (
            <a
                id="action"
                onClick={() => this.handleAction()}
                className={`${this.props.className} action`}>
            </a>
        )
    }

}


export default Action;

// return (
        //     <button onClick={() => this.props.onClick()} className={`${this.props.className} action`}>
        //         {Icon('fas fa-plus-circle')}
        //         {/* fas fa-times-circle */}
        //     </button>
        // )