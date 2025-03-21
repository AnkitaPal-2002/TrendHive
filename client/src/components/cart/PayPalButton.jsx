import React from 'react'
import {PayPalButtons, PayPalScriptProvider} from '@paypal/react-paypal-js'
import { Navigate, useNavigate } from 'react-router-dom';

const PayPalButton = ({amount, onSucess, onError}) => {
    const navigate = useNavigate();
  return (
   
        <PayPalButtons style={{layout: "vertical"}}
            createOrder={(data, actions) => {
                // Set your desired order details
                console.log("Creating order...");
                
                return actions.order.create({
                    purchase_units: [
                        {
                            amount: {
                               value: parseFloat(amount).toFixed(2)
                            }
                        }
                    ]
                });
            }}
            onApprove={(data, actions) => {
                console.log("Capturing order...");
                navigate('/order-confirmation');
                return actions.order.capture({}).then(onSucess)
            }}
            onError={onError}
            ></PayPalButtons>

    
  )
}

export default PayPalButton
