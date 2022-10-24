const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 9091;
const nodemailer = require("nodemailer");
var bcrypt = require("bcryptjs");


const userRouter = require("./Routes/UserRouter");

const eventRouter = require("./Routes/EventRouter");

const roleRouter = require("./Routes/RoleRouter");

const contactRouter = require("./Routes/ContactRouter");


const Role = require("./Models/RoleModel");
const User = require("./Models/UserModel");

mongoose
  .connect("mongodb://0.0.0.0:27017/SavingPets", { useNewUrlParser: true })
  .then(async () => {
    let rl = await initialeRole();
    initialeUser(rl);
  });
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("Images"));

app.get("/", (req, res) => {
  res.send("Hello Saving Pets");
});
app.use("/User", userRouter);

app.use("/Role", roleRouter);

app.use("/Event", eventRouter);

app.use("/Contact", contactRouter);


app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

async function initialeRole() {
  Role.estimatedDocumentCount(async (err, count) => {
    if (!err && count === 0) {
      await new Role({
        nom: "ADMINISTRATEUR",
      }).save((err) => {
        if (err) {
          console.log(err);
        }
        console.log("Added Role ADMINISTRATEUR");
      });
      await new Role({
        nom: "MEMBRE",
      }).save((err) => {
        if (err) {
          console.log(err);
        }
        console.log("Added Role MEMBRE");
      });
     
      ///Test
    }
  });
  return await Role.findOne({ nom: "ADMINISTRATEUR" });
}

function initialeUser(role) {
  User.estimatedDocumentCount((err, count) => {
    Role.estimatedDocumentCount((err, countRole)=>{
      if (!err && count === 0 && countRole !==0) {
        let u = new User({
          nom: "Admin",
          prenom: "Admin",
          email: "mariem.lachheb@esprit.tn",
          tel: "+216 58 674 830",
          cin: "00480313",
        
          dateNaissance: "10-07-1996",
          mdp: bcrypt.hashSync("Admin", 8),
          confirmMdp: bcrypt.hashSync("Admin", 8),
          accessToken: "",
          roles: role._id,
       
        }).save((err) => {
          if (err) {
            console.log(err);
          }
          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "mariem.lachheb@esprit.tn",
              pass: "203JFT0599",
            },
          });
          const mailOptions = {
            from: "mariem.lachheb@esprit.tn",
            to: "mariem.lachheb@esprit.tn",
            subject: "Account Available !",
            html: `
<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
                  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <meta name="x-apple-disable-message-reformatting">
                  <meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
                  <title></title>
                  <style type="text/css">
                    @media only screen and (min-width: 620px) {
                      .u-row {
                        width: 600px !important;
                      }
                      .u-row .u-col {
                        vertical-align: top;
                      }
                      .u-row .u-col-100 {
                        width: 600px !important;
                      }
                    }
                    @media (max-width: 620px) {
                    .u-row-container {
                    max-width: 100% !important;
                    padding-left: 0px !important;
                    padding-right: 0px !important;
                    }
                    .u-row .u-col {
                      min-width: 320px !important;
                      max-width: 100% !important;
                      display: block !important;
                    }
                    .u-row {
                      width: calc(100% - 40px) !important;
                    }
                    .u-col {
                      width: 100% !important;
                      }
                      .u-col > div {
                        margin: 0 auto;
                      }
                    }
                    body {
                      margin: 0;
                      padding: 0;
                    }
                    table,tr,td {
                      vertical-align: top;
                      border-collapse: collapse;
                    }
                    p {
                      margin: 0;
                    }
                    .ie-container table,
                    .mso-container table {
                      table-layout: fixed;
                    }
                    * {
                      line-height: inherit;
                    }
                    a[x-apple-data-detectors='true'] {
                      color: inherit !important;
                      text-decoration: none !important;
                    }
                    table, td { color: #000000; } a { color: #0000ee; text-decoration: underline; } @media (max-width: 480px) { #u_content_image_1 .v-src-width { width: auto !important; } #u_content_image_1 .v-src-max-width { max-width: 48% !important; } #u_content_image_2 .v-src-width { width: auto !important; } #u_content_image_2 .v-src-max-width { max-width: 36% !important; } #u_content_text_15 .v-container-padding-padding { padding: 10px 10px 10px 20px !important; } }
                  </style>
                  <link href="https://fonts.googleapis.com/css?family=Cabin:400,700&display=swap" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap" rel="stylesheet" type="text/css"><!--<![endif]-->
                  </head>
                  <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
                    <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%" cellpadding="0" cellspacing="0">
                    <tbody>
                    <tr style="vertical-align: top">
                      <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                        <div class="u-row-container" style="padding: 0px;background-color: transparent">
                          <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #e6a501;">
                            <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                              <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                <div style="width: 100% !important;">
                                  <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                    <table id="u_content_image_1" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                      <tbody>
                                        <tr>
                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:25px 10px 15px;font-family:'Open Sans',sans-serif;" align="left">
                                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                              <tr>
                                                <td style="padding-right: 0px;padding-left: 0px;" align="center">
                                                  <a href="http://localhost:4200/home" target="_blank">
                                                    <img align="center" border="0" src="https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/243127720_220510966776919_3724364192653698714_n.png?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WSFwalOlIE8AX-ZhaTA&_nc_ht=scontent.ftun9-1.fna&oh=00_AT8qnyFkim7NSACVuy-AsXrtFQbAzQccU2JvwndOUno-dQ&oe=6293A401" alt="Logo" title="Logo" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 38%;max-width: 220.4px;" width="220.4" class="v-src-width v-src-max-width"/>
                                                  </a>
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                      <tbody>
                                        <tr>
                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left"> 
                                            <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                              <tbody>
                                                <tr style="vertical-align: top">
                                                  <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                    <span>&#160;</span>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                      <tbody>
                                        <tr>
                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
                                            <h1 style="margin: 0px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: 'Raleway',sans-serif; font-size: 48px;">
                                              <strong>Welcome to StudentHUB!</strong>
                                            </h1>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <table id="u_content_image_2" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                      <tbody>
                                        <tr>
                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
                                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                              <tr>
                                                <td style="padding-right: 0px;padding-left: 0px;" align="center"> 
                                                  <img align="center" border="0" src="https://dictionary.cambridge.org/es/images/thumb/check_noun_002_06440.jpg?version=5.0.239" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 20%;max-width: 116px;" width="116" class="v-src-width v-src-max-width"/>
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                      <tbody>
                                        <tr>
                                          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 35px;font-family:'Open Sans',sans-serif;" align="left">
                                            <div style="line-height: 140%; text-align: center; word-wrap: break-word;">
                                              <p style="font-size: 14px; line-height: 140%;"><span style="color: #e67e23; font-size: 26px; line-height: 36.4px; background-color: #ffffff;">&nbsp; Your Account is Ready!&nbsp; </span></p>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="u-row-container" style="padding: 0px;background-color: transparent">
                            <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                              <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                                <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                  <div style="width: 100% !important;">
                                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                      <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                        <tbody>
                                          <tr>
                                            <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px 30px 20px;font-family:'Open Sans',sans-serif;" align="left">
                                              <div style="color: #333333; line-height: 130%; text-align: left; word-wrap: break-word;">
                                                <p style="font-size: 14px; line-height: 130%;"><strong><span style="font-size: 16px; line-height: 20.8px;">StudentHub Teams,</span></strong></p>
                                                <p style="font-size: 14px; line-height: 130%;">&nbsp;</p>
                                                <p style="font-size: 14px; line-height: 130%;"><span style="font-size: 16px; line-height: 20.8px; font-family: Lato, sans-serif;">Thank you for registering ! </span></p>
                                              </div>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="u-row-container" style="padding: 0px;background-color: transparent">
                            <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #f7f6f4;">
                              <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                                <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                  <div style="width: 100% !important;">
                                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                      <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                        <tbody>
                                          <tr>
                                            <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:25px 10px 0px 20px;font-family:'Open Sans',sans-serif;" align="left">
                                              <div style="line-height: 140%; text-align: left; word-wrap: break-word;">
                                                <p style="font-size: 14px; line-height: 140%;"><span style="font-family: Lato, sans-serif; font-size: 14px; line-height: 19.6px;"><strong><span style="font-size: 18px; line-height: 25.2px; color: #236fa1;">Connection Détails</span></strong></span></p>
                                              </div>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                        <tbody>
                                          <tr>
                                            <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px 10px 20px;font-family:'Open Sans',sans-serif;" align="left">
                                              <table height="0px" align="left" border="0" cellpadding="0" cellspacing="0" width="22%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 3px solid #e67e23;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                <tbody>
                                                  <tr style="vertical-align: top">
                                                    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                      <span>&#160;</span>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                        <tbody>
                                          <tr>
                                            <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 10px 20px;font-family:'Open Sans',sans-serif;" align="left">
                                              <div style="color: #333333; line-height: 140%; text-align: left; word-wrap: break-word;">
                                                <p style="font-size: 14px; line-height: 140%;"><strong>Login: </strong> 00480313<span style="color: #828080; font-size: 14px; line-height: 19.6px;">.</span></p>
                                              </div>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                        <tbody>
                                          <tr>
                                            <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:5px 10px 10px 20px;font-family:'Open Sans',sans-serif;" align="left">
                                              <div style="color: #333333; line-height: 140%; text-align: left; word-wrap: break-word;">
                                                <p style="font-size: 14px; line-height: 140%;"><strong>Password: </strong>&nbsp;<span style="color: #828080; font-size: 14px; line-height: 19.6px;">Admin</span></p>
                                              </div>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="u-row-container" style="padding: 0px;background-color: transparent">
                            <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                              <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                                <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                  <div style="width: 100% !important;">
                                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
                                      <table id="u_content_text_15" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                        <tbody>
                                          <tr>
                                            <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:20px 20px 15px;font-family:'Open Sans',sans-serif;" align="left">
                                              <div style="color: #333333; line-height: 160%; text-align: left; word-wrap: break-word;">
                                                <p style="font-size: 14px; line-height: 160%;"><span style="font-size: 16px; line-height: 25.6px; font-family: Lato, sans-serif;">You Can Visit our Application and Go to your Accoun via this link <span style="text-decoration: underline; line-height: 25.6px; color: #e67e23; font-size: 16px;">http://localhost:4200/home</span></span></p>
                                              </div>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                        <tbody>
                                          <tr>
                                            <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 30px;font-family:'Open Sans',sans-serif;" align="left">
                                              <div align="center">
                                                <a href="http://localhost:4200/home/login" target="_blank" style="box-sizing: border-box;display: inline-block;font-family:'Open Sans',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #e6a501; border-radius: 2px;-webkit-border-radius: 2px; -moz-border-radius: 2px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;">
                                                  <span style="display:block;padding:12px 35px;line-height:120%;"><span style="font-family: Cabin, sans-serif; font-size: 14px; line-height: 16.8px;"><strong><span style="font-size: 16px; line-height: 19.2px;">SignIn</span></strong></span></span>
                                                </a>
                                              </div>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                        <tbody>
                                          <tr>
                                            <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">  
                                              <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 2px solid #939391;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                <tbody>
                                                  <tr style="vertical-align: top">
                                                    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                      <span>&#160;</span>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                        <tbody>
                                          <tr>
                                            <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:14px;font-family:'Open Sans',sans-serif;" align="left">
                                              <div align="center">
                                                <div style="display: table; max-width:140px;">
                                                  <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 15px">
                                                    <tbody>
                                                      <tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                                        <a href="https://www.facebook.com/Pikoro-106660204828663" title="Facebook" target="_blank">
                                                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png" alt="Facebook" title="Facebook" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                        </a>
                                                      </td></tr>
                                                    </tbody>
                                                  </table>
                                                  <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 15px">
                                                    <tbody>
                                                      <tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                                        <a href="https://www.linkedin.com/company/pikoro/" title="LinkedIn" target="_blank">
                                                          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" title="LinkedIn" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                        </a>
                                                      </td></tr>
                                                    </tbody>
                                                  </table>
                                                  <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 0px">
                                                    <tbody>
                                                      <tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                                        <a href="https://instagram.com/" title="Instagram" target="_blank">
                                                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="Instagram" title="Instagram" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                        </a>
                                                      </td></tr>
                                                    </tbody></table>
                                                  </div>
                                                </div>
                                              </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                        <tbody>
                                          <tr>
                                            <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
                                              <div style="color: #828080; line-height: 160%; text-align: center; word-wrap: break-word;">
                                                <p style="font-size: 14px; line-height: 160%;">2134, Area Name, &nbsp;CA 23856, Tunisia </p>
                                                <p style="font-size: 14px; line-height: 160%;">ABCD University | Privacy Policy</p>
                                              </div>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                        <tbody>
                                          <tr>
                                            <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
                                              <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="64%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                <tbody>
                                                  <tr style="vertical-align: top">
                                                    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                      <span>&#160;</span>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                        <tbody>
                                          <tr>
                                            <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 20px;font-family:'Open Sans',sans-serif;" align="left">
                                              <div style="color: #828080; line-height: 140%; text-align: center; word-wrap: break-word;">
                                                <p style="font-size: 14px; line-height: 140%;">&copy; 20XX ABCD University. All Rights Reserved.</p>
                                              </div>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </body>
              </html>
              `,
            };
            transporter.sendMail(mailOptions, function (err, info) {
              if (err) {
                console.log(err);
                // res.status(500).json(err);
              } else {
                console.log("Email sent : " + info.response);
                // res.status(200).json(mailOptions);
              }
            });
          console.log("Added ADMINISTRATOR");
          console.log("an email containing the connection information has been sent to the address");
        });
      }
    });
  })
}

//comment