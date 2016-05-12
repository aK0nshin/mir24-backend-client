import React from 'react';
import {browserHistory, Link} from 'react-router';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';

const ListItem = React.createClass({
    render: function (){
        return <Link style={{textDecoration:'none'}} to={{pathname: this.props.path}}>
                <MenuItem style={{textAlign:'left'}} primaryText={this.props.name} key={this.props.id} onTouchTap={this.props.handler} rightIcon={<FontIcon className="material-icons">{this.props.icon}</FontIcon>}/>
            </Link>;
    }

});
export default ListItem;
