import {stripe} from '../../services/stripe'
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {totalAmount} = req.body
    const amount = Number(totalAmount)
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items:[ // all arguments are required
        {
          price_data: {
            unit_amount: totalAmount*100,
            currency:'brl',
            product_data: {
              name: 'Test Product',
            },
          },
          quantity: 1,
        },
      ],
        mode: 'payment',
        success_url: `http://localhost:3000`,
        cancel_url:`http://localhost:3000`,
      });
      
      return res.status(200).json({checkoutUrl:session.url});
      
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}