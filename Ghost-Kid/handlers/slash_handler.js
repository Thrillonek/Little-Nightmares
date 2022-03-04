const fs = require('fs');

module.exports = (client, discord) => {
  const load_dir = (dirs) => {
    const files = fs.readdirSync('./SlashCommands/'+dirs).filter(f => f.endsWith('.js'))
      client.on('ready', async () => {
        for(const file of files){
          const cmd = require('../SlashCommands/'+dirs+'/'+file);
          const c = await client.guilds.cache.get('851185884678324224').commands.create({
            name: cmd.name,
            description: cmd.description,
            options: cmd.options,
          })
          if(cmd.perms){
            client.guilds.cache.get('851185884678324224').commands.permissions.set({
              command: c.id,
              permissions: cmd.perms,
            })
          }

          client.cooldown.set(c.name, c);
        }
      })

      client.on('interactionCreate', async (int) => {
        for(const file of files){
          const cmd = require('../SlashCommands/'+dirs+'/'+file);
          if(int.isCommand() && int.commandName === cmd.name){
            await int.deferReply().catch(() => {});
            const args = int.options;
            const db = require('../schemas/eco-schema')

            cmd.execute(int, args, client, discord, db);

            if(cmd.cooldown){
              const c = client.cooldown.get(cmd.name);

              client.guilds.cache.get('851185884678324224').commands.permissions.set({
                command: c.id,
                permissions: [
                  {
                    id: int.user.id,
                    type: "USER",
                    permission: false,
                  }
                ]
              })

              setTimeout(() => {
                client.guilds.cache.get('851185884678324224').commands.permissions.set({
                  command: c.id,
                  permissions: [
                    {
                      id: int.user.id,
                      type: "USER",
                      permission: true,
                    }
                  ]
                })
              }, cmd.cooldown)
            }
          }
        }
      })
  }
  ['currency', 'fun', 'info'].forEach(x => load_dir(x));
}