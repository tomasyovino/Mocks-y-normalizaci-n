const sqliteOptions = {
    client: "sqlite3",
    connection: {
      filename: "./db/messages.db3",
    },
  };
  
export{ sqliteOptions };