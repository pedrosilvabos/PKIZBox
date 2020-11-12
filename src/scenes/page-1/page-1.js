import AbstractCuteScene from 'cutejs/layers/abstract-scene';
import {Out, render} from 'generated/cutejs/zombie274/scenes/page-1/page-1.jst';
import {Value} from 'zb/geometry/direction';
import DataList from 'ui/data/list';
import app from 'generated/app';
import {text} from 'zb/html';

/**
 */
export default class page1 extends AbstractCuteScene {
    /**
     */
    constructor() {
        super();

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

    beforeDOMShow() {
        super.beforeDOMShow();
        this._exported.baseList.on(
            this._exported.baseList.EVENT_CLICK, (eventName, item) => {
                this._exported.baseList._container.id = "";
                const player = app.getLayerManager().getLayer('player');
                if (item === "item 1") {
                    app.getSceneOpener().open(player, () => {
                        let url = 'http://cdn-vspp-pcs1.online.meo.pt:80/sdash/LIVE$RTP_2/index.mpd,vxttoken=cGF0aFVSST0lMmZzZGFzaCUyZkxJVkUlMjRSVFBfMiUyZmluZGV4Lm1wZCUyZiomZXhwaXJ5PTE2MDUyMTM0MDcmeDp1c2VyPTUwNDI2ODA3OSZ4OmlwPTg1LjI0My45MC4xNzYsNTRhNTg2NjlkM2MzZTZjZjE2ZjkwMWIzYmRiYzhhMDJjN2NiZGM5M2M0ZWU5OWU1NTczY2VhYmJhYzJiNTZiZg==/Manifest?device=ATV_Live&start=LIVE&end=END'
                        player.play(url);
                    });
                }
                if (item === "item 2") {
                    app.getSceneOpener().open(player, () => {
                        let url = 'http://cdn-vspp-pcs1.online.meo.pt:80/sdash/LIVE$RTP_1/index.mpd,vxttoken=cGF0aFVSST0lMmZzZGFzaCUyZkxJVkUlMjRSVFBfMSUyZmluZGV4Lm1wZCUyZiomZXhwaXJ5PTE2MDUxNjU0NDImeDp1c2VyPTUwNDI2ODA3OSZ4OmlwPTg1LjI0My45MC4xNzYsODFlOGRkMWEwYTNjOTYxOTg3MDY1Y2YyOGU1NTQ0MjU0NGIzYTJkNmU4MWYwMjJhYjIxNjA5YjVkOWU2OGFkNg==/Manifest?device=ATV_Live&start=LIVE&end=END'
                        player.play(url);
                    });
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
    _renderTemplate() {
        return render(this._getTemplateData(), this._getTemplateOptions());
    }
};
