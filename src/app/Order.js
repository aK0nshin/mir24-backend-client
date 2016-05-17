import React from 'react';
import IconButton from 'material-ui/IconButton';

const style = {
    verticalAlign: 'middle',
    padding:0
};
const iconStyle = {
    width: 20,
    height: 20,
    fontSize:20,
    color: '#90A4AE'
};

const Order = React.createClass({
    classes: [
        {
            icon: 'swap_vert',
            tooltip: 'Порядок'
        },
        {
            icon: 'arrow_upward',
            tooltip: 'ASC'
        },
        {
            icon: 'arrow_downward',
            tooltip: 'DESC'
        }
    ],
    newOrder: function () {
      if (this.state.order<this.classes.length-1) {
          this.setState({
              order: ++this.state.order
          });
      } else {
          this.setState({
              order: 0
          });
      }
    },
    getInitialState: function (){
        return {
            order : 0
        };
    },
    render: function (){
        return <IconButton
                iconClassName="material-icons"
                /*tooltip={this.classes[this.state.order].tooltip}*/
                iconStyle={iconStyle}
                style={style}
                onTouchTap={this.newOrder}
            >
            {this.classes[this.state.order].icon}
            </IconButton>
    }
});

export default Order;