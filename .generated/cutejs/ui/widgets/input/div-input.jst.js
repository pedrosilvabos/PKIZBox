import * as cutejs from 'cutejs-lib/cute-library';

/**
 * @typedef {Object}
 */
export var In;


/**
 * @typedef {{
 *     root: DocumentFragment,
 *     slider: HTMLDivElement,
 *     placeholder: HTMLDivElement,
 *     textBeforeCaret: HTMLDivElement,
 *     inputText: HTMLDivElement
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
		slider: null,
		placeholder: null,
		textBeforeCaret: null,
		inputText: null
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
			case 'slider':
				if (!exports.slider) {
					exports.slider = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'placeholder':
				if (!exports.placeholder) {
					exports.placeholder = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'textBeforeCaret':
				if (!exports.textBeforeCaret) {
					exports.textBeforeCaret = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'inputText':
				if (!exports.inputText) {
					exports.inputText = value;
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
	__p += '<div class="w-zbui-div-input__wrapper" data-export-id="slider">\n\t<div class="w-zbui-div-input__input _placeholder" data-export-id="placeholder"></div>\n\t<div class="w-zbui-div-input__input _fake" data-export-id="textBeforeCaret"></div>\n\t<div class="w-zbui-div-input__input" data-export-id="inputText"></div>\n</div>\n';
	
	return cutejs.buildResult(__p, templatesData, exportFunction, exports, opt_options);
};
