import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

class Article extends React.Component {
  render() {
    const { data, hideArticle } = this.props;
     return (
      data.title && data.urlToImage && data.content && <div className='article'>
        <h3>{data.title}</h3>
          <div className="image-container">
            <img src={data.urlToImage} alt={data.content}/>
            <div className='hideOrRead'>
              <a target='_blank' rel="noopener noreferrer" href={data.url}><div className='read'>Lire<AiOutlineEye /></div></a>
              <button onClick={() => hideArticle(data.url)}><div className='hide'><AiOutlineEyeInvisible />Cacher</div></button>
            </div>
          </div>
       </div>
    );
  }
}

Article.propTypes = {
  data: PropTypes.object,
  hideArticle: PropTypes.func,
}; 

export default Article;
