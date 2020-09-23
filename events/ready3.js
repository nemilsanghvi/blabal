module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity("/help", {
    type: "STREAMING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
