import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import Popover from 'material-ui/Popover';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import NewsStatus from './NewsStatus';
import Badges from './Badges';

const Search = React.createClass({
    getInitialState: function () {
        return {
            open: false
        }
    },
    closePopover: function (){
        this.setState({
            open: false})
    },
    openPopover: function (event){
        event.preventDefault();
        this.setState({
            anchorEl: event.currentTarget,
            open: true})
    },
    render: function () {
        return <div className='searchbox' >
            <RaisedButton className="showSearch" onTouchTap={this.openPopover}>
                <span id="searchLabel"> Поиск </span>
                <FontIcon className="material-icons" style={{color:'rgb(0, 188, 212)', verticalAlign: 'sub'}}>
                    search
                </FontIcon>
            </RaisedButton>
            <div className="changePopover">
                <Popover
                    className="searchPopover"
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    animated={true}
                    onRequestClose={this.closePopover}
                >
                    <TextField hintText="Искать" />
                    <Checkbox label="Заголовок" />
                    <Checkbox label="Супертег" />
                    <Checkbox label="Создал" />
                    <Checkbox label="Последним редактировал" />
                    <Checkbox label="Залил видео" />
                    <Checkbox label="Залил фото" />
                    <DatePicker hintText="Дата" onChange={this.changeZIndex}/>
                    <TimePicker hintText="Время" format="24hr" onChange={this.changeZIndex}/>
                    <div className="searchStatus">
                        <NewsStatus articleStatus='active' showAsIcon='true' selectForSearch="true"/>
                        <NewsStatus articleStatus='inactive' showAsIcon='true' selectForSearch="true"/>
                        <NewsStatus articleStatus='embargo' showAsIcon='true' selectForSearch="true"/>
                        <NewsStatus articleStatus='removed' showAsIcon='true' selectForSearch="true"/>
                    </div>
                    <div className="SearchBadges">
                        <Badges icon="photo_camera" searchBadge="true"/>
                        <Badges icon="videocam" searchBadge="true"/>
                        <Badges icon="collections" searchBadge="true"/>
                    </div>
                    <div className="searchButton">
                        <RaisedButton className="GoogleIt" label="Найти" onTouchTap= {this.closePopover} onRequestClose={this.closePopover}/>
                    </div>
                </Popover>
            </div>
        </div>;
    }
});
export default Search;