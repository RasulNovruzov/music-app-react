import React, { Component } from 'react';
import axios from 'axios';
import { Card, Container } from 'semantic-ui-react'
import Menu from '../containers/Menu';
import BookCard from '../containers/BookCard';
import Filter from '../containers/Filter';

class App extends Component {
  componentWillMount() {
    const { setBooks } = this.props;
    axios.get('/books.json').then(({ data }) => {
      setBooks(data);
    });
  }

  render() {
    const { books, isLoading } = this.props;
    return (
      <Container >
        <Menu />
        <Filter />
        <Card.Group itemsPerRow={5}>
          {
            !isLoading ? 'loading...' : books.map((book, i) => (
              <BookCard key={i} {...book} />
            ))
          }
        </Card.Group>

      </Container>
    )
  }
}

export default App;