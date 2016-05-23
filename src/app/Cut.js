import React from 'react';
import Popover from 'material-ui/Popover';
import FontIcon from 'material-ui/FontIcon';
import Ee from 'event-emitter';

const Cut = React.createClass({
    
    componentDidMount: function () {
        Ee.methods.on('diffOpened', this.handleClose);
    },
    componentWillUnmount: function () {
        Ee.methods.off('diffOpened', this.handleClose);
    },
    
    getInitialState: function () {
        return {
            opened: false
        }
    },
    showPopover: function (event) {
        event.preventDefault();
        this.setState({
            opened: true,
            anchorEl: event.currentTarget
        });
        
    },
    handleClose: function () {
        this.setState({
            opened: false
        });
    },
    makeChildren: function (arr) {
        return arr.map(function(row, index){
            return <div key={index}>
                <span>{row}</span><br/>
            </div>
        });
    },
    render: function () {
        return <div>
            <div onTouchTap={this.showPopover} style={{textDecoration:'underline', cursor:'pointer'}}>
                {this.props.showRow}
                <FontIcon className="material-icons" style={{verticalAlign:'bottom', fontSize:21, paddingLeft:5, color:'#90A4AE'}}>expand_more</FontIcon>
            </div>
            <Popover
                open={this.state.opened}
                anchorEl={this.state.anchorEl}
                anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                animated={false}
                onRequestClose={this.handleClose}
                style={{padding: "5px 10px"}}
            >
                {this.makeChildren(this.props.hidden)}
                {this.props.children}
            </Popover>
            </div>
    },
});

export default Cut;