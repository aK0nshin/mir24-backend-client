import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const StatusButton = React.createClass({

    states: [
        {
          title: 'Опубликовано',
          color: "#8BC34A"
        },
        {
          title: 'Видно админу',
          color: "#FBC02D"
        },
        {
            title: 'Скрыто',
            color: "#5C6BC0"
        }
    ],
    changeStatus: function (event) {
        event.preventDefault();
        this.setState({
            curStatus: this.state.curStatus<2 ? ++this.state.curStatus : 0
        });
    },
    getInitialState: function () {
        return {
            curStatus:1
        }
    },

    render: function () {
        return <RaisedButton onTouchTap={this.changeStatus}  style={{marginRight:20}} labelColor='#FFF' backgroundColor={this.states[this.state.curStatus].color} label={this.states[this.state.curStatus].title}/>
    }
});

export default StatusButton;