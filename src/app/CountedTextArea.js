import React from 'react';
import TextField from 'material-ui/TextField';


const CountedTextArea = React.createClass({

    getInitialState: function () {
        return {
            value: this.props.value ? this.props.value : '',
            textLength: this.props.value ? this.props.value.length : 0

        }
    },

    countLength: function (event) {
        this.setState({
            value: event.target.value,
            textLength: event.target.value.length
        });
    },



    render: function () {
        return <div>
            <TextField onChange={this.countLength}
                       multiLine={this.props.multiLine}
                       value={this.state.value}
                       style={this.props.style}
                       floatingLabelStyle={this.props.floatingLabelStyle}
                       floatingLabelText={this.props.floatingLabelText}
                       textareaStyle={this.props.textareaStyle}
                       inputStyle={this.props.inputStyle}
            />
            <p className="count">Количество знаков: {this.state.textLength}</p>
        </div>;
    }
});

export default CountedTextArea;