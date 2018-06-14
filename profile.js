var profile = {
    releaseDir: './dist',
    releaseName: 'lib',
    action: 'release',
    cssOptimize: true,
    mini: true,
    optimize: false,
    layerOptimize: false,
    stripConsole: 'none',
    layers: {
        'dgrid-built': {
            includeLocales: ['en-us'],
            include: ['dgrid-build/index'],
            boot: false,
            customBase: true
        }
    },
    basePath: '.',
    baseDir: '.',
    packages: [
        { name: 'dgrid-build', location: 'src', main: 'index.js' },
        { name: 'dojo', location: 'dojo' },
        { name: 'dgrid', location: 'dgrid' },
        { name: 'dijit', location: 'dijit' }
    ]
};
