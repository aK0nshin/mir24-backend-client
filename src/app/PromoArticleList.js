import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: '100%',
  },
};

const PromoArticleList = React.createClass({

    getInitialState: function () {
        return {
            rubric: '3720054',
            article_type: '3720054',
            olympic: '8339569',
            copyright:'1',
            value: '1'
        }
    },

    handleChange: function(event, index, value){
        this.setState({value});
    },

    render: function () {
       return <div>
                <SelectField value={this.state.value} onChange={this.handleChange} style={styles.customWidth}>
                  <MenuItem value={1} primaryText="ШОК! Смотреть всем!" />
                  <MenuItem value={2} primaryText="Как приготовить рис?" />
                  <MenuItem value={3} primaryText="В Якутске украли Якутск." />
                  <MenuItem value={4} primaryText="Как ничего не понять и не подать виду." />
                  <MenuItem value={5} primaryText="Промо 5" />
                </SelectField>
              </div>
    }
});

export default PromoArticleList;