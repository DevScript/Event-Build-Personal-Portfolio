const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });
admin.initializeApp();

/**
 * Here we're using Gmail to send
 */
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "yourmail@gmail.com",
        pass: "yourpassword",
    },
});

exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        // getting dest email by query string
        const dest = req.query.dest;
        const name = req.query.name;

        const mailOptions = {
            from: "Dinesh S Y <yourmail@gmail.com>", // Something like: Jane Doe <janedoe@gmail.com>
            to: dest,
            subject: "Thanks for your love..!!", // email subject
            html: `<h1> Hi ${name}.</h1>
                <br />
               <h3>I really appreciate your time in sending me a wonderful message. </h3>
               <h3>I'll encourage you to recommend me for any freelancing services, I'm always open for opportunities.</h3>
               <h3>Thanks &hearts; </h3>
               <br/>
               <br/>
               <br/>
               <br/>
               --
               <table border="0" cellspacing="0" cellpadding="0" width="470" style="width:470px"><tbody><tr valign="top"><td style="width:10px;padding-right:10px"><img src="https://d36urhup7zbd7q.cloudfront.net/62f7b5ac-294f-49c8-89bf-50a629ad1c63/91996271770420191202_165652.crop_258x258_173,264.preview.format_png.resize_200x.jpeg#logo" width="65" height="65" alt="photo" style="border-radius:0px;width:65px;height:65px;max-width:120px">&nbsp;</td><td style="border-right:1px solid rgb(69,102,142)"></td><td style="font-stretch:normal;font-size:12px;line-height:normal;font-family:Arial;text-align:initial;color:rgb(100,100,100);padding:0px 10px"><div style="margin-bottom:5px;margin-top:0px" wfd-id="951"><b>Dinesh S Y</b><br><span wfd-id="952">Full Stack Developer</span></div><table width="470" border="0" cellspacing="0" cellpadding="0" style="width:470px;margin-top:5px"><tbody><tr><td style="color:rgb(141,141,141)"><p style="margin:0px"><span style="display:inline-block" wfd-id="950"><a href="tel:8610028497" style="color:rgb(141,141,141);font-family:sans-serif" target="_blank">8610028497</a></span></p></td></tr><tr><td style="color:rgb(141,141,141)"><p style="margin:0px"><span style="white-space:nowrap;display:inline-block" wfd-id="949"><a href="https://din.netlify.com/" style="color:rgb(141,141,141);font-family:sans-serif" target="_blank">https://din.netlify.com</a></span></p></td></tr></tbody></table><div style="margin-top:10px" wfd-id="948"><table border="0" cellpadding="0" cellspacing="0"><tbody><tr style="padding-top:10px"><td align="left" style="padding-right:5px;text-align:center;padding-top:0px"><a href="http://github.com/dineshsy" target="_blank"><img src="https://cdn.gifo.wisestamp.com/social/github/4183c4/16/0.png"></a></td><td align="left" style="padding-right:5px;text-align:center;padding-top:0px"><a href="http://www.linkedin.com/in/sy-d" target="_blank"><img src="https://cdn.gifo.wisestamp.com/social/linkedin/0077b5/16/0.png"></a></td></tr></tbody></table></div></td></tr></tbody></table>
            `, // email content in HTML
        };

        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if (erro) {
                return res.send(erro.toString());
            }
            return res.send("Sended");
        });
    });
});
