require('dotenv').config()

module.exports = {

  development:
  {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host:  process.env.DB_HOST,
        dialect:   "mysql"
  },

  test :
  {
        username :    "root",
        password: "S@ngok16",
        database: "duma_test",
        host :     "127.0.0.1",
        dialect :   "mysql"
  },

  production:
  {
      use_env_variable: "DATABASE_URL",
      dialect :    "pgsql",
      "dialectOptions": {
            "ssl": {
                  required: true,
                  rejectUnauthorized: false
            }
      }
  }
}
