const Question = require('../../../models/question');
import dbConnect from '../../../utils/helpers/dbHelpers';
const sgMail = require('@sendgrid/mail');

async function handler(req, res) {
  const { method } = req;
  await dbConnect();

  switch (method) {
    case 'POST': {
      try {
        const question = await Question.create(req.body);

        sgMail.setApiKey(process.env.NEXT_PUBLIC_SEND_GRID);

        const msg = {
          to: 'nikola.tasic@dilig.net', //req.body.email, // Change to your recipient
          from: 'nikola.tasic@dilig.net', // Change to your verified sender
          subject: 'Question submitted',
          text: 'Your question was submitted successfully, we will contact you via email shortly. Thank you!',
          html: '<strong>Your question was submitted successfully, we will contact you via email shortly. Thank you!</strong>',
        };

        sgMail
          .send(msg)
          .then(() => {
            console.log('Email sent');
          })
          .catch((error) => {
            res.status(400).json({ message: error });
          });

        res.status(201).json({
          message:
            'Your message/question was submitted successfully, check your mail for confirmation.',
          question,
        });
      } catch (error) {
        res.status(400).json({ message: error });
      }
      break;
    }
    default:
      res.status(405).json({ message: 'Method not allowed' });
      break;
  }
}

export default handler;
