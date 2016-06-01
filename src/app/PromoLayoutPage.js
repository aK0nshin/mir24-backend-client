import React from 'react';
import ArticleList from './PromoArticleList';

const PromoLayoutPage = React.createClass({

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
                <p>PromoLayoutPage</p>
                <ArticleList>
                </ArticleList>
              </div>
    }
});

export default PromoLayoutPage;