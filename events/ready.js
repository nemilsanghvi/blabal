//module.exports = async client => {
// console.log(`[API] Logged in as ${client.user.username}`);

//await client.user.setActivity("Music", "$" {
//type: "LISTENING" //can be LISTENING, WATCHING, PLAYING, STREAMI

// let activityTypes = ['PLAYING','STREAMING','LISTENING','WATCHING']
// let randomType = activityTypes[Math.floor((Math.random()*activityTypes.length))]
// setInterval(async ()=>{ await client.user.setActivity('Your text here.', { type: randomType }) },10000)

module.exports = async client => {
  console.log(`[API] Logged in as ${client.user.username}`);

  await client.user.setActivity("/help | ${", {
    type: "LISTENING" //can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
