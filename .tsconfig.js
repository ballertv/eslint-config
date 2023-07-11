module.exports = {
    compilerOptions: {
        target: 'es2018',
        module: 'es2020',
        strict: true,
        esModuleInterop: true,
        skipLibCheck: true,
        sourceMap: true,
        outDir: 'dist',
    },
    include: ['apps/**/*', 'libs/**/*', 'app/javascript/**/*'],
    exclude: ['node_modules', 'dist'],
};
