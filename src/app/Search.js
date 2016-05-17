import React from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';

const Search = React.createClass({

    render: function () {
        return <div className='searchbox'>
        <TextField name="search" floatingLabelText="Поиск"/>
            <IconButton
                iconClassName="material-icons"
                iconStyle={{color:'#B0BEC5', verticalAlign: 'sub'}}
            >
                search
            </IconButton>
            </div>;
    }
});
export default Search;