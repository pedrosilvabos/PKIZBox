import AbstractCuteScene from 'cutejs/layers/abstract-scene';
import IStatefulVideo, {PrepareOption,MediaType} from 'zb/device/interfaces/i-stateful-video';
import {Out, render} from 'generated/cutejs/zombie274/scenes/player/player.jst';
import app from 'generated/app';


// Note: This implementation is pretty naive and lacks complex Video state machine handling which is vital for stable apps

/**
 */
export default class Player extends AbstractCuteScene {
    /**
     */
    constructor() {
        super();

        /**
         * @type {Out}
         * @protected
         */
        this._exported;

        /**
         * @type {IStatefulVideo}
         * @protected
         */
        this._video = app.device.createStatefulVideo();

        this._addContainerClass('s-player');

        this._initVideo();
    }

    /**
     * @override
     */
    beforeDOMShow() {
        super.beforeDOMShow();
        app.showVideo();


    }

    /**
     * @override
     */
    afterDOMHide() {
        super.afterDOMHide();
        app.hideVideo();

        const {homeButton, backButton, forwardButton} = this._exported;

        homeButton.off(homeButton.EVENT_CLICK, this._onHomeButtonClickBound);
        backButton.off(backButton.EVENT_CLICK, this._onBackButtonClickBound);
        forwardButton.off(forwardButton.EVENT_CLICK, this._onForwardButtonClickBound);
    }

    /**
     * @override
     */
    takeSnapshot() {
        const lastPosition = this._video.getPosition();
        const lastUrl = this._video.getUrl();

        this._video.stop();

        return () => {
            this._video.prepare(lastUrl, {
                [PrepareOption.START_POSITION]: lastPosition
            });
        };
    }

    /**
     * @param {string} url
     */
    play(url) {
        console.log("this is the play method")
        if(this._video.getState() !== "idle"){
            console.log("the video is not in idle")
            this._video.destroy()
            this._video = app.device.createStatefulVideo();
            this._video.prepare(url,
           {
                [PrepareOption.TYPE]: MediaType.DASH
            });
            this._initVideo()
        }else{
            this._video.prepare(url);
            this._initVideo()
        }
    }

    /**
     * @override
     */
    _renderTemplate() {
        return render(this._getTemplateData(), this._getTemplateOptions());
    }

    /**
     * @protected
     */
    _initVideo() {

        this._video.on(this._video.EVENT_READY, () => this._video.play());
    }

    /**
     * @protected
     */
    _onHomeButtonClick() {
        const home = app.getLayerManager().getLayer('home');
        app.getSceneOpener().open(home);
    }

    /**
     * @protected
     */
    _onBackButtonClick() {
        app.back();
    }

    /**
     * @protected
     */
    _onForwardButtonClick() {
        app.forward();
    }
}
