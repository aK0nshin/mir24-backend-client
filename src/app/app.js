import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './Main';
import Sample from './Sample';
import News from './News';
import Promo from './Promo';
import ArticleEdit from './ArticleEdit';
import {Router, Route, browserHistory} from 'react-router';

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <Route path="sample" component={Sample} />
            <Route path="news" component={News}/>
            <Route path="promo" component={Promo}/>
            <Route path="article/edit" component={ArticleEdit} />
        </Route>
    </Router>,
    document.getElementById('app')
);
