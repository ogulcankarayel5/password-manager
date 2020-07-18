
const asyncRedis = require('async-redis');


const redisClient = asyncRedis.createClient();

redisClient.on('error', function(err) {
  // eslint-disable-next-line no-console
  console.log(`[Redis] Error ${err}`);
});


module.exports={redisClient};
