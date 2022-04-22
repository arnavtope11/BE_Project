import React from 'react'
import tshirt_up from '../images/tshirt_up.jpg'
import { Link } from 'react-router-dom'

import black from '../images/Plain Black.jpg'
import green from '../images/Plain Green.jpg'
import blue from '../images/Plain Blue.jpg'
import red from '../images/Plain Red.jpg'
import white from '../images/Plain White.jpg'

function tshirt1(){
    sessionStorage.setItem("shirt_img",blue);
    sessionStorage.setItem("shirt_desc","PLAIN BLUE");
    sessionStorage.setItem("shirt_price","₹450");
}

function tshirt2(){
    sessionStorage.setItem("shirt_img",black);
    sessionStorage.setItem("shirt_desc","PLAIN BLACK");
    sessionStorage.setItem("shirt_price","₹635");
}

function tshirt3(){
    sessionStorage.setItem("shirt_img",green);
    sessionStorage.setItem("shirt_desc","PLAIN GREEN");
    sessionStorage.setItem("shirt_price","₹575");
}

function tshirt4(){
    sessionStorage.setItem("shirt_img",red);
    sessionStorage.setItem("shirt_desc","PLAIN RED");
    sessionStorage.setItem("shirt_price","₹725");
}

function tshirt5(){
    sessionStorage.setItem("shirt_img",white);
    sessionStorage.setItem("shirt_desc","PLAIN WHITE");
    sessionStorage.setItem("shirt_price","₹250");
}

export default function LipProducts() {
  return (
    <> 
    <div className="container-fluid ">
        <div className="row">
            <div className="col-sm">
                <div className="row-sm">
                    <img src={tshirt_up} className="lipsticks img-fluid"></img>
                    <h1 className="carousel-caption">Choose Your Perfect T-Shirt!</h1>
                </div>
            </div>
            
        </div>
    
    </div>
    
    <div className="container-fluid ">
        <div className="row mt-5">
            <div className="col-sm-2 d-flex justify-content-center mb-4 ml-4 mr-4">
                <Link to="/tryout_shirt" onClick={tshirt1}>
                    <div className="pac_product1">
                        <img src={blue} className="pac_image1"></img>
                        <h1 className="pac1_desc">PLAIN BLUE <br/><br/>₹450</h1>
                    </div>
                </Link>
            </div>

            <div className="col-sm-2 d-flex justify-content-center mb-4 ml-4 mr-4">
            <Link to="/tryout_shirt" onClick={tshirt2}>
                <div className="pac_product1">
                    <img src={black} className="pac_image1"></img>
                    <h1 className="pac1_desc">PLAIN BLACK<br/><br/>₹635</h1>
                </div>
            </Link>
            </div>

            <div className="col-sm-2 d-flex justify-content-center mb-4 ml-4 mr-4">
            <Link to="/tryout_shirt" onClick={tshirt3}>
                <div className="pac_product1">
                    <img src={green} className="pac_image1"></img>
                    <h1 className="pac1_desc">PLAIN GREEN <br/><br/>₹575</h1>
                </div>
            </Link>
            </div>

            <div className="col-sm-2 d-flex justify-content-center mb-4 ml-4 mr-4">
            <Link to="/tryout_shirt" onClick={tshirt4}>
                <div className="pac_product1">
                    <img src={red} className="pac_image1"></img>
                    <h1 className="pac1_desc">PLAIN RED<br/><br/>₹725</h1>
                </div>
            </Link>
            </div>

            <div className="col-sm-2 d-flex justify-content-center mb-4 ml-4 mr-4">
            <Link to="/tryout_shirt" onClick={tshirt5}>
                <div className="pac_product1">
                    <img src={white} className="pac_image1"></img>
                    <h1 className="pac1_desc">PLAIN WHITE<br/><br/>₹250</h1>
                </div>
            </Link>
            </div>
        </div>
    </div>
       
    {/*
    <a href="#">
        <div className="pac_product1">
            <img src={lips1} className="pac_image1"></img>
            <h1 className="pac1_desc">MATTE LIPSTICK <br/><br/>₹450</h1>
        </div>
    </a>

    <a href="#">
        <div className="pac_product2">
            <img src={lips2} className="pac_image2"></img>
            <h1 className="pac2_desc">SOFT MATTE CREAM LIPSTICK <br/><br/>₹635</h1>
        </div>
    </a>

    <a href="#">
        <div className="pac_product3">
            <img src={lips3} className="pac_image3"></img>
            <h1 className="pac3_desc">LIP DIP LIPSTICK <br/><br/>₹575</h1>
        </div>
    </a>

    <a href="#">
        <div className="pac_product4">
            <img src={lips4} className="pac_image4"></img>
            <h1 className="pac4_desc">PURE MATTE LIPSTICK <br/><br/>₹725</h1>
        </div>
    </a>

    <a href="#">
        <div className="pac_product5">
            <img src={lips5} className="pac_image5"></img>
            <h1 className="pac5_desc">LIP COLOR REFILL<br/><br/>₹250</h1>
        </div>
  </a>*/}
</>
  )
}
