
//@ts-nocheck 
const preloadFonts = id => {
    return new Promise(async (resolve) => {
        if (typeof window !== 'undefined') {
            const WebFont = require('webfontloader');
            await WebFont.load({
                typekit: {
                    id: id
                },
                active: resolve
            });
        }
    });
};

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export {
    preloadFonts,
    randomNumber
}