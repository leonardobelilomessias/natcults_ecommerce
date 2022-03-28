const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {totalAmount} = req.body
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items:[ // all arguments are required
        {
          price_data: {
            unit_amount_decimal: totalAmount*100,
            currency:  'brl',
            product_data: {
              name: 'Test Product'
            },
          },
          quantity: 1,
        },
      ],
        mode: 'payment',
        success_url: `http://localhost:3000`,
        cancel_url:`http://localhost:3000`,
      });
      
      return res.status(200).json({sessionId:session.id});
      
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}