const { Pool } = require('pg');

const dbPool = new Pool({
    // database: 'personal_web',
    // port: 5432,
    // user: 'postgres',
    // password: 'root' 

connectionString:
    'postgres://qdakqaiqftnpxa:ebf309ea92e62c13261efb25eaabedadd675a73832a4284f1b8378ca194d2b7c@ec2-52-70-205-234.compute-1.amazonaws.com:5432/d30kevraq8pmfn',
ssl: {
    rejectUnauthorized: false,
}
});


module.exports = dbPool;