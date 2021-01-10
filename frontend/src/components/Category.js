import React, { useState  , useEffect } from 'react'
import {useSelector } from 'react-redux'
import { Form, Button , Dropdown } from 'react-bootstrap'

const Category = ({ history }) => {
/*   const [keyword, setKeyword] = useState('') */

  const productList = useSelector((state) => state.productList)
  const { products} = productList

// unique category selecting
  const categoryList = [...new Set(products.map(it => it.category))];
 
  const clickHandler = (e) => {
    e.preventDefault();
  
/*         console.log(keyword) */

//taking value from the list 
        console.log(e.target.text)
        const ch = e.target.text;

    if (ch.trim()) {
      history.push(`/search/${ch}`)
    } else {
      history.push('/')
    }
  }

  

  return (
      <>
{/*     <Form onSubmit={submitHandler} inline>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5'
      ></Form.Control>
      <Button type='submit' variant='outline-success' className='p-2'>
        Search
      </Button>
    </Form> */}
    
 

    <Dropdown className='margin-left-10' >
  <Dropdown.Toggle style={{fontSize: 18}}   variant="primary" id="dropdown-basic-button">
    Category
  </Dropdown.Toggle>

  <Dropdown.Menu >
  {categoryList.map((product ,index) => ( <Dropdown.Item key={index} style={{fontSize: 13}}  type='text' onClick={clickHandler}     value={product.category}>{product}</Dropdown.Item>))}
  </Dropdown.Menu>
</Dropdown>
    </>

    
  )
}

export default Category
