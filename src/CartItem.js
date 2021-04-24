import React from 'react';

class CartItem extends React.Component{
    render(){
        return(
            <div className = "cart-item">
                <div className = "left-block">
                    <img style = {style.image}/>
                </div>
                <div className = "right-block">
                    <div style={{fontSize:20}}>Phone</div>
                    <div style={{color:'#777'}}>Rs 999</div>
                    <div style={{color:'#777'}}>Qty: 1</div>
                    <div className="cart-item-actions">
                        {/*Buttons*/}
                    </div>
                </div>
            </div>
        );
    }
}

const style = {
    image:{
        width:110,
        height: 110,
        borderRadius: 4
    }
}

export default CartItem;