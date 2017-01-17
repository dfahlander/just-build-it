const path = require('path');
const fs = require('fs');

/** Navigates upwards to the closest dir that contains a 'package.json'.
 * @param dir {string} Directory to start from.
 */
function getPackageRoot (dir) {
    let lastDir = null;
    while (lastDir !== dir && !fs.existsSync(path.resolve(dir, "./package.json"))) {
        lastDir = dir;
        dir = path.dirname(dir);
    }
    return (lastDir === dir ? null : dir);
}

module.exports = {getPackageRoot};
