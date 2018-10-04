import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Icon from "../icon";
import Arrow from "../arrow";
import Action from "../action";



class LibraryCourse extends Component {

    constructor(props) {
        super(props)

        this.state = {
            status: true
        }
    }

    renderDescription = function () {
        if (!this.state.status) {
            return (
                <div className="library-course__description">
                    <label>{this.props.title}</label>
                    <p>
                        {this.props.description}
                    </p>
                </div>
            )
        } else {

        }
    }.bind(this);

    handleCallback = function (status) {
        this.setState({ status })
    }.bind(this)

    render() {
        return (
            <div className="library-course">
                <div className="library-course__title-check">
                    <label className="library-course__title">Problem Solving</label>
                    {Icon("fas fa-check", "library-course__icon")}
                </div>
                <div className="library-course__line"></div>
                <Arrow callback={(status) => this.handleCallback(status)} id={this.props.id} className="library-course__arrow" />
                <Action onClick={() => this.props.toggleEnrolled(this.props.id)} className="library-course__action" />
                {this.renderDescription()}
            </div>
        );
    }
}

export default connect(null, actions)(LibraryCourse);
