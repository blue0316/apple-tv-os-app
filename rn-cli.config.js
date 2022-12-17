const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
    const { resolver: { assetsExts } } = await getDefaultConfig();

    return { resolver: { assetsExts: assetsExts.concat(['obj', 'glb', 'dae', 'scn', 'zip']) } }
})