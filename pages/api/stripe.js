import Stripe from "stripe";
import * as paypal from "paypal-rest-sdk";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
paypal.configure({
  mode: "live", //sandbox or live
  client_id:
    "AQCa2lmvPUd7Rf5EhrLkLX9f-k8CZgix-mMmayc9Gkpfg0MMr8y80Kxh1qeJBfSy55ZMI9BK7j9DBeI7",
  client_secret:
    "EOP0vtwqot4AWS1o84fPmgigoM-BIX1X1DPIvBpALRsaduDWWDMnyac42oWGuA3RvEFFNY9jlLAYLzMG",
  openid_redirect_uri: "http://example.com",
});
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // const params = {
      //   submit_type: "pay",
      //   mode: "payment",
      //   payment_method_types: ["card"],
      //   billing_address_collection: "auto",
      //   // shipping_options: [
      //   //   { shipping_rate: 'shr_1Kn3IaEnylLNWUqj5rqhg9oV' },
      //   // ],
      //   line_items: req.body.map((item) => {
      //     const img = item.image[0].asset._ref;
      //     const newImage = img
      //       .replace(
      //         "image-",
      //         "https://cdn.sanity.io/images/vfxfwnaw/production/"
      //       )
      //       .replace("-webp", ".webp");

      //     return {
      //       price_data: {
      //         currency: "vnd",
      //         product_data: {
      //           name: item.name,
      //           images: [newImage],
      //         },
      //         unit_amount: item.price * 100,
      //       },
      //       adjustable_quantity: {
      //         enabled: true,
      //         minimum: 1,
      //       },
      //       quantity: item.quantity,
      //     };
      //   }),
      //   success_url: `${req.headers.origin}/success`,
      //   cancel_url: `${req.headers.origin}/canceled`,
      // };

      // Create Checkout Sessions from body params.
      var create_payment_json = {
        intent: "sale",
        payer: {
          payment_method: "paypal",
        },
        redirect_urls: {
          return_url: `${req.headers.origin}/success`,
          cancel_url: `${req.headers.origin}/canceled`,
        },
        transactions: req.body.map((item) => {
          const img = item.image[0].asset._ref;
          const newImage = img
            .replace(
              "image-",
              "https://cdn.sanity.io/images/vfxfwnaw/production/"
            )
            .replace("-webp", ".webp");
          return {
            item_list: {
              items: [
                {
                  name: item.name,
                  sku: "item",
                  price: item.price * 100,
                  currency: "VND",
                  quantity: item.quantity,
                },
              ],
            },
            amount: {
              currency: "VND",
              total: item.price * 100,
            },
            description: "This is the Paypal.",
          };
        }),
      };

      paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
          console.log(error);
          throw error;
        } else {
          console.log("Create Payment Response");
          console.log(payment);
        }
      });
      res.status(200).json({ Success: "Success" });
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
