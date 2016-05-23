import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Ee from 'event-emitter';



const DiffDialog = React.createClass({

    componentDidMount: function () {
        Ee.methods.on('diffRequest', this.handleOpen);
    },
    componentWillUnmount: function () {
        Ee.methods.off('diffRequest', this.handleOpen);
    },

    getInitialState: function (){
        return {
            open:false
        }
    },
    handleOpen: function (value) {
        this.setState({
            value: value,
            open:true
        });
        Ee.methods.emit('diffOpened');
    },
    handleClose: function (){
        this.setState({
            open:false
        });
    },
    render: function () {
        const actions = [
            <FlatButton
                label="Откатиться"
                secondary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Ок"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose}
            />,
        ];
        return <div>
            <Dialog
                title="Последние изменения"
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
            >
                Передано значение: {this.state.value}
                <br/>
                Диффы можно показать во всплывающем окне, а можно отправить на страницу с диффами. В каком виде все это
                будет, я пока не представляю.
            </Dialog>
        </div>
    }
});

export default DiffDialog;