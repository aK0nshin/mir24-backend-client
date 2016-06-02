import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import LayoutMain from './PromoLayoutMain';
import LayoutPage from './PromoLayoutPage';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

const Promo = React.createClass({

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
              <Tabs>
                <Tab label="Главная страница" >
                  <div>
                    <p>Главная</p>
                    <LayoutMain>
                    </LayoutMain>
                  </div>
                </Tab>
                <Tab label="Внутренняя страница" >
                  <div>
                    <p>Внутренняя</p>
                    <LayoutPage>
                    </LayoutPage>
                  </div>
                </Tab>
              </Tabs>
            </div>
    }
});

export default Promo;