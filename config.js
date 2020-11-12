var path = require('path');


/**
 * @param {Object} config
 * @return {Object}
 */
module.exports = function(config) {
	return {
		project: {
			name: 'zombie274',
			src: path.resolve(__dirname, 'src'),
			entry: path.resolve(__dirname, 'src/application.js')
		},

		devServer: {
			backdoor: path.resolve(__dirname, 'src/dev.js')
		},
		platforms: {
			tizen: {
			widget: 'C:\Users\P058279\workspace\BasicProjectTizen\config.xml',
				tizenToolsDir: 'C:\tizen-studio\tools\ide\bin',
				securityProfile: 'zombie',
			sdbDir: 'C:\tizen-studio-data\tools'
			}
		}
	};
};
