import React from 'react';
import Paper from 'material-ui/Paper';

const messages = [
    {
        to: [
            'Дмитрий Юрчев',
            'Александр Коншин'
        ],
        from: 'Пономарев Андрей',
        text : ' Завтра же переходим на Laravel и PHP7',
        label: 'alarm'
    },
    {
        to: [
            'Мария Чегляева',
            'Павел Беляев'
        ],
        from: 'Пономарев Андрей',
        text : 'Посмотреть раздел "Новости"',
        label: 'event'
    },
    {
        to: [
            'Мария Чегляева',
            'Павел Беляев'
        ],
        from: 'Пономарев Андрей',
        text : 'Посмотреть меню',
        label: 'event'
    },
];

const paperStyle = {
    position:'relative',
    display: 'table',
    padding:'10px 10px',
    minHeight:114,
    minWidth:400,
    margin:'auto',
    marginBottom:'20px',
    maxWidth:800,
    textAlign:'initial'

};

const Stickers = React.createClass({
    colors: {
        alarm : '#C62828',
        notice: '#FFC107',
        event: '#4CAF50',
        regular: '#757575'
    },
    
    transform: function (arr) {
        var that = this;
        return arr.map(function (row, index) {
            var to='';
            for (var i in row.to) {
                to+=row.to[i]+', ';
            }
            to = to.slice(0, -2);
            return <Paper key={index} style={paperStyle} zDepth={2}>
                <span className='to'>Кому: <span className="toName">{to}</span></span><span className="from">От: <span className="fromName">{row.from}</span></span><p className='messageText' style={{color: that.colors[row.label]}}>{row.text}</p>
                </Paper>
        }).reverse();
    },
    
    getInitialState: function () {
        return {
            stickers: this.transform(messages)
        }
    },
    render: function (){
        return <div>
            <div className="messageBox">
            {this.state.stickers}
            </div>
            </div>
    }
});

export default Stickers;
