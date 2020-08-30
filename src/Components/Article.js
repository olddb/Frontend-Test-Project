import React from 'react';
import PropTypes from 'prop-types';

class Article extends React.Component {
  render() {
    const { data } = this.props;
    console.log('Article -> render -> data', data);
     return (
      data.title && data.urlToImage && data.content && <div className='article'>
        <h3>{data.title}</h3>
        <img src={data.urlToImage} alt={data.content}/>
       </div>
    );
  }
}

Article.propTypes = {
  data: PropTypes.object,
}; 

export default Article;
