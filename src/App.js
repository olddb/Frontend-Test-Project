import React from 'react';
import { API_KEY } from './constants';
import AllArticles from './Components/AllArticles';
import './App.css';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {news: []};
  }

  componentDidMount() {
    this.initNews();
  }

  initNews() {
    var url = 'http://newsapi.org/v2/top-headlines?' +
    'country=fr&' +
    'apiKey=' + API_KEY ;
    var req = new Request(url);
    fetch(req)
      .then(response => response.json())
      .then(resJson => this.setState({news: resJson}))
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        {this.state.news.articles && <AllArticles
          data={this.state.news}
        />}
      </div>
    );
  }
}
