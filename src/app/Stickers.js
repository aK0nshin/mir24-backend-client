import React from 'react';
import Paper from 'material-ui/Paper';

const messages = [
    {
        to: [
            'Дмитрий Юрчев'
        ],
        from: 'Пономарев Андрей',
        text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim id turpis at iaculis. Curabitur iaculis diam vel erat commodo auctor. Nam id interdum nulla, eu lacinia elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla quis leo eget eros commodo aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras a tristique lacus, eget pharetra nibh.',
        label: 'regular'
    },
    {
        to: [
            'Дмитрий Юрчев',
            'Александр Коншин'
        ],
        from: 'Пономарев Андрей',
        text : ' Завтра же переходим на Laravel и PHP7',
        label: 'regular'
    },
    {
        to: [
            'Саша Коншин'
        ],
        from: 'Пономарев Андрей',
        text : 'Mauris sed nisi vestibulum, facilisis massa non, dignissim risus. Morbi rutrum eros dui, ac blandit nunc fringilla eget. Ut mollis, lacus a accumsan feugiat, neque urna consequat urna, ut semper massa orci quis augue. ',
        label: 'regular'
    },
    {
        to: [
            'Никита Кириченко',
            'Ксения Новинская'
        ],
        from: 'Пономарев Андрей',
        text : 'Не расслабляйтесь!',
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
            'Дмитрий Юрчев'
        ],
        from: 'Пономарев Андрей',
        text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim id turpis at iaculis. Curabitur iaculis diam vel erat commodo auctor. Nam id interdum nulla, eu lacinia elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla quis leo eget eros commodo aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras a tristique lacus, eget pharetra nibh.',
        label: 'regular'
    },
    {
        to: [
            'Дмитрий Юрчев',
            'Александр Коншин'
        ],
        from: 'Пономарев Андрей',
        text : ' Завтра же переходим на Laravel и PHP7',
        label: 'regular'
    },
    {
        to: [
            'Саша Коншин'
        ],
        from: 'Пономарев Андрей',
        text : 'Mauris sed nisi vestibulum, facilisis massa non, dignissim risus. Morbi rutrum eros dui, ac blandit nunc fringilla eget. Ut mollis, lacus a accumsan feugiat, neque urna consequat urna, ut semper massa orci quis augue. ',
        label: 'regular'
    },
    {
        to: [
            'Никита Кириченко',
            'Ксения Новинская'
        ],
        from: 'Пономарев Андрей',
        text : 'Не расслабляйтесь!',
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
            <h1 className="messagesTitle">Сообщения</h1>
            <div className="messageBox">
            {this.state.stickers}
            </div>
            </div>
    }
});

export default Stickers;