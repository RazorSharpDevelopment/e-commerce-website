import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HFOrHBJe2e4Wdq4xxShfASN4Pc8VbC5K6xvZTkrLwx2cftH5F0H5nFJyXDDbh8NbwSXq1jSkL9dy7CbPjzJ2DTK00w6KaBUV3";

  const onToken = (token) => {
    console.log(token);
    alert("Payment succesful :)");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothing Ltd."
      billingAddress
      shippingAddress
      image=""
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
