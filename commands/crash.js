const { MessageEmbed, Message, client } = require("discord.js");
function UoA() {
    var rand = ['Under','Above'];
    return rand[Math.floor(Math.random()*rand.length)];
}
function Crash() {
    var rating = Math.floor((Math.random() * 25) + 10) /10;
    return rating;
}
function Accuracy() {
    var rating = Math.floor((Math.random() * 50) + 50);
    return rating;
}
 
 
module.exports = ({
    name: "crash",
//    permission: "SEND_MESSAGES",
    execute(message, args, client) {
    const embed = new MessageEmbed()
        .setTitle("Predictor")
        .setColor('#000000')
        .addField('Prediction',`${UoA()}` + ` ${Crash()}`, )
        .addField('Accuracy', `${Accuracy()}` + '%')
        .setFooter("Get @ https://discord.gg/aUe7tAFB")
        return message.channel.send(embed)
 
    }
})
 