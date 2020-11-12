import * as cutejs from 'cutejs-lib/cute-library';

/**
 * @typedef {Object}
 */
export var In;


/**
 * @typedef {{
 *     root: DocumentFragment,
 *     currentTime: HTMLDivElement,
 *     duration: HTMLDivElement,
 *     progress: HTMLDivElement
 * }}
 */
export var Out;


/**
 * @param {*=} opt_templateParams
 * @param {?cutejs.TemplateOptions=} opt_options
 * @return {Out}
 */
export function render(opt_templateParams, opt_options) {
	var templatesData = {};
	var exports = {
		root: null,
		currentTime: null,
		duration: null,
		progress: null
	};
	/**
	 * @param value
	 * @param {string} key
	 * @param {Out} exports
	 */
	var exportFunction = function(value, key, exports) {
		switch (key) {
			case 'root':
				if (!exports.root) {
					exports.root = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'currentTime':
				if (!exports.currentTime) {
					exports.currentTime = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'duration':
				if (!exports.duration) {
					exports.duration = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'progress':
				if (!exports.progress) {
					exports.progress = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			default:
				cutejs.onUnknownKey(key);
				break;
		}
	};
	var __p = '';
	__p += '<div class="w-zbui-player-progress">\n\t<div class="zb-clear">\n\t\t<div class="w-zbui-player-progress__time" data-export-id="currentTime">0:00:00</div>\n\t\t<div class="w-zbui-player-progress__duration" data-export-id="duration">0:00:00</div>\n\t</div>\n\t<div class="w-zbui-player-progress__bar">\n\t\t<div class="w-zbui-player-progress__progress" data-export-id="progress"></div>\n\t</div>\n</div>\n';
	
	return cutejs.buildResult(__p, templatesData, exportFunction, exports, opt_options);
};
