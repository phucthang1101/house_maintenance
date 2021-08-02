const sgMail = require('@sendgrid/mail'); // SENDGRID_API_KEY
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const formidable = require('formidable');
const fs = require('fs');

exports.contactForm = async (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.multiples = true;
  form.parse(req, async (err, fields, files) => {
  
 // console.log(files);
    const { email, name, message } = fields;
    let attachments;
    if (files.photo) {
    
       attachments = files.photo.map((file) => {
        const pathToAttachment = file.path;
        const attachment = fs.readFileSync(pathToAttachment).toString('base64');
        return {
          filename: file.name,
          disposition: 'attachment',
          type: file.mimetype,
          content: attachment,
        };
      });
    }
  
   
   

    const emailData = {
        to: process.env.EMAIL_TO,
        from: process.env.EMAIL_TO,
        subject: `Contact form - ${process.env.APP_NAME}`,
        text: `Email received from CONTACT from \n Sender name: ${name} \n Sender email: ${email} \n Sender message: ${message}`,
        attachments: attachments,
        html: `
            <h4>Email received from contact form:</h4>
            <p>Sender name: ${name}</p>
            <p>Sender email: ${email}</p>
            <p>Sender message: ${message}</p>
            <hr />
           
        `
    };
  
    // sgMail.send(emailData).then(sent => {
    //     return res.json({
    //         success: true
    //     });
    // });
    (async () => {
        try {
          await sgMail.send(emailData);
        } catch (error) {
          console.error(error);
       
          if (error.response) {
            console.error(error.response.body)
          }
        }
        res.json({
            success:true
        })
      })();
    })
};


exports.sendMailReplyComment = (req, res) => {
    const { email, name, message } = req.body;
    // console.log(req.body);

    const emailData = {
        to: email,
        from: process.env.EMAIL_TO,
        subject: `Contact form - ${process.env.APP_NAME}`,
        text: `Email received from contact from \n Sender name: ${name} \n Sender email: ${email} \n Sender message: ${message}`,
        html: `
            <h4>Email received from contact form:</h4>
            <p>Sender name: ${name}</p>
            <p>Sender email: ${email}</p>
            <p>Sender message: ${message}</p>
            <hr />
            <p>This email may contain sensetive information</p>
            <p>https://seoblog.com</p>
        `
    };

    (async () => {
        try {
          await sgMail.send(emailData);
        } catch (error) {
          console.error(error);
       
          if (error.response) {
            console.error(error.response.body)
          }
        }
        res.json({
            success:true
        })
      })();
};