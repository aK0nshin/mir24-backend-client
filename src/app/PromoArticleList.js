import React from 'react';

const PromoArticleList = React.createClass({

    getInitialState: function () {
        return {
            rubric: '3720054',
            article_type: '3720054',
            olympic: '8339569',
            copyright:'1'
        }
    },

    render: function () {
       return <div>
                <p>PromoArticleList</p>
              </div>
    }
});

export default PromoArticleList;