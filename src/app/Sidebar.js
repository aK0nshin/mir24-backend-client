import React from 'react';
import Drawer from 'material-ui/Drawer';
import ListItem from './ListItem';
import List from './MenuItems'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
const style = {
    fontSize: '20px',
    color: 'rgb(0, 188, 212)',
    textAlign:'left',
    marginLeft:15
};

var Sidebar = React.createClass({
    getList: function (list){
        var elements =[];
        for (var i in list) {
            elements.push(<p key={i} style={style}>{list[i]['section']}</p>);
            for (var j in list[i]['listItems']) {
                elements.push(<ListItem id={j+i} key={j+i} path={list[i]['listItems'][j]['link']} handler={this.handleClose} name={list[i]['listItems'][j]['name']} icon={list[i]['listItems'][j]['icon']}/>);
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
            <FloatingActionButton style={{
                    position: 'fixed',
                    top: '30px',
                    left: '30px',
                }}
              onTouchTap={this.handleOpen}>
                <FontIcon className="material-icons" style={{color:'#B0BEC5'}}>menu</FontIcon>
            </FloatingActionButton>
            <Drawer
                docked={false}
                width={200}
                open={this.state.open}
                onRequestChange={this.handleClose}
                width={250}
            >
                <AppBar
                    showMenuIconButton={false}
                    title="Меню" />
                {this.state.elements}
            </Drawer>
        </div>
    },
});

export default Sidebar;
