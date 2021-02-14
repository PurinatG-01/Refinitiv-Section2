const https = require('https')

const query = process.argv[2]

const options = {
    hostname: 'codequiz.azurewebsites.net',
    port: 443,
    path: '/',
    method: 'GET',
    headers: {
        'Cookie': 'hasCookie=true',
    }

};

const req = https.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {

        let result = ""
        let regex = /<tr>(.*?)<\/tr>/g
        let rows = data.match(regex)
        rows.forEach((e) => {
            if (e.includes(query)) {
                // console.log(e)
                const row = e.match(/<td>(.*?)<\/td>/g)
                result = row[1].match(/<td>(.*?)<\/td>/)[1]
            }

        })

        console.log(result)
    });

});

req.on('error', (e) => {
    console.error(e);
});
req.end();