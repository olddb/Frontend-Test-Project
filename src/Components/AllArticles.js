import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import Article from './Article';
import 'antd/lib/input/style/index.css';
import 'antd/lib/button/style/index.css';

const { Search } = Input;

class AllArticles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hiddenArticles: [],
      search: ''
    };
    this.hideArticle = this.hideArticle.bind(this);
  }

  applySearchAndHide = articles => articles.filter(a =>
    (!this.state.hiddenArticles.includes(a.url)) && (
      (a.content && a.content.toLowerCase().includes(this.state.search)) ||
      (a.description && a.description.toLowerCase().includes(this.state.search)) ||
      (a.title && a.title.toLowerCase().includes(this.state.search))
    )
  );

  hideArticle = url => this.setState({hiddenArticles: [...this.state.hiddenArticles, url] })

  render() {
    const { applySearchAndHide, hideArticle } = this;
    const { data: { articles }, searchArticles } = this.props;
    const filteredArticles = applySearchAndHide(articles);
    console.log(this.state.hiddenArticles)
    return (
      <div>
        <Search placeholder="Rechercher par mot clé ou par phrase" onSearch={val => searchArticles(val)} enterButton />
        <div className="all-articles">
          {filteredArticles.map(a => <Article hideArticle={e => hideArticle(e)} data={a} key={a.url} /> )}
        </div>
      </div>
    );
  }
}

AllArticles.propTypes = {
  data: PropTypes.object,
  searchArticles: PropTypes.func.isRequired,
}; 

export default AllArticles;
