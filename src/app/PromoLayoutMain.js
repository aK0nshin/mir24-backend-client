import React from 'react';
import ArticleList from './PromoArticleList';

const styles = {
  general: {
    width: '90%',
    margin: 'auto',
  },
  header: {
    width: '96%',
    height: '150',
    margin: 'auto',
    padding: '2%',
    background: '#2F4172',
    float: 'left',
  },
  footer: {
    width: '96%',
    height: '150',
    margin: 'auto',
    padding: '2%',
    background: '#2F4172',
    float: 'left',
  },
  main: {
    width: '58%',
    height: '900',
    margin: 'auto',
    padding: '1%',
    background: '#7986AC',
    float: 'left',
  },
  rightCol: {
    width: '18%',
    height: '900',
    margin: 'auto',
    padding: '1%',
    background: '#4F608F',
    float: 'left',
  },
  leftCol: {
    width: '18%',
    height: '900',
    margin: 'auto',
    padding: '1%',
    background: '#4F608F',
    float: 'left',
  },
  stdNewsBlock: {
    width: '200',
    height: '125',
    marginLeft: '10',
    marginTop: '10',
    padding: '1%',
    float: 'left',
    borderStyle: 'outset',
    borderWidth: '5',
    borderColor: '#2D882D',
  },
  promoSideBlock:{
    height: '98%',
    borderStyle: 'outset',
    borderWidth: '5',
    borderColor: '#b30000',
  },
  promoStdBlock:{
    width: '200',
    height: '125',
    marginLeft: '10',
    marginTop: '10',
    padding: '1%',
    float: 'left',
    borderStyle: 'outset',
    borderWidth: '5',
    borderColor: '#b30000',
  },
};

const PromoLayoutMain = React.createClass({

    getInitialState: function () {
        return {
            rubric: '3720054',
            article_type: '3720054',
            olympic: '8339569',
            copyright:'1'
        }
    },

    render: function () {
       return <div style={styles.general}>
                <div style={styles.header}>
                    <p>Header</p>
                </div>
                <div style={styles.leftCol}>
                    <div style= {styles.promoSideBlock}>
                        <ArticleList>
                        </ArticleList>
                        <h3 style={{marginLeft: '40%'}}>Промо 1</h3>
                    </div>
                </div>
                <div style={styles.main}>
                    <p>Main</p>
                    <div style={styles.stdNewsBlock}>
                    </div>
                    <div style={styles.stdNewsBlock}>
                    </div>
                    <div style={styles.stdNewsBlock}>
                    </div>
                    <div style={styles.stdNewsBlock}>
                    </div>
                    <div style={styles.stdNewsBlock}>
                    </div>
                    <div style={styles.stdNewsBlock}>
                    </div>
                    <div style={styles.stdNewsBlock}>
                    </div>
                    <div style={styles.stdNewsBlock}>
                    </div>
                    <div style={styles.stdNewsBlock}>
                    </div>
                    <div style={styles.stdNewsBlock}>
                    </div>
                    <div style={styles.stdNewsBlock}>
                    </div>
                    <div style={styles.stdNewsBlock}>
                    </div>
                    <div style={styles.promoStdBlock}>
                        <ArticleList>
                        </ArticleList>
                    </div>
                    <div style={styles.promoStdBlock}>
                        <ArticleList>
                        </ArticleList>
                    </div>
                    <div style={styles.promoStdBlock}>
                        <ArticleList>
                        </ArticleList>
                    </div>
                    <div style={styles.promoStdBlock}>
                        <ArticleList>
                        </ArticleList>
                    </div>
                </div>
                <div style={styles.rightCol}>
                    <div style= {styles.promoSideBlock}>
                        <ArticleList>
                        </ArticleList>
                        <h3 style={{marginLeft: '40%'}}>Промо 2</h3>
                    </div>
                </div>
                <div style={styles.footer}>
                    <p>Footer</p>
                </div>
              </div>
    }
});

export default PromoLayoutMain;