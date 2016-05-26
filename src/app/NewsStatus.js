import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import Popover from 'material-ui/Popover';


const NewsStatus = React.createClass({
    statusIcons: {
        embargo: {
            color: '#F57C00',
            icon: 'timelapse',
            status: 'Заблокирована'
        },
        active: {
            color: '#4CAF50',
            icon: 'fiber_manual_record',
            status: 'Активна'
        },
        inactive: {
            color: '#9E9E9E',
            icon: 'fiber_manual_record',
            status: 'Неактивна'
        },
        removed: {
            color: '#EF5350',
            icon: 'delete',
            status: 'Удалена'
        }
    },
    getInitialState: function () {
        return {
            opened:false,
            display:'none',
            selectedColor:'#00897B',
            selectedIcon:'done'
        }
    },
    selectStatus: function(){
        this.setState({
            display: (this.state.display == 'none') ? 'block' : 'none'
        });
    },
    handleTap: function(event) {
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
    render: function () {
        if (this.props.showAsIcon) {
            if(this.props.selectForSearch){
                return <div className="selectNewsStatus" onTouchTap={this.selectStatus}>
                    <FontIcon className="material-icons statusSelecter" style={{display:this.state.display, color:this.state.selectedColor}}>
                        {this.state.selectedIcon}
                    </FontIcon>
                    <FontIcon className="material-icons" style={{color:this.statusIcons[this.props.articleStatus].color}}>
                        {this.statusIcons[this.props.articleStatus].icon}
                    </FontIcon>
                </div>
            }
            else {
                if (this.props.articleStatus == 'embargo') {
                    return <div>
                        <FontIcon onTouchTap={this.handleTap} className="material-icons"
                                  style={{color:this.statusIcons[this.props.articleStatus].color, cursor:'pointer'}}>{this.statusIcons[this.props.articleStatus].icon}</FontIcon>
                        <Popover
                            open={this.state.opened}
                            anchorEl={this.state.anchorEl}
                            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                            targetOrigin={{horizontal: 'left', vertical: 'top'}}
                            animated={false}
                            onRequestClose={this.handleClose}
                            style={{padding: "5px 10px"}}
                        >
                            Дата ожидаемой публикации: 2013-02-18 11:00:00
                        </Popover>
                    </div>
                } else {
                    return <FontIcon className="material-icons"
                                     style={{color:this.statusIcons[this.props.articleStatus].color}}>
                        {this.statusIcons[this.props.articleStatus].icon}
                    </FontIcon>
                }
            }
        }else{
           return  <div id="statusBlock" style={{background:this.statusIcons[this.props.articleStatus].color}}>
               {this.statusIcons[this.props.articleStatus].status}
           </div>
        }
    }});

export default NewsStatus;