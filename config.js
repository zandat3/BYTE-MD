
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || "923072380380";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0ZxcEExT1hhUXI1YVlXeGtLZ0NSU2dodjltTGIxaUE2Sk5UajJybmUwQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVlkwekdEbkQ5M3B6SDRweHNFN0tReTlXWml2c3c1TWY5UCtXVVVCY3d3TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQndMaW0zK0Fnay9RczhMRTFpWjF4RWowNnk1dnlaRDB0SklRWUxadEdRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0M205Vk9NMkVDektpdUVLTVlZaGQ5ckR3cXB5ZUEvS3RlTWd1VS9LZng4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktPN0FQQ2tDTzdmOC9iRElCQUVHMHZsSXVHK0xuS2JjTmpFUWY1UnovM289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImV3VGplWjJZWndCNW90VnhGU1BKUDdYQXlaT1FRS3VGdkNseHJoa0hWQlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOENmVmtqQjRBS0ovVWFnRUY5Q1MveVI4UFFNVGk0bVhBN05sZUhvbHEwST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoielRiWHUyUXVMZUtVVUQ5RVIxVkhXcVFnKzV0anZTbU9iUThBS2MyQkJYaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdTMlNWN0E3eHRuMXgwNi84cG9UTmJuYkFxMWxjdnEwdXBRd0M3UkQxZWh1RHpwMHJUN09iSnBYcEErVmU1U1Jqa1VxTkliRkpuSzRyVG1aZzQxSGpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc4LCJhZHZTZWNyZXRLZXkiOiJteHFjeG5vVktGQjBnNk04WUJlU0crV0J0eU11YkZGRDZIRW5hd1U5M3pJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIwZlRBRWpORFJOR0NyV05nMGpJcHBnIiwicGhvbmVJZCI6IjcwMGZiNmZiLTFhOGEtNGFlMi04MjdkLTU0ZDNhYmM4Y2Y3MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXUXU4OTFyTEdUdyswYnNSNXRGZThnazkvTm89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWjRrRzlUN2pQbnpkcDJGMUwvSWZmZmk3NGpRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVINUM0NTZDIiwibWUiOnsiaWQiOiI5MjMwNzIzODAzODA6MTlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSFxuXG5cblxuXG5cbkFcblxuXG5cblxuXG5NXG5cblxuXG5cblxuWlxuXG5cblxuXG5cbkEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ00yQTlJd0dFS0dpN3JNR0dCc2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InFiWlI5WHJsOWxScGZvRlpZMkd1aUJEMUtqT2lSc3Z6NUFJNXFqUzRtbk09IiwiYWNjb3VudFNpZ25hdHVyZSI6ImpFMlNwL24yK3dIUGJwMGJPTGVFV2pkSmF5aUl4dDRHOGFPM1hhYUYvdExzSDg2eE9tVHdaYnQ5S011Qnp1elRaTVZaZzUzR2lxNGZmN2tMUkVheEN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiI2aEdyTEc1TGpKbDRkczM4akZpOFJzU1RMUXJjM1p2REZrd0ZCblV1ZFpWQ1BYUTM5OHdIL1ExUElIaHNJRWtOMkxaYmN2UGNZQ3Y1b3ZQSE83QzZpdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzA3MjM4MDM4MDoxOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhbTJVZlY2NWZaVWFYNkJXV05ocm9nUTlTb3pva2JMOCtRQ09hbzB1SnB6In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5Mzc0MTE3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVTYyJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "Hamza",
  errorChat: process.env.ERROR_CHAT || "923072380380",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
