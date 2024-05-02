import { BaseCommand, Command, Message } from '../../Structures';

@Command('ping', {
    description: 'Ping command',
    category: 'utility'
})
export default class extends BaseCommand {
    public override execute = async (M: Message): Promise<void> => {
        await M.reply('pong');
    }
}

@Command('tictactoe', {
    description: 'Tic Tac Toe game command',
    cooldown: 10,
    exp: 10,
    category: 'games'
})
export default class extends BaseCommand {
    public override execute = async (M: Message): Promise<void> => {
        // Implementation of the Tic Tac Toe command goes here
    }
}
