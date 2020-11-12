import AbstractCuteScene from 'cutejs/layers/abstract-scene';
import IStatefulVideo, {PrepareOption,MediaType} from 'zb/device/interfaces/i-stateful-video';
import {Out, render} from 'generated/cutejs/zombie274/scenes/player/player.jst';
import app from 'generated/app';
import DataList from 'ui/data/list';
import {Value} from 'zb/geometry/direction';
import {text} from 'zb/html';
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
        this._addContainerClass('s-page-1');
        /**
         * @type {Out}
         * @protected
         */
        this._exported;
        this._exported.baseListVertical.focus()
        this.data = new DataList([
            "option 1",
            "option 2",
            "option 3",
            "option 5",
            "option 4",
            "option 5"]);

        this.items = new DataList(["item 1", "item 2", "item 3", "item 4", "item 5", "item 6", "item 7", "item 8","item 1", "item 2", "item 3", "item 4", "item 5", "item 6", "item 7", "item 8"]);

        this.data.selectFirst()
        this._exported.baseListVertical.setSource(this.data)
    }

    /**
     * @override
     */
    beforeDOMShow() {
        super.beforeDOMShow();
       app.showVideo();
        this._exported.baseList.on(
            this._exported.baseList.EVENT_CLICK, (eventName, item) => {
                this._exported.baseList._container.id = "";
                const player = app.getLayerManager().getLayer('player');
                if (item === "item 1") {

                        //let url = 'http://cdn-vspp-pcs1.online.meo.pt:80/sdash/LIVE$RTP_2/index.mpd,vxttoken=cGF0aFVSST0lMmZzZGFzaCUyZkxJVkUlMjRSVFBfMiUyZmluZGV4Lm1wZCUyZiomZXhwaXJ5PTE2MDUyMTM0MDcmeDp1c2VyPTUwNDI2ODA3OSZ4OmlwPTg1LjI0My45MC4xNzYsNTRhNTg2NjlkM2MzZTZjZjE2ZjkwMWIzYmRiYzhhMDJjN2NiZGM5M2M0ZWU5OWU1NTczY2VhYmJhYzJiNTZiZg==/Manifest?device=ATV_Live&start=LIVE&end=END'
                        let url = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
                        this.play(url);

                }
                if (item === "item 2") {

                        //let url = 'http://cdn-vspp-pcs1.online.meo.pt:80/sdash/LIVE$RTP_1/index.mpd,vxttoken=cGF0aFVSST0lMmZzZGFzaCUyZkxJVkUlMjRSVFBfMSUyZmluZGV4Lm1wZCUyZiomZXhwaXJ5PTE2MDUxNjU0NDImeDp1c2VyPTUwNDI2ODA3OSZ4OmlwPTg1LjI0My45MC4xNzYsODFlOGRkMWEwYTNjOTYxOTg3MDY1Y2YyOGU1NTQ0MjU0NGIzYTJkNmU4MWYwMjJhYjIxNjA5YjVkOWU2OGFkNg==/Manifest?device=ATV_Live&start=LIVE&end=END'
                    let url = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'

                    this.play(url);

                }


                this.setNavigationRule(this._exported.baseListVertical, Value.RIGHT, this._exported.baseList, true);
            }
        )
        this._exported.baseList.on(
            this._exported.baseList.EVENT_AFTER_MOVE, (eventName, item) => {
                text(this._exported.message, item);
            }
        )
        this._exported.baseListVertical.on(
            this._exported.baseList.EVENT_CLICK, (eventName, item) => {
                this.items.selectAt(0)
                this._exported.baseList.setSource(this.items)

                //this._exported.baseList._container.id = "slide";
                //let that = this
                // setTimeout(function(){
                //     that._exported.baseList._container.id = "";
                // }, 2000);

                this._exported.sliderWrapper.appendChild(this._exported.baseList.getContainer());
                this._exported.sliderWrapper.style.width =1356 +'px';

                this._exported.baseListVertical.blur()
                this._exported.baseList.focus()

                this.setNavigationRule(this._exported.baseListVertical, Value.RIGHT, this._exported.baseList, true);

            }
        )
        console.log(this._exported.baseList.getCurrentItem())
        if (this._exported.baseList.getCurrentItem() === "item 1") {
            this.setNavigationRule(this._exported.baseList, Value.LEFT, this._exported.baseListVertical);
        }
        this.setNavigationRule(this._exported.baseList, Value.DOWN, this._exported.baseListVertical);
        this.setNavigationRule(this._exported.baseList, Value.UP, this._exported.baseListVertical);


    }

    /**
     * @override
     */
    afterDOMHide() {
        super.afterDOMHide();
        app.showVideo();


    }

    /**
     * @override
     * saving state and position on exit
     * not finished
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
     *    check player state, rebuild player if changing content,
     *    it works but Im not sure its the correct way to do it
     *    should come as a argument flag perhaps...
     */
    play(url) {
console.log("STATEEE", this._video.getState())
        if(this._video.getState() !== "idle"){
            if(this._video.getState() !== "null") {
                this._video.destroy()
            }
            this._video = app.device.createStatefulVideo();
            this._video.prepare(url,
           {
                [PrepareOption.TYPE]: MediaType.MP4
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


}
