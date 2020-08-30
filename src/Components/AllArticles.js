import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

class AllArticles extends React.Component {
  render() {
    const { data: { articles } } = this.props;
    console.log('Articles -> render -> articles', articles);
    return (
      <div>
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
