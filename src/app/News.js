import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import TableData from './TableData'
import FontIcon from 'material-ui/FontIcon';


const News = React.createClass({
    makeStructure: function (raw) {
      return raw.map(function(row, index){
          for (var i in row) {
              if  (row[i] === '') row[i] = ' ';
          }
          return <TableRow style={{background: index%2==0 ? '#FFF' : '#E0E0E0'}} key={index}>
              <TableRowColumn style={{width:35}}><FontIcon className="material-icons" style={{color:row.circle ? '#4CAF50':'#B0BEC5'}}>fiber_manual_record</FontIcon></TableRowColumn>
              <TableRowColumn style={{width:85}}>{row.id}</TableRowColumn>
              <TableRowColumn style={{width:35}}><FontIcon className="material-icons" style={{color:row.foto ? '#4CAF50':'#B0BEC5'}}>collections</FontIcon></TableRowColumn>
              <TableRowColumn>{row.date}</TableRowColumn>
              <TableRowColumn style={{width:'30%'}}>{row.title}</TableRowColumn>
              <TableRowColumn>{row.rubric}</TableRowColumn>
              <TableRowColumn>{row.lastedit}</TableRowColumn>
              <TableRowColumn>{row.author}</TableRowColumn>
            </TableRow>;
      });
    },
    getInitialState: function () {
        return {
            content: this.makeStructure(TableData)
        };
    },
    render: function (){
        return <div>
            <h1>Новости</h1>
        <Table
        selectable={true}
        multiSelectable={true}
        >
            <TableHeader>
                <TableRow>
                    <TableHeaderColumn tooltip="The ID" style={{width:35}}>Актив</TableHeaderColumn>
                    <TableHeaderColumn tooltip="The ID" style={{width:85}}>ID</TableHeaderColumn>
                    <TableHeaderColumn tooltip="The Status" style={{width:35}}><FontIcon className="material-icons" style={{color:'#9E9E9E'}}>camera_alt</FontIcon></TableHeaderColumn>
                    <TableHeaderColumn tooltip="The Status">Дата</TableHeaderColumn>
                    <TableHeaderColumn tooltip="The Name" style={{width:'30%'}}>Заголовок</TableHeaderColumn>
                    <TableHeaderColumn tooltip="The Status">Рубрика</TableHeaderColumn>
                    <TableHeaderColumn tooltip="The Status">Посл. редактировал</TableHeaderColumn>
                    <TableHeaderColumn tooltip="The Status">Создал</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody
            >
                {this.state.content}
            </TableBody>
        </Table>
            </div>;
    }
});
export default News;