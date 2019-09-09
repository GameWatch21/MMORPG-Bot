module.exports = {
    BOT_USER_ID: '372392086789423104',
    BOT_CHANNEL_ID: '372365212076081164',
    ARENA_CHANNEL_ID: '619846213650612255',
    LOGGER_CHANNEL_ID: '473176714869080065',
    BOT_CATEGORY_ID: '372246646831972352',
    GUILD_ID: '371533518653751306',
    DEV_ID: '162434234357645312',
    LEVEL_XP_TOTALS: {
        "1": 10,
        "2": 15,
        "3": 20,
        "4": 25,
        "5": 30,
        "6": 35
    },
    NEW_PLAYER_DATA: {
        "level": 1,
        "currentxp": 0,
        "maxxp": 10,
        "currency": 3,
        "maxhp": 15,
        "currenthp": 15,
        "defense": 0,
        "attack": 1,
        "armor": null,
        "weapon": null,
        "inventory": {"health-potions":0}
    },
    HELP_LIST: `
    -----------------------------------MMORPG Commmands----------------------------------
    **!help** -             Displays MMORPG bot commands.

    **!stats** -            Displays your stats.

    **!shop** -             Displays item shop.

    **!buy <item name>** - Purchases item from shop.

    **!attack** -           Attacks the monster. Deals your attack damage to them, and theirs to you.

    **!pot** -              Consumes 1 health-potion (heals 20).
    ----------------------------------MMORPG HOW TO PLAY---------------------------------
    Monsters spawn randomly in the areana while you are playing games on your PC. 

    Attack and defeat them to gain gold and xp! (Only person who gets final blow will receive reward and xp!)

    You die if your health drops to 0. You will lose a portion of your current xp on death.

    Purchase items in the shop to grow stronger.
    `
};

deepFreeze = constants => {
    var propNames = Object.getOwnPropertyNames(constants);
    propNames.forEach((name) => {
        var prop = constants[name];

        if (typeof prop === 'object' && prop !== null) {
            deepFreeze(prop);
        }
    });
    return Object.freeze(constants);
}

deepFreeze(module.exports);