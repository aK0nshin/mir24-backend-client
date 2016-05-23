import React from 'react';
import Popover from 'material-ui/Popover';
import FontIcon from 'material-ui/FontIcon';

const InfoDropdown = React.createClass({
    getInitialState: function (){
        return {
            opened:false
        }
    },
    handleEnter: function(event) {
        event.preventDefault();
        this.setState({
            opened: true,
            anchorEl: event.currentTarget,
        });
    },
    handleLeave: function () {
        this.setState({
            opened: false
        });
    },

    render: function() {
        return <div>
            <FontIcon onTouchTap={this.handleEnter} className="material-icons" style={{color:'#03A9F4', cursor:'pointer'}}>info_outline</FontIcon>
        <Popover
            open={this.state.opened}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            animated={false}
            onRequestClose={this.handleLeave}
            style={{padding: "5px 10px"}}
        >
            ID: {this.props.id}
            </Popover>
            </div>
    }
});
export default InfoDropdown;

