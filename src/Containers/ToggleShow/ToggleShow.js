import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toggleShow} from '../../actions/index';
import {bindActionCreators} from 'redux';
import './ToggleShow.css';

class ToggleShow extends Component {

    render(){
        return(
            <div className="toggle-show">
                <p className="toggle-show__text">Hide completed tasks?</p>
                <input className="toggle-show__check" type="checkbox" onClick={this.props.toggleShow}/>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    toggleShow: state.toggleShow
});

const mapDispatchToProps = dispatch=>{
    return bindActionCreators({toggleShow}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleShow);