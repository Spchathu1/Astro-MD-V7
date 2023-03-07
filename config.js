const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
ALIVE_MSG: process.env.ALIVE_MSG === undefined ? 'true' : process.env.ALIVE_MSG,
LANG: process.env.LANG === undefined ? 'EN' : process.env.LANG,
ALIVE_LOGO: process.env.ALIVE_LOGO === undefined ? 'https://i.imgur.com/v8iuP8v.jpg' : process.env.ALIVE_LOGO,
FOOTER: process.env.FOOTER === undefined ? '𝐒𝐇𝐀𝐃𝐎𝐖 𝐗 𝐌𝐈𝐇𝐈𝐑𝐔𝐊' : process.env.FOOTER,
CAPTION: process.env.CAPTION === undefined ? '*𝗦𝗛𝗔𝗗𝗢𝗪 𝗦𝗔𝗠𝗨𝗥𝗔𝗜*' : process.env.CAPTION,
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'true' : process.env.ONLY_GROUP,
INBOX_BL_MSG: process.env.INBOX_BL_MSG === undefined ? '*🧜‍♀️💬ALL INBOX MESSAGES  ARE BLOCKED BY SHADOW*' : process.env.INBOX_BL_MSG,
HOST: process.env.HOST === undefined ? '-' : process.env.HOST,
SESSION_ID: process.env.SESSION_ID === undefined ? '' : process.env.SESSION_ID
};
