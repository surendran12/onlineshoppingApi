import React from 'react'
import { Row, Col, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import facebook from  './../images/facebook.png';
import twitter from  './../images/twitter.png';
import instagram from  './../images/instagram.png';
import android from  './../images/android.png';
import apple from  './../images/apple.png';
import notification from  './../images/notification.png';
import creditcard from  './../images/credit-card.png';

function Footer() {
  return (
    <div className='footer'>
    <div className='view'>
        <Row>
            <div className='companyinfo'>
            <Col sm={4}>
                <h5>company info</h5>
                <ul>
                    <li>About</li>
                    <li>Social Responsibilty</li>
                    <li>Affliate</li>
                    <li>Fashion Blogger</li>
                </ul>
            </Col>
            <Col sm={4}>
                <h5>help & support</h5>
                <ul>
                    <li>Shipping info</li>
                    <li>Returns</li>
                    <li>How to order</li>
                    <li>How to track</li>
                    <li>Size Chart</li>
                </ul>
            </Col>
            <Col sm={4}>
                <h5>Customer care</h5>
                <ul>
                    <li>Contact Us</li>
                    <li>Payments</li>
                    <li>Bonus Point</li>
                    <li>Notices</li>
                </ul>
            </Col>
            </div>
        </Row>
        <Row>
            <Col sm={12} className='copyRight'>
                <p>© 2010-2024 All Right Reserved.</p>
                <ul>
                    <li>Privacy Center</li>
                    <li>Privacy and Cookie policy</li>
                    <li>Manage Cookies</li>
                    <li>Terms & Conditions</li>
                    <li>Copyright Notice</li>
                    <li>Imprint</li>
                </ul>
            </Col>
        </Row>
    </div>

    <div className='view'>
         <Row>
            <Col className='social'>
                <h5>social</h5>
                <ul>
                    <li>
                        <span><img src={facebook} alt="facebook" /></span>
                        <span><img src={twitter} alt="twitter" /></span>
                        <span><img src={instagram} alt="instagram" /></span>
                        <span><img src={notification} alt="notification" /></span>
                    </li>
                    {/* <li><input type='text' placeholder='search..'/><Button>Subscribe</Button></li> */}
                </ul>
            </Col>
            <Col className='platform'>
                <h5>platform</h5>
                <ul>
                    <li>
                        <span><img src={android} alt="android" /></span>
                        <span><img src={apple} alt="apple" /></span>
                    </li>
                </ul>
            </Col>

            <Col sm={12} className='signin'>
                <h5>Sign up</h5>
                <div className='email'><input type='text' placeholder='Your email'/><Button>Subscribe</Button></div>
            </Col>
            <p>By Clicking the <span>SUBSCRIBE</span> button, you are agreeing to our <a>Privacy & Cookie Policy</a></p>
            <Col sm={12} className='carddetails'>
                <h5>we accept</h5>
                <ul>
                    <li><span><img src={creditcard} alt="creditcard" /></span></li>
                    <li><span><img src={creditcard} alt="creditcard" /></span></li>
                    <li><span><img src={creditcard} alt="creditcard" /></span></li>
                    <li><span><img src={creditcard} alt="creditcard" /></span></li>
                    <li><span><img src={creditcard} alt="creditcard" /></span></li>
                    <li><span><img src={creditcard} alt="creditcard" /></span></li>
                    <li><span><img src={creditcard} alt="creditcard" /></span></li>
                    <li><span><img src={creditcard} alt="creditcard" /></span></li>
                    <li><span><img src={creditcard} alt="creditcard" /></span></li>
                    <li><span><img src={creditcard} alt="creditcard" /></span></li>
                    <li><span><img src={creditcard} alt="creditcard" /></span></li>
                </ul>
            </Col>
        </Row>

</div>
</div>
  )
}

export default Footer