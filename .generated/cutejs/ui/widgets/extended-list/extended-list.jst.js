import * as cutejs from 'cutejs-lib/cute-library';
import ScrollBar from "ui/widgets/scroll-bar/scroll-bar";

/**
 * @typedef {Object}
 */
export var In;


/**
 * @typedef {{
 *     root: DocumentFragment,
 *     bar: ScrollBar,
 *     wrapper: HTMLDivElement,
 *     slider: HTMLDivElement,
 *     arrowUp: HTMLDivElement,
 *     arrowDown: HTMLDivElement,
 *     arrowLeft: HTMLDivElement,
 *     arrowRight: HTMLDivElement
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
		bar: null,
		wrapper: null,
		slider: null,
		arrowUp: null,
		arrowDown: null,
		arrowLeft: null,
		arrowRight: null
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
			case 'bar':
				if (!exports.bar) {
					exports.bar = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'wrapper':
				if (!exports.wrapper) {
					exports.wrapper = value;
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
			case 'arrowUp':
				if (!exports.arrowUp) {
					exports.arrowUp = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'arrowDown':
				if (!exports.arrowDown) {
					exports.arrowDown = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'arrowLeft':
				if (!exports.arrowLeft) {
					exports.arrowLeft = value;
				} else {
					cutejs.onDuplicateExport(key);
				}
				break;
			case 'arrowRight':
				if (!exports.arrowRight) {
					exports.arrowRight = value;
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
	__p += '<div class="w-zbui-base-list w-zbui-extended-list">\n\t<div class="w-zbui-base-list__wrap" data-export-id="wrapper">\n\t\t<div class="w-zbui-base-list__slider" data-export-id="slider"></div>\n\t</div>\n\n\t' +
	 cutejs.include('component', ScrollBar,  {}, "bar", templatesData) +
	'\n\n\t<div class="w-zbui-extended-list__arrow _up" data-export-id="arrowUp"></div>\n\t<div class="w-zbui-extended-list__arrow _down" data-export-id="arrowDown"></div>\n\t<div class="w-zbui-extended-list__arrow _left" data-export-id="arrowLeft"></div>\n\t<div class="w-zbui-extended-list__arrow _right" data-export-id="arrowRight"></div>\n</div>\n';
	
	return cutejs.buildResult(__p, templatesData, exportFunction, exports, opt_options);
};
