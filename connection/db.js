const { Pool } = require('pg');

const dbPool = new Pool({
//    database: 'personal_web',
//    port: 5432,
//    user: 'postgres',
//    password: 'root' 

 connectionString:
 'postgres://bayryxrtjdffax:2c4c79a03e645f4cbb2d74e9acd597de8e27949f5c2abc03abf92d52e2135b75@ec2-52-70-205-234.compute-1.amazonaws.com:5432/dce79o9e19k7dn',
 ssl: {
    rejectUnauthorized: false,
}
});h


module.exports = dbPool;