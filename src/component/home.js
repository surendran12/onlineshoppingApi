import React, { useEffect, useState,useContext } from "react";
import { Row, Col, Form, FormLabel, Pagination } from "react-bootstrap";
import item1 from "./../images/item1.png";
import item2 from "./../images/item2.png";
import item3 from "./../images/item3.png";
import item4 from "./../images/item4.png";
import item5 from "./../images/item5.png";
import item6 from "./../images/item6.png";
import like from "./../images/like.png";
import logo from  './../images/logo.jpg';
import cart from  './../images/cart.png';
import search from  './../images/search.png';
import collapse from  './../images/collapse.png';


function Home() {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [ searchInput,setSearchInput ] = useState(''); 

  const Rating = ({ likeView }) => {
    const [like, setLike] = useState(0);
    const handleOnClick = (index) => {
      setLike(index + 1);
    };

    return (
      <div className="rating">
        {[...Array(likeView)].map((index) => (
          <span
            key={index}
            className={`star ${index < like ? "active" : ""}`}
            onClick={() => handleOnClick(index)}
          >
            &#9733;
          </span>
        ))}
      </div>
    );
  };

  

  const handleInputChange = async (e) => {
    setSearchInput(e.target.value); 

    const response = await fetch(
        `https://dummyjson.com/products/search?q=${e.target.value}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProduct(data.products);
  };

  const handleCategoryChange = async (e) => {

    if (e.target.value !== "all") {
      const response = await fetch(
        `https://dummyjson.com/products/category/${e.target.value}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProduct(data.products);
    } else {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProduct(data.products);
    }
  };

  useEffect(() => {
    const fetchAllProduct = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProduct(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    //
    const getAllCateogy = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/categories"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCategory(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAllProduct();
    getAllCateogy();
  }, []);

  return (
    <div>
    <header className="header">
        <div className="headerLeft">
            <div className="logo">
                <a href="/"><img src={logo} alt="Logo" /></a>
            </div>
            <div className="searchbar">
                <input
                  type="text"
                  className="searchInput"
                  placeholder="What do you want to buy today?"
                  onChange={handleInputChange} 
                />
                <span className="closeIcon">&times;</span>
            </div>
        </div>
        <div className="headerRight">
            <nav>
                <ul>
                <li><a href="/store">Store</a></li>
                <li><a href="/">Account</a></li>
                <li><a href="/">Whish List</a></li>
                <li><a href="/">Basket <span><img src={cart} alt="cart" /></span></a></li>
                </ul>
            </nav>
        </div>

        <div className="collapsemenu">
            <a href="/"><img src={collapse} alt="collapse" /></a>
        </div>
    </header>

    <div className="cartLayout">
      <div className="section">
        <Row>
          <div className="mobilelist">
            <Col sm={12} className="headerinfo">
              <h3>Lorem ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet <span>Read More</span>
              </p>
            </Col>
            <Col sm={12} className="searchList">
              <Form>
                <FormLabel>Select Category</FormLabel>
                <Form.Select
                  aria-label="Default select example"
                  onChange={handleCategoryChange}
                >
                  <option value="all">Select Category</option>
                  {category.map((ele) => (
                    <option key={ele} value={ele}>
                      {ele}
                    </option>
                  ))}
                </Form.Select>
              </Form>
            </Col>
          </div>
        </Row>

        <Row>
          {product.map((ele, index) => (
            <Col sm="3" className="gridview">
              <div className="productlist">
                <div className="productimg">
                  <img src={ele.thumbnail} alt="item1" />
                  <div className="productlike">
                    <img src={like} alt="like" />
                  </div>
                </div>
                <div className="info">
                  <h4>{ele.title}</h4>
                  <p>{ele.description}</p>
                  <h5>${ele.price}</h5>
                  <div className="star">
                    <Rating likeView={Math.floor(ele.rating)} />
                  </div>
                </div>
              </div>
            </Col>
          ))}

          <Col sm="12" className="pagination">
            {/* <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination> */}
          </Col>
        </Row>
      </div>
    </div>
    </div>
  );
}

export default Home;
