import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import TableData from './TableData'
import FontIcon from 'material-ui/FontIcon';
import InfoDropdown from './InfoDropdown';
import Order from './Order';
import Search from './Search';
import NewsStatus from './NewsStatus';
import Cut from './Cut';
import DiffDialog from './DiffDialog';
import Ee from 'event-emitter';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {browserHistory, Link} from 'react-router';

const style = {
    width:23,
    paddingLeft:10,
    paddingRight:10,
};


const News = React.createClass({
    makeStructure: function (raw) {
        var self = this;
      return raw.map(function(row, index){
          for (var i in row) {
              if  (row[i] === '') row[i] = ' ';
          }
          return <TableRow style={{background: index%2==0 ? '#FFF' : '#E0E0E0'}} key={index}>
              <TableRowColumn style={style}>
                  <InfoDropdown id={row.id}/>
              </TableRowColumn>
              <TableRowColumn style={style}>
                  <Link to="/article/edit/"><FontIcon className="material-icons" style={{color:'#FFC107', cursor:'pointer'}}>
                      edit
                  </FontIcon></Link>
              </TableRowColumn>
              <TableRowColumn style={style}>
                  <NewsStatus articleStatus={row.status}/>
              </TableRowColumn>
              <TableRowColumn style={{width:80, padding:0, textAlign:'center'}}>
                  <FontIcon className="material-icons badges" style={{display:row.photo ? 'inline-block':'none'}}>
                      photo_camera
                  </FontIcon>
                  <FontIcon className="material-icons badges" style={{display:row.video ? 'inline-block':'none'}}>
                      videocam
                  </FontIcon>
                  <FontIcon className="material-icons badges" style={{display:row.gallery ? 'inline-block':'none'}}>
                      collections
                  </FontIcon>
              </TableRowColumn>
              <TableRowColumn>
                  {row.date}
              </TableRowColumn>
              <TableRowColumn style={{width:'25%'}}>
                  {row.title}
              </TableRowColumn>
              <TableRowColumn>
                  {row.rubric}
              </TableRowColumn>
              <TableRowColumn>
                  {row.videoAdd}
              </TableRowColumn>
              <TableRowColumn>
                  {row.photoAdd}
              </TableRowColumn>
              <TableRowColumn>
                  {row.lastedit}
              </TableRowColumn>
              <TableRowColumn>
                  <Cut
                      showRow={row.author}
                      hidden={['Обновлено: '+row.date, 'Кем: '+row.lastedit]}
                  >
                      <span onTouchTap={self.openDiff.bind(self, row.lastedit)} style={{color:'#EF5350', cursor:'pointer'}}>Посмотреть изменения</span>
                  </Cut>
              </TableRowColumn>
            </TableRow>;
      });
    },
    openDiff: function (value) {
        Ee.methods.emit('diffRequest', value);
    },
    smallAlert: function(){
      alert('И тут мы переходим к добавлению новости');
    },
    getInitialState: function () {
        return {
            content: this.makeStructure(TableData),
            openDiff: false
        };
    },
    render: function (){
        return <div>
            <h1 style={{textAlign:'center'}}>Новости</h1>
            <FloatingActionButton style={{
                    position: 'fixed',
                    top: '102px',
                    left: '38px',
                    zIndex:10
                }}
                mini={true}
                backgroundColor='#FFC107'
                onTouchTap={this.smallAlert}>
                <FontIcon className="material-icons" style={{color:'#B0BEC5'}}>add</FontIcon>
            </FloatingActionButton>
            <Search />
            <div style={{minWidth:1500}}>

            <Table
        selectable={false}
        multiSelectable={false}
        >
            <TableHeader
                displaySelectAll={false}
                adjustForCheckbox={false}
            >
                <TableRow>
                    <TableHeaderColumn style={{width:23, padding:0}}> </TableHeaderColumn>
                    <TableHeaderColumn style={{width:23, padding:0}}> </TableHeaderColumn>
                    <TableHeaderColumn style={{width:23, padding:0}}> </TableHeaderColumn>
                    <TableHeaderColumn style={{width:80, padding:0}}> </TableHeaderColumn>
                    <TableHeaderColumn>Дата <Order row='Тут передадим поле для ордера'/></TableHeaderColumn>
                    <TableHeaderColumn tooltip="Заголовок новости" style={{width:'25%'}}>Заголовок</TableHeaderColumn>
                    <TableHeaderColumn tooltip="Супертег новости">Супертег <Order row='Тут передадим поле для ордера'/></TableHeaderColumn>
                    <TableHeaderColumn tooltip="Кто залил фото">Залил фото <Order row='Тут передадим поле для ордера'/></TableHeaderColumn>
                    <TableHeaderColumn tooltip="Кто залил видео">Залил видео <Order row='Тут передадим поле для ордера'/></TableHeaderColumn>
                    <TableHeaderColumn tooltip="Последний редактор">Посл. редактировал <Order row='Тут передадим поле для ордера'/></TableHeaderColumn>
                    <TableHeaderColumn tooltip="Создал новость">Создал</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody
                displayRowCheckbox={false}
            >
                {this.state.content}
            </TableBody>
        </Table>
                </div>
            <DiffDialog />
        </div>;
    }
});
export default News;
