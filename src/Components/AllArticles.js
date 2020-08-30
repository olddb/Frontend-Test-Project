import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import Article from './Article';
import 'antd/lib/input/style/index.css';
import 'antd/lib/button/style/index.css';

const { Search } = Input;

class AllArticles extends React.Component {
  render() {
    const { data: { articles } } = this.props;
    console.log('Articles -> render -> articles', articles);
    return (
      <div>
        <Search placeholder="Rechercher par mot clé ou par phrase" onSearch={value => console.log(value)} enterButton />
        {articles.map(a =>
          <Article data={a} key={a.url} />
        )}
      </div>
    );
  }
}

AllArticles.propTypes = {
  data: PropTypes.object,
}; 

export default AllArticles;
