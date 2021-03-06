import * as cutejs from 'cutejs-lib/cute-library';
import Button from "zombie274/widgets/button/button";
import BaseList from "ui/widgets/base-list/base-list";

/**
 * @typedef {Object}
 */
export var In;


/**
 * @typedef {{
 *     root: DocumentFragment,
 *     baseListVertical: BaseList,
 *     baseList: BaseList,
 *     backButton: Button,
 *     forwardButton: Button,
 *     sliderWrapper: HTMLDivElement,
 *     message: HTMLDivElement
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
		baseListVertical: null,
		baseList: null,
		backButton: null,
		forwardButton: null,
		sliderWrapper: null,
		message: null
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
			case 'baseListVertical':
				if (!exports.baseListVertical) {
					exports.baseListVertical = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'baseList':
				if (!exports.baseList) {
					exports.baseList = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'backButton':
				if (!exports.backButton) {
					exports.backButton = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'forwardButton':
				if (!exports.forwardButton) {
					exports.forwardButton = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'sliderWrapper':
				if (!exports.sliderWrapper) {
					exports.sliderWrapper = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'message':
				if (!exports.message) {
					exports.message = value;
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
	__p += '' +
	 cutejs.include('component', BaseList,  {options: {padding:35, lineSize: 1}, isVertical: true}, "baseListVertical", templatesData) +
	'\n<div class="horizontalList" data-export-id="sliderWrapper">\n\n    ' +
	 cutejs.include('component', BaseList,  {options: {padding: 5, lineSize: 1}, itemClass: ''}, "baseList", templatesData) +
	'\n</div>\n\n<div class="row history">\n    ' +
	 cutejs.include('component', Button,  'Back in history', "backButton", templatesData) +
	'\n    ' +
	 cutejs.include('component', Button,  'Forward in history', "forwardButton", templatesData) +
	'\n</div>\n<div >\n    <div  class="Info" data-export-id="message"></div>\n\n</div>\n';
	
	return cutejs.buildResult(__p, templatesData, exportFunction, exports, opt_options);
};
