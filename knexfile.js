module.exports = {
        development: {
          client: "pg",
          connection: "postgres:///testdb"
        },

        production: {
          client: "pg",
          connection: process.env.DATABASE_URL
        }
      };
