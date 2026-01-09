import { useEffect } from "react";

export default function SubscribeButton(props) {
  const planId = props.planId;

  useEffect(() => {
    const rzpPaymentForm = document.getElementById(
      `rzp_payment_form_${planId}`
    );

    if (rzpPaymentForm == null || rzpPaymentForm == undefined) return;

    if (!rzpPaymentForm.hasChildNodes()) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.razorpay.com/static/widget/subscription-button.js";
      script.async = true;
      script.dataset.subscription_button_id = planId;
      script.dataset.button_theme = "rzp-dark-standard";
      rzpPaymentForm.appendChild(script);
    }
  }, [planId]);

  return (
    <div>
      <form hidden id={`rzp_payment_form_${planId}`}></form>
    </div>
  );
}
