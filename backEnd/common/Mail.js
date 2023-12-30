import nodemailer from 'nodemailer';

export const sendMail = async (_mail_option) => {
    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.MAIL_USER ,
            pass: process.env.MAIL_PASS
        }
    })

    const mail_option = { ..._mail_option, from: process.env.MAIL_USER  };

    const result = await transport.sendMail(mail_option);

    return result;
}