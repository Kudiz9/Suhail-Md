const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263714380053";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_44_05_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA0NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDksXG4gICAgICAgIDExNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTkzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDI5LFxuICAgICAgICA3NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDg5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyLFxuICAgICAgICAyMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDcsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDUxLFxuICAgICAgICAxMyxcbiAgICAgICAgODYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDU5LFxuICAgICAgICA3NixcbiAgICAgICAgMTc1LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgMTIxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNSxcbiAgICAgICAgMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDYyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjQwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjIwLFxuICAgICAgICA0NixcbiAgICAgICAgMTk0LFxuICAgICAgICA5NixcbiAgICAgICAgNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDUzLFxuICAgICAgICA1OCxcbiAgICAgICAgNyxcbiAgICAgICAgNTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODIsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA0LFxuICAgICAgICA2MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjEsXG4gICAgICAgIDU0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDYzLFxuICAgICAgICA0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg1LFxuICAgICAgICA4NixcbiAgICAgICAgNjMsXG4gICAgICAgIDgxLFxuICAgICAgICA1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDcyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjE5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDUwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMixcbiAgICAgICAgNTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODksXG4gICAgICAgIDIyMixcbiAgICAgICAgNTAsXG4gICAgICAgIDE2LFxuICAgICAgICA5MixcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNVNreGN1K2xyY3Z5c2N6NlpsZFp4VXhHbGk0alZ2M0JvSEd4UWZZVnBCdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3MTQzODAwNTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkY1ODlBMzZFQTdBNjZDMjg0ODMwNEE1OTIyODM2MEMwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjQ1NzQ1NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2MzcxNDM4MDA1M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNTJFRjkxMEE3MkY3NTBGMTE3RDJFMUZDNTE3N0EwMDRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2NDU3NDU2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm9xS3RYMzl2VDlDZ3lhclZrZmxZZndcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjUwZDlmYjItMjY5NS00YmU0LThiODMtNWNmZDQwNmIxOGU4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQsXG4gICAgICAxNDIsXG4gICAgICAxMDcsXG4gICAgICA1OSxcbiAgICAgIDE4NCxcbiAgICAgIDE1NixcbiAgICAgIDE4NSxcbiAgICAgIDE2MCxcbiAgICAgIDEzLFxuICAgICAgNzIsXG4gICAgICAxOTksXG4gICAgICAyNTEsXG4gICAgICAxNjUsXG4gICAgICA4NSxcbiAgICAgIDE4NCxcbiAgICAgIDEwLFxuICAgICAgODAsXG4gICAgICAxMzMsXG4gICAgICAxMzEsXG4gICAgICAyMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkxLFxuICAgICAgNTEsXG4gICAgICAxNDIsXG4gICAgICA2OCxcbiAgICAgIDE0MSxcbiAgICAgIDIxOSxcbiAgICAgIDIwNCxcbiAgICAgIDIyMixcbiAgICAgIDUxLFxuICAgICAgNDMsXG4gICAgICAxMDYsXG4gICAgICAzNixcbiAgICAgIDIxNyxcbiAgICAgIDQzLFxuICAgICAgMjA5LFxuICAgICAgMTIwLFxuICAgICAgNzQsXG4gICAgICA4NCxcbiAgICAgIDE3MixcbiAgICAgIDIxNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLU1lOVzQ4TFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE0MzgwMDUzOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJSLkwuWFwiLFxuICAgIFwibGlkXCI6IFwiMjkwNzI5NTI0NTUzMzY6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOVEFza2NRNkorOHNnWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlQxL0ovbFBPNFVEU2VtVm1XYjB6bGJUL20xdityaGFydHduWnlDWWZlMXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiN3V2ajBCbTcxTVRoa3ZvY0l1RmNUOWx3NXdtMjYvTytWUlROYngzanJGOXZCOWRXc0grbDhzNWhwTi9FOFpGS2MwWFQ3YUNsOXJSalpWcWorN2ZBQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTHhYa3pHeFN3UmhqdjkyaG92V1lZNk5VMGdhTk5wMkhLc21xRkpvSXdSenV3L1F1Qms0N1VzMWxYSW40UHJ2dXBFRVYrQjdORnZtc3BFM2VhcVkraVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzE0MzgwMDUzOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjQ1NzQ1MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNhcVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ2FxLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
