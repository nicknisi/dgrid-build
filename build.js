({
    baseUrl: '.',
    packages: [
        { name: 'index', location: './', main: 'index.js' },
        { name: 'dojo', location: 'node_modules/dojo' },
        { name: 'dgrid', location: 'node_modules/dgrid' }
    ],
    name: 'index',
    out: 'dgrid-built.js'
})
