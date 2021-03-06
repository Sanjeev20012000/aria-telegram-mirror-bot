module.exports = Object.freeze({
  TOKEN: '1318713694:AAF3Hgfe-CPRGrPX1b6c3sZrWAf4Rl4fm1o',
  ARIA_SECRET: 'mirrortar',
  ARIA_DOWNLOAD_LOCATION: '/home/downloads',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/home',  //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: ['goy'], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: ['oy'], // Files/top level directories with these substrings in the filename won't be $
  ARIA_PORT: 8210, // Port for aria2c RPC server, if you change this here, make sure to update aria.sh as well
  GDRIVE_PARENT_DIR_ID: '1h71z0du0eE-qlIfKfkqqt9h6pSjBBeJm',
  SUDO_USERS: [1095264362],  // Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [-1001321363429],       // Telegram chat IDs. Anyone in these chats can use the bot.
  STATUS_UPDATE_INTERVAL_MS: 10, // A smaller number will update faster, but might cause rate limiting
  DRIVE_FILE_PRIVATE: {
    ENABLED: false,
    EMAILS: ['someMail@gmail.com', 'someOtherMail@gmail.com']
  },
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  },
  COMMANDS_USE_BOT_NAME: {
    ENABLED: true,  // If true, all commands except '/list' has to have the bot username after the command
    NAME: "@Skadvancedbot"
  },
  IS_TEAM_DRIVE: true
}); 
