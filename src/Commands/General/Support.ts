import { BaseCommand, Command, Message } from '../../Structures';

interface CustomMessageContent {
    text: string;
    footer: string;
    headerType?: number; 
}

@Command('support', {
    description: 'gives the group links of support',
    usage: 'support',
    category: 'general',
    exp: 10,
    cooldown: 20
})
export default class command extends BaseCommand {
    override execute = async ({ from, sender, message }: Message): Promise<void> => {
        const supportText = `*━━━❰ Support group❱━━━*\n\n*#1* *『𝐁𝐎𝐓'𝐒 𝐒𝐔𝐏𝐏𝐎𝐑𝐓 CHANNEL™®❤‍🩹』*
        *[ https://whatsapp.com/channel/0029VacWsSl3LdQOmWZrBj0l ]*
       
        *#2*  『*FOR 𝗪𝗛𝗜𝗭𝗕𝗢𝗧 BOT'S ONLY🤭🤖』*
        *[https://chat.whatsapp.com/BTKbQtMAlao1h2Vn4XXlmF ]*

        *#3* *『❤️CASINO❤️』*
        *[ https://chat.whatsapp.com/HJlPEPSZ94bFVUpl90UiRo ]*
        
        *©𝗪𝗛𝗜𝗭𝗕𝗢𝗧 🤖 🤭 Inc*\nᚖ here ᚖ`;

        const footerText = '© whizbot Inc 2024';

        const messageContent: CustomMessageContent = {
            text: supportText,
            footer: footerText,
            headerType: 1
        };

        return void (await this.client.sendMessage(from, messageContent, {
            quoted: message
        }));
    }
 }
