import React from 'react'
import {PayPalButtons, PayPalScriptProvider} from '@paypal/react-paypal-js'

const PayPalButton = ({amount, onSucess, onError}) => {
  return (
    <PayPalScriptProvider options={{"client-id": "AWYJx3A8JA8uDWle9WYASmo9uAubGib9xkUzfPbsqOHcZlIVhFhpxjyXpcqAUmnHPyRjsRFwoNmKhGw8",
        "currency": "USD",
        "intent": "capture"
    }}>
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
                return actions.order.capture({}).then(onSucess)
            }}
            onError={onError}
            ></PayPalButtons>

    </PayPalScriptProvider>
  )
}

export default PayPalButton
