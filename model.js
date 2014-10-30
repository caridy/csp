var cache = [];

function getSecret () {
    // - note: random 36 chars with random padding for the win!
    return Math.random().toString(24).slice(2 + Math.floor(Math.random() * 10));
}

module.exports = {

    getItems: function () {
        return cache.concat();
    },

    addItem: function (data) {
        if (!data || !data.name || typeof data.name !== 'string') {
            return;
        }
        /*
        notes:
        - normally, name should be escaped, but not this time :)
        - generating the secret per user
        - intentionally allowing multiple items to have the same name value
        */
        data.secret = getSecret();
        cache.push(data);
        return data;
    }

};
