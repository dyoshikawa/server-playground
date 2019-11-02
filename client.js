const fetch = require('node-fetch');

const hrstart = process.hrtime();

const callServer = async () => (await fetch('http://localhost:3000'));

(async () => {
    const promises = [];
    for (let i = 0; i < 3; i++) {
        promises.push(callServer());
    }
    const result = await Promise.all(promises);
    const hrend = process.hrtime(hrstart);
    console.log(result);
    console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)
})();