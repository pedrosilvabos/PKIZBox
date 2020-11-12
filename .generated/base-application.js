import {PLATFORM_NAME} from 'generated/define';
import AbstractApplication from 'zb/abstract-application';

import createTizenDevice from 'tizen/factory';
import tizenDevice from 'tizen/device';
import createWebosDevice from 'webos/factory';
import webosDevice from 'webos/device';
import createPcDevice from 'pc/factory';
import pcDevice from 'pc/device';



/**
 * @abstract
 */
export default class BaseApplication extends AbstractApplication {
	/**
	 */
	constructor() {
		super();
	}


	/**
	 * @return {boolean}
	 */
	isDeviceTizen() {
		return this.device instanceof tizenDevice;
	}

	/**
	 * @return {boolean}
	 */
	isDeviceWebos() {
		return this.device instanceof webosDevice;
	}

	/**
	 * @return {boolean}
	 */
	isDevicePc() {
		return this.device instanceof pcDevice;
	}

	/**
	 * @override
	 */
	_createDevice() {
		let device;

		if (PLATFORM_NAME) {
			const factory = {
				'tizen': createTizenDevice,
				'webos': createWebosDevice,
				'pc': createPcDevice,
			}[PLATFORM_NAME];

			if (factory) {
				device = factory();
			}
		} else {
			device = (
				createTizenDevice() ||
				createWebosDevice() ||
				createPcDevice() ||
				null
			);
		}

		if (!device) {
			throw new Error('Can\'t detect a platform.');
		}

		return device;
	}
};
