import React from 'react';
import { Card, Icon, Image, Button, Container } from 'semantic-ui-react';
import ReactStars from "react-rating-stars-component";

const BookCard = book => {
    const { title, author, price, image, addToCart, addedCount, rating } = book;
    return (
        <Card>
            <Image src={image} />
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    {author}
                </Card.Meta>
            </Card.Content>

            <Card.Content extra>
                
                    <Icon name="euro" />
                    {price}
                
            </Card.Content>

            <ReactStars
                count={5}
                value={rating}
                size={24}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700" />

            <Button onClick={addToCart.bind(this, book)}>ADD TO CART {addedCount > 0 && `(${addedCount})`} </Button>
        </Card>
    )
}

export default BookCard;