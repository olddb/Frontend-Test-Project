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
    this.state = {search: ''};
  }

  applySearch = articles => articles.filter(a => {
    return (a.content && a.content.toLowerCase().includes(this.state.search)) ||
    (a.description && a.description.toLowerCase().includes(this.state.search)) ||
    (a.title && a.title.toLowerCase().includes(this.state.search))
  });

  render() {
    const { applySearch } = this;
    const { data: { articles } } = this.props;
    console.log('AllArticles -> render -> articles', articles);
    const filteredArticles = applySearch(articles);
    return (
      <div className="all-articles">
        <Search placeholder="Rechercher par mot clé ou par phrase" onSearch={val => this.setState({search: val.toLowerCase()})} enterButton />
        {filteredArticles.map(a => <Article data={a} key={a.url} /> )}
      </div>
    );
  }
}

AllArticles.propTypes = {
  data: PropTypes.object,
}; 

export default AllArticles;
