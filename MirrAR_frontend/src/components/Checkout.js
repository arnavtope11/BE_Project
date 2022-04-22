import React, { useState }  from 'react'
import CartIcon from './CartIcon'
import Navbar from './Navbar'

import lips1 from '../images/pac1.jpg'



export default function Checkout(props) {

    let content = [];


    const defaultList = [
        { 
            productName: "Lipstick (Blue)",
            imgURL : lips1,
            metaInfo:"Matte finsh smooth velvet finish 1.5gm",
            price : 125
        },
        { 
            productName: "Lipstick (Red)",
            imgURL : lips1,
            metaInfo:"Matte finsh smooth velvet finish 1.5gm",
            price : 12
        },
        { 
            productName: "Lipstick (Green)",
            imgURL : lips1,
            metaInfo:"Matte finsh smooth velvet finish 1.5gm",
            price : 60
        },
        { 
            productName: "Lipstick (Yellow)",
            imgURL : lips1,
            metaInfo:"Matte finsh smooth velvet finish 1.5gm",
            price : 80
        },
    ];

    const [list, updateList] = useState(defaultList);
    let [counter, setCounter] = useState(list.length)


    const revomeFromContent = (id) => {
        
        var newlist = list.splice(id, 1)
        updateList(list);
        setCounter(list.length)
        console.log(list.length)
      
    }



    const getContent = () => {


        for(let i = 0; i <counter; i++) { 

            content.push(

            <div className="checkout__div">
                
                <div className="checkout__div__img">
                    <img src={list[i].imgURL} alt=""/>
                </div>

                <div className="checkout__div__info">
                    <div className="checkout__div__header">
                        <h2>{list[i].productName}</h2>
                        <span className='deletefrom__checkout' onClick={() => revomeFromContent(i)}>X</span>
                    </div>
                    <div className="checkout__div__footer">
                        <h5>
                            {list[i].metaInfo}
                        </h5>
                        <h4>
                            <span>₹{list[i].price}</span>
                        </h4>
                    </div>
                </div>

            </div>

            )


        }


        return content;

    }


  return (
   
    <>
    <Navbar/>

    <section className="checkout__section">

        <div className="headers__checkout">
            <h1 className="trail__list"><b>Your trial list !</b></h1> <br/> <br/>
            <div className="headers__checkout__buttons">
                <h1>Search for more</h1>
                <h1>Try Now</h1>
            </div>
        </div>
        

        <div className="checkout__divs">

            {getContent()}


        </div>

    </section>
    <CartIcon countCart = {counter}/>
    </>












  )
}
