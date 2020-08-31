import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import moment from 'moment';
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { Button } from 'antd';
import 'antd/lib/input/style/index.css';
import 'antd/lib/button/style/index.css';
import Article from './Article';

const { Search } = Input;

class AllArticles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hiddenArticles: [],
      sortDate: 0
    };
    this.hideArticle = this.hideArticle.bind(this);
  }

  applyHide = articles => articles.filter(a => !this.state.hiddenArticles.includes(a.url));
  hideArticle = url => this.setState({hiddenArticles: [...this.state.hiddenArticles, url] })

  applySortDate = articles => {
    const order = this.state.sortDate;
    if (order === 0) return articles;
    if (order === 1) return articles.sort((a, b) => moment(b.publishedAt) - moment(a.publishedAt))
    return articles.sort((a, b) => moment(a.publishedAt) - moment(b.publishedAt))
  }
  sortByDate = () => this.setState({ sortDate: (this.state.sortDate + 1) % 3 })

  render() {
    const { applyHide, hideArticle, sortByDate, applySortDate } = this;
    const { data: { articles }, searchArticles } = this.props;
    const filteredArticles = applyHide(articles);
    const sortedFilteredArticles = applySortDate(filteredArticles);
    console.log('AllArticles -> render -> this.state.sortDate', this.state.sortDate);
    return (
      <div>
        <Search placeholder="Rechercher par mot clé ou par phrase" onSearch={val => searchArticles(val)} enterButton />
        <Button className="sort-date-button" onClick={() => sortByDate()}>
          <p className='date-sort'>
            Trier par date
            {this.state.sortDate === 1 && <AiFillCaretDown />}
            {this.state.sortDate === 2 && <AiFillCaretUp />}
          </p>
        </Button>
        <div className="all-articles">
          {sortedFilteredArticles.map(a => <Article hideArticle={e => hideArticle(e)} data={a} key={a.url} /> )}
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
