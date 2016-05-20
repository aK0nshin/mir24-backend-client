import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import StatusButton from './StatusButton';

const date = new Date();
date.setFullYear(date.getFullYear() - 1);
date.setHours(12, 38);

const ArticleEdit = React.createClass({

    getInitialState: function () {
        return {
            rubric: '3720054',
            article_type: '3720054',
            olympic: '8339569'
        }
    },
    rubricChange: function (event, index, value) {
        this.setState({
            rubric:value
        });
    },
    articleTypeChange: function (event, index, value) {
        this.setState({
            article_type:value
        });
    },
    olympicChange: function (event, index, value){
        this.setState({
            olympic:value
        });
    },

    render: function () {
       return <div>
           <Table
               selectable={false}
               multiSelectable={false}
           >
            <TableHeader
                displaySelectAll={false}
                adjustForCheckbox={false}
            >
                <TableRow>
                    <TableHeaderColumn style={{textAlign:'center'}}>Дата</TableHeaderColumn>
                    <TableHeaderColumn style={{textAlign:'center'}}>Время</TableHeaderColumn>
                    <TableHeaderColumn style={{textAlign:'center'}}>Рубрика</TableHeaderColumn>
                    <TableHeaderColumn style={{textAlign:'center'}}>Тип новости</TableHeaderColumn>
                    <TableHeaderColumn style={{textAlign:'center'}}>Олимпийская рубрика</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
                <TableRow style={{background:'#ECEFF1'}}>
                    <TableRowColumn style={{textAlign:'center'}}>
                        <DatePicker defaultDate={date} className="datePicker" name="date" />
                    </TableRowColumn>
                    <TableRowColumn style={{textAlign:'center'}}>
                        <TimePicker defaultTime={date} format="24hr" className="datePicker"  name="time" />
                    </TableRowColumn>
                    <TableRowColumn style={{textAlign:'center'}}>
                        <SelectField className="drop" style={{paddingRight:0}} value={this.state.rubric} name="rubric" onChange={this.rubricChange}>
                            <MenuItem value="3720054" primaryText="Сеть вещания"/>
                            <MenuItem value="4403266" primaryText="Видео"/>
                            <MenuItem value="5565836" primaryText="МИРУ 20 ЛЕТ"/>
                            <MenuItem value="6979922" primaryText="Жди меня"/>
                            <MenuItem value="91" primaryText="В мире"/>
                            <MenuItem value="427" primaryText="Экономика"/>
                            <MenuItem value="422" primaryText="Культура"/>
                            <MenuItem value="433" primaryText="Спорт"/>
                            <MenuItem value="445" primaryText="Hi-tech"/>
                            <MenuItem value="3708534" primaryText="Наука"/>
                            <MenuItem value="93" primaryText="Авто"/>
                            <MenuItem value="4993191" primaryText="Вакансии"/>
                            <MenuItem value="10627006" primaryText="Шоу-бизнес"/>
                            <MenuItem value="9332290" primaryText="Чемпионат"/>
                            <MenuItem value="95" primaryText="Общество"/>
                            <MenuItem value="9323848" primaryText="Пресс-релизы"/>
                            <MenuItem value="246" primaryText="Политика"/>
                            <MenuItem value="424" primaryText="Происшествия"/>
                            <MenuItem value="9707131" primaryText="Интерактив"/>
                            <MenuItem value="435" primaryText="В Содружестве"/>
                            <MenuItem value="9186356" primaryText="Кухни мира"/>
                            <MenuItem value="7203542" primaryText="Путеводитель"/>
                            <MenuItem value="484" primaryText="Стиль жизни"/>
                        </SelectField>
                    </TableRowColumn>
                    <TableRowColumn style={{textAlign:'center'}}>
                        <SelectField className="drop" style={{paddingRight:0}} value={this.state.article_type} name="article_type" onChange={this.articleTypeChange}>
                            <MenuItem value="3720054" primaryText="Новость"/>
                            <MenuItem value="4403266" primaryText="Интервью"/>
                            <MenuItem value="5565836" primaryText="Статья"/>
                        </SelectField>
                    </TableRowColumn>
                    <TableRowColumn style={{textAlign:'center'}}>
                        <SelectField className="drop" value={this.state.olympic} name="olympic" onChange={this.olympicChange}>
                                <MenuItem value="8339569" primaryText="Новости Чемпионата"/>
                                <MenuItem value="8085661" primaryText="Дневник Чемпионата"/>
                                <MenuItem value="8085696" primaryText="Мировой диван"/>
                                <MenuItem value="9361241" primaryText="Промоблок"/>
                                <MenuItem value="9361242" primaryText="Олимпийское видео"/>
                                <MenuItem value="9361243" primaryText="Как опубликуем..."/>
                        </SelectField>
                    </TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>
                        <Checkbox
                            label="На олимпийской главной странице"
                        />
                    </TableRowColumn>
                    <TableRowColumn>
                        <Checkbox
                            label="На главной в центре"
                        />
                    </TableRowColumn>
                    <TableRowColumn>
                        <Checkbox
                            label="Новость часа"
                        />
                    </TableRowColumn>
                    <TableRowColumn>
                        <Checkbox
                            label="На главной странице вверху"
                        />
                    </TableRowColumn>
                    <TableRowColumn>
                        <Checkbox
                            label="На олимпийской главной странице вверху"
                        />
                    </TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>
                        <Checkbox
                            label="Горячая новость"
                        />
                    </TableRowColumn>
                    <TableRowColumn>
                        <Checkbox
                            label="Фотоленты"
                        />
                    </TableRowColumn>
                    <TableRowColumn>
                        <Checkbox
                            label="Видеобаннер"
                        />
                    </TableRowColumn>
                    <TableRowColumn>
                        <Checkbox
                            label="Выводить в Рамблер RSS"
                        />
                    </TableRowColumn>
                    <TableRowColumn>
                        <Checkbox
                            label="Раздел Лучшее"
                        />
                    </TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>
                        <Checkbox
                            label="Выбор редакции"
                        />
                    </TableRowColumn>
                    <TableRowColumn>
                        <Checkbox
                            label="АвтоМир"
                        />
                    </TableRowColumn>
                    <TableRowColumn>
                        <Checkbox
                            label="Кухни мира"
                        />
                    </TableRowColumn>
                    <TableRowColumn>
                        <Checkbox
                            label="Красота и здоровье"
                        />
                    </TableRowColumn>
                    <TableRowColumn>
                        <Checkbox
                            label="Сейчас читают"
                        />
                    </TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>
                        <Checkbox
                            label="Интервью на главной"
                        />
                    </TableRowColumn>
                    <TableRowColumn>
                        <Checkbox
                            label="InIpad"
                        />
                    </TableRowColumn>
                    <TableRowColumn>
                        <Checkbox
                            label="Заголовок"
                        />
                    </TableRowColumn>
                    <TableRowColumn>
                        <Checkbox
                            label="Новости компании"
                        />
                    </TableRowColumn>
                    <TableRowColumn>
                        <Checkbox
                            label="Блок телеканал мир 24"
                        />
                    </TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>
                        <Checkbox
                            label="Рекомендованный"
                        />
                    </TableRowColumn>
                    <TableRowColumn>
                        <Checkbox
                            label="С правой стороны"
                        />
                    </TableRowColumn>
                    <TableRowColumn>
                        <Checkbox
                            label="Наверху в рубрике"
                        />
                    </TableRowColumn>
                    <TableRowColumn>
                        <Checkbox
                            label="Выводить в Mail.Ru RSS"
                        />
                    </TableRowColumn>
                    <TableRowColumn>
                        <Checkbox
                            label="Снять с публикации через 36ч."
                        />
                    </TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>
                        <Checkbox
                            label="Эксклюзив"
                        />
                    </TableRowColumn>
                </TableRow>
            </TableBody>
        </Table>
           <div style={{margin: 'auto', height: 66, width: 890}}>
               <div className="time">
                    <div className="timeTitle">Дата начала публикации:</div>
                    <DatePicker style={{float:'left', marginRight: 73}} defaultDate={date} className="datePicker" name="date" />
               </div>
               <div className="time">
                    <div className="timeTitle">Дата конца публикации:</div>
                    <DatePicker style={{float:'left'}} defaultDate={date} className="datePicker" name="date" />
               </div>
           </div>
           <TextField style={{width:'100%'}} floatingLabelStyle={{fontSize:20, paddingLeft:20}} floatingLabelText="Заголовок"/>
           <p className="count">Количество знаков: 0</p>
           <TextField style={{width:'100%'}} multiLine={true} floatingLabelStyle={{fontSize:20, paddingLeft:20}} floatingLabelText="Анонс"/>
           <p className="count">Количество знаков: 0</p>
           <TextField style={{width:'100%'}} multiLine={true} floatingLabelStyle={{fontSize:20, paddingLeft:20}} floatingLabelText="Текст"/>
           <p className="count">Количество знаков: 0</p>
           <div className="interview">
               <TextField textareaStyle={{paddingRight:15}} style={{width:'25%', boxSizing:'border-box', paddingRight:15}} floatingLabelText="Фамилия интервьюируемого"/>
               <TextField textareaStyle={{paddingRight:15}} style={{width:'25%', boxSizing:'border-box', paddingRight:15}} floatingLabelText="Имя интервьюируемого"/>
               <TextField textareaStyle={{paddingRight:15}} style={{width:'50%', boxSizing:'border-box', paddingRight:15}} floatingLabelText="Цитата интервью"/>
           </div>
           <div style={{margin:'30px 0 30px 15px'}}>
               <span style={{fontSize:15}}>Сюжет: Санкции против России</span>
               <FlatButton style={{marginLeft:20}} label="Редактировать" primary={true}/>
           </div>
           <div style={{margin:'30px 0 30px 15px'}}>
               <span style={{fontSize:15}}>Связанные новости: Могерини считает, что санкции против России будут продлены</span>
               <FlatButton style={{marginLeft:20}} label="Редактировать" primary={true}/>
           </div>
           <div style={{margin:'30px 0 30px 15px'}}>
               <span style={{fontSize:15}}>Изображение: </span>
               <IconButton
                   iconClassName="material-icons"
                   tooltip="На основном сайте мы рекомендуем пользоваться фотобанком"
                   style={{color:'#03A9F4', cursor:'pointer', verticalAlign: 'middle'}}
                   tooltipPosition="top-right"
                   touch={true}
                   disableTouchRipple={true}
               >
                   info_outline
               </IconButton>
               <FlatButton style={{marginLeft:20}} label="Загрузить" primary={true}/>
           </div>
               <div>
                   <TextField textareaStyle={{paddingRight:15}} style={{width:'50%', boxSizing:'border-box', paddingRight:15}} floatingLabelText="Title для изображения"/>
                   <TextField textareaStyle={{paddingRight:15}} style={{width:'50%', boxSizing:'border-box', paddingRight:15}} floatingLabelText="Alt для изображения"/>
               </div>
               <div style={{marginTop:30}}>
                   <div>
                       <div style={{fontSize:15, float: 'left', paddingTop: 15}}>Копирайт:</div>
                       <SelectField style={{marginLeft:20, float:'left'}} value={this.state.olympic} name="olympic">
                           <MenuItem value="8339569" primaryText="Новости Чемпионата"/>
                           <MenuItem value="8085661" primaryText="Дневник Чемпионата"/>
                           <MenuItem value="8085696" primaryText="Мировой диван"/>
                           <MenuItem value="9361241" primaryText="Промоблок"/>
                           <MenuItem value="9361242" primaryText="Олимпийское видео"/>
                           <MenuItem value="9361243" primaryText="Как опубликуем..."/>
                       </SelectField>
                       <TextField textareaStyle={{paddingRight:15}} style={{boxSizing:'border-box', paddingRight:15, marginTop:'-24px', width:'700px'}} floatingLabelText="Другой копирайт"/>
                   </div>
               </div>
               <div style={{marginTop:30}}>
                   <span style={{fontSize:15}}>Видео: </span>
                   <FlatButton style={{marginLeft:20}} label="Редактировать" primary={true}/>
               </div>

               <Table
                   selectable={false}
                   multiSelectable={false}
               >
                   <TableHeader
                       displaySelectAll={false}
                       adjustForCheckbox={false}
                   >
                       <TableRow>
                           <TableHeaderColumn style={{textAlign:'center'}}>Страны</TableHeaderColumn>
                       </TableRow>
                   </TableHeader>
                   <TableBody displayRowCheckbox={false}>
                       <TableRow>
                           <TableRowColumn>
                               <Checkbox
                                   label="Азербайджан"
                               />
                           </TableRowColumn>
                           <TableRowColumn>
                               <Checkbox
                                   label="Армения"
                               />
                           </TableRowColumn>
                           <TableRowColumn>
                               <Checkbox
                                   label="Беларусь"
                               />
                           </TableRowColumn>
                           <TableRowColumn>
                               <Checkbox
                                   label="Грузия"
                               />
                           </TableRowColumn>
                           <TableRowColumn>
                               <Checkbox
                                   label="Казахстан"
                               />
                           </TableRowColumn>
                           <TableRowColumn>
                               <Checkbox
                                   label="Кыргызстан"
                               />
                           </TableRowColumn>
                       </TableRow>
                       <TableRow>
                           <TableRowColumn>
                               <Checkbox
                                   label="Молдова"
                               />
                           </TableRowColumn>
                           <TableRowColumn>
                               <Checkbox
                                   label="Россия"
                               />
                           </TableRowColumn>
                           <TableRowColumn>
                               <Checkbox
                                   label="Таджикистан"
                               />
                           </TableRowColumn>
                           <TableRowColumn>
                               <Checkbox
                                   label="Туркменистан"
                               />
                           </TableRowColumn>
                           <TableRowColumn>
                               <Checkbox
                                   label="Узбекистан"
                               />
                           </TableRowColumn>
                           <TableRowColumn>
                               <Checkbox
                                   label="Украина"
                               />
                           </TableRowColumn>
                       </TableRow>
                   </TableBody>
               </Table>

           <TextField style={{width:'100%', marginTop:30}} floatingLabelStyle={{fontSize:20, paddingLeft:20}} floatingLabelText="Заголовок для страницы Лучшие Новости"/>
           <p className="count">Количество знаков: 0</p>
           <TextField style={{width:'100%'}} floatingLabelStyle={{fontSize:20, paddingLeft:20}} floatingLabelText="Заголовок для: Выбор редакции, Автомир, Сейчас читают"/>
           <p className="count">Количество знаков: 0</p>

           <div style={{margin:'30px 0 30px 15px'}}>
               <span style={{fontSize:15}}>Ролик: </span>
               <FlatButton style={{marginLeft:20}} label="Загрузить" primary={true}/>
               <FlatButton style={{marginLeft:20}} label="Выбрать" secondary={true}/>
           </div>
           <div className="interview">
               <TextField textareaStyle={{paddingRight:15}} style={{width:'50%', boxSizing:'border-box', paddingRight:15}} floatingLabelText="Автор"/>
               <TextField textareaStyle={{paddingRight:15}} style={{width:'50%', boxSizing:'border-box', paddingRight:15}} floatingLabelText="Теги"/>
           </div>
           <div
               style={{marginTop:30}}
           >
           <Table
               selectable={false}
               multiSelectable={false}
           >
               <TableHeader
                   displaySelectAll={false}
                   adjustForCheckbox={false}
                   style={{border:'none', height:0}}
               >
                   <TableRow displayBorder={false} style={{height:0}}>
                       <TableHeaderColumn style={{textAlign:'center', height:0}}>Последним редактировал</TableHeaderColumn>
                       <TableHeaderColumn style={{textAlign:'center', height:0}}>Создал</TableHeaderColumn>
                       <TableHeaderColumn style={{textAlign:'center', height:0}}>Последним редактировал видео</TableHeaderColumn>
                       <TableHeaderColumn style={{textAlign:'center', height:0}}>Последним редактировал изображение</TableHeaderColumn>
                   </TableRow>
               </TableHeader>
               <TableBody displayRowCheckbox={false}>
                   <TableRow displayBorder={false}>
                       <TableRowColumn style={{textAlign:'center'}}>
                           buziatova_tv@mirtv.ru
                       </TableRowColumn>
                       <TableRowColumn style={{textAlign:'center'}}>
                           buziatova_tv@mirtv.ru
                       </TableRowColumn>
                       <TableRowColumn style={{textAlign:'center'}}>
                           buziatova_tv@mirtv.ru
                       </TableRowColumn>
                       <TableRowColumn style={{textAlign:'center'}}>
                           buziatova_tv@mirtv.ru
                       </TableRowColumn>
                   </TableRow>
               </TableBody>
           </Table>
               </div>
           <div style={{marginTop:30, marginBottom:50, textAlign:'center'}}>
                <StatusButton />
                <RaisedButton labelColor='#FFF' backgroundColor='#66BB6A' style={{marginRight:20}} label="Сохранить"/>
                <RaisedButton labelColor='#FFF' backgroundColor='#EF5350' label="Удалить"/>
           </div>
       </div>
    }
});

export default ArticleEdit;