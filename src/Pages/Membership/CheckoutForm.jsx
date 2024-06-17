import { useEffect, useState } from "react";
import "../../CSS/CheckoutForm.css";
import { ImSpinner9 } from "react-icons/im";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useAuth from "../../Hook/useAuth";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

const CheckoutForm = () => {
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState();
  const [cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState(false);

  //   Fetch users Data
  const { data: users = {} } = useQuery({
    queryKey: ["users", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure(`/user/${user?.email}`);
      return data;
    },
  });
  console.log(users);

  const price = 150;
  // console.log(users)
  useEffect(() => {
    if (price) {
      getClintSecreat({ price: price });
    }
  }, [price]);

  // get clintsecrete id
  const getClintSecreat = async (price) => {
    const { data } = await axiosSecure.post(`/create-payment-intent`, price);
    // return data
    console.log("clint from server --->", data);
    setClientSecret(data.clientSecret);
  };

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    setProcessing(true);
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

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
      setCardError(error.message);
      setProcessing(false);
      return;
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setCardError("");
    }

    // confrim payment
    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      setCardError(confirmError.message);
      setProcessing(false);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      //
      // console.log(paymentInfo);
      const paymentInfo = {
        price,
        name: user?.displayName,
        email: user?.email,
        transactionId: paymentIntent.id,
        date: new Date(),
        
      };
      toast.success("payment successfull")
      console.log(paymentInfo);

      try {
        //
        await axiosSecure.post("/payment", paymentInfo);
        console.log(users);
        await axiosSecure.patch(`/user/status/${users.email}`, {
          badges: "Gold",
        });
      } catch {
        //
      }
    }
    setProcessing(false);
  };

  return (
    <div className="mx-64 ">
      <>
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

          <div className="flex justify-between ">
            <button
              className="btn text-red-500 font-bold"
              type="submit"
              disabled={!stripe || !clientSecret || processing}
            >
              {processing ? (
                <ImSpinner9 className="animate-spin m-auto"></ImSpinner9>
              ) : (
                `Pay 150$`
              )}
            </button>
            <button
              className="btn text-red-500 font-bold"
              type="submit"
              disabled={!stripe}
            >
              Cancel
            </button>
          </div>
        </form>
        {cardError && <p className="text-red-500 ml-8">{cardError}</p>}
      </>
    </div>
  );
};

export default CheckoutForm;
