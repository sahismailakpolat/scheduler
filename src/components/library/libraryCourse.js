import React, { Component } from 'react';
import Icon from '../icon';
import Arrow from '../arrow';
import Action from '../action';
class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <div className="libray-course__title-check">
                    <label className="library-course__title">Problem Solving</label>
                    {Icon('fas fa-check', 'library-course__icon')}
                </div>
                <Arrow className="library-course__arrow" />
                <Action className="library-course__action" />
                {Icon('fas fa-plus-circle', 'libray-course__icon')}
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Hersey cok guzel olacak sadece biraz sabir Sahismail. Biliyorum bazi seyler zor senin icin ama sadece birazcik sabret aslanim</p>
                </div>

            </div>
        )
    }
}

export default LibraryCourse;