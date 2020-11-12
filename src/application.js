import BaseApplication from 'generated/base-application';
import Home from './scenes/home/home';
import Player from './scenes/player/player';
import Page1 from './scenes/page-1/page-1'
import {Resolution, ResolutionInfo} from 'zb/device/resolutions';

/**
 */
export default class Application extends BaseApplication {
	/**
	 * @override
	 */
	onReady() {
		this.addScene(new Home(), 'home');
        this.addScene(new Player(), 'player');
        this.addScene(new Page1(), 'page1')
	}

	/**
	 * @override
	 */
	home() {
		this.clearHistory();
		const homeScene = this.getLayerManager().getLayer('player');

		return this.getSceneOpener().open(homeScene);
	}
	/**
	 * @override
	 * this will force the resolution, I used it to force chrom to have the same resolution as the TV
	 */
	_appendScreenSizeClass() {
		// No super necessary
		const resolutionInfo = ResolutionInfo[Resolution.HD];
		this._appendViewportSize(resolutionInfo);
		this._body.classList.add('zb-full-hd');
	}
	/**
	 * @override
	 */
	onStart() {
		this.home();
	}
}
