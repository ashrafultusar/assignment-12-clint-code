import { useEffect, useState } from "react";
import "../../CSS/CheckoutForm.css";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useAuth from "../../Hook/useAuth";

const CheckoutForm = () => {
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const price = 150;

  useEffect(() => {
    if (price) {
      getClintSecreat({ price: price });
    }
  }, []);

  // get clintsecrete id
  const getClintSecreat = async (price) => {
    const { data } = await axiosSecure.post(`/create-payment-intent`, price);
    // return data
    console.log("clint from server", data);
    setClientSecret(data.clientSecret);
  };

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    // confrim payment
    const {error:confirmError,paymentIntent}=await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
    });
      
      if (confirmError) {
          console.log(confirmError)
return
      }

      if (paymentIntent.status === 'succeeded') {
          //   
          console.log(paymentInfo)
          const paymentInfo = {
              price,
              transactionId: paymentIntent.id,
              date: new Date(),
          }
          
          console.log(paymentInfo);
      }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />

      <div className="flex justify-between">
        <button
          className="text-red-500 font-bold"
          type="submit"
          disabled={!stripe}
        >
          Pay 150$
        </button>
        <button
          className="text-red-500 font-bold"
          type="submit"
          disabled={!stripe}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
