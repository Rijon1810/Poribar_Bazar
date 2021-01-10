import React from 'react'
import { Card , Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'
const Product = ({history ,product }) => {
  const addToCartHandler = () => {
    
    history.push(`/cart/${product._id}?qty=1`)
  }
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img     width={171} height={180}src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>৳{product.price}</Card.Text>
        <Button        
        onClick={addToCartHandler}         
        className='btn-block'
                      type='button'
                      disabled={product.countInStock === 0}>Add To Cart
        </Button>
      </Card.Body>
    </Card>
  )
}

export default Product
