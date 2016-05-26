import React from 'react';
import FontIcon from 'material-ui/FontIcon';

const Badges = React.createClass({
    getInitialState: function () {
        return {
            color:'#9C9C9C'
    }},
    selectBadge: function (){
        this.setState({
            color: (this.state.color == '#9C9C9C') ? '#0097A7' : '#9C9C9C'
        })
    },
    render: function() {
        if(this.props.searchBadge){
            return <FontIcon className="material-icons searchbadges" onTouchTap={this.selectBadge} style={{color:this.state.color}}>
                {this.props.icon}
            </FontIcon>
        }
        else{return <FontIcon className="material-icons badges" style={{color:this.state.color}}>
            {this.props.icon}
        </FontIcon>
        }
    }});

export default Badges;