import React from 'react';
import {browserHistory, Link} from 'react-router';
import MenuItem from 'material-ui/MenuItem';

const ListItem = React.createClass({
    render: function (){
        return <Link style={{textDecoration:'none'}} to={{pathname: this.props.path}}>
                <MenuItem style={{textAlign:'left'}} key={this.props.id} onTouchTap={this.props.handler}>{this.props.name}</MenuItem>
            </Link>;
    }

});
export default ListItem;
