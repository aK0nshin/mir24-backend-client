import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import List from './MenuItems'

const style = {
    fontSize: '20px',
    color: 'rgb(0, 188, 212)'
};

var Sidebar = React.createClass({
    getList: function (list){
        var elements =[];
        for (var i in list) {
            elements.push(<p key={i} style={style}>{list[i]['section']}</p>);
            for (var j in list[i]['listItems']) {
                elements.push(<MenuItem key={j+i} onTouchTap={this.handleClose}>{list[i]['listItems'][j]['name']}</MenuItem>);
            }
        }
        return elements;
    },
    getInitialState: function () {
        return {
            open: false,
            elements: this.getList(List)
        }
    },
    handleOpen: function () {
        this.setState({
            open: true
        });
    },
    handleClose: function () {
        this.setState({
            open: false
        });
    },
    render: function (){
        return <div>
            <RaisedButton
                style={{
                    position: 'fixed',
                    top: '30px',
                    left: '30px',
                }}
                primary={true}
                label="Разделы"
                onTouchTap={this.handleOpen}
            />
            <Drawer
                docked={false}
                width={200}
                open={this.state.open}
                onRequestChange={this.handleOpen}
                width={250}
            >
                {this.state.elements}
            </Drawer>
        </div>
    },
});

export default Sidebar;
