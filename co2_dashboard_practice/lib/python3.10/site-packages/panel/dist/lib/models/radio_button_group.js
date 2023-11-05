var _a;
import { Tooltip } from "@bokehjs/models/ui/tooltip";
import { build_view } from "@bokehjs/core/build_views";
import { RadioButtonGroup as bkRadioButtonGroup, RadioButtonGroupView as bkRadioButtonGroupView, } from '@bokehjs/models/widgets/radio_button_group';
export class RadioButtonGroupView extends bkRadioButtonGroupView {
    *children() {
        yield* super.children();
        if (this.tooltip != null)
            yield this.tooltip;
    }
    async lazy_initialize() {
        await super.lazy_initialize();
        const { tooltip } = this.model;
        if (tooltip != null)
            this.tooltip = await build_view(tooltip, { parent: this });
    }
    remove() {
        this.tooltip?.remove();
        super.remove();
    }
    render() {
        super.render();
        const toggle = (visible) => {
            this.tooltip?.model.setv({
                visible,
            });
        };
        this.el.addEventListener("mouseenter", () => {
            toggle(true);
        });
        this.el.addEventListener("mouseleave", () => {
            toggle(false);
        });
    }
}
RadioButtonGroupView.__name__ = "RadioButtonGroupView";
export class RadioButtonGroup extends bkRadioButtonGroup {
    constructor(attrs) {
        super(attrs);
    }
}
_a = RadioButtonGroup;
RadioButtonGroup.__name__ = "RadioButtonGroup";
RadioButtonGroup.__module__ = "panel.models.widgets";
(() => {
    _a.prototype.default_view = RadioButtonGroupView;
    _a.define(({ Nullable, Ref }) => ({
        tooltip: [Nullable(Ref(Tooltip)), null],
    }));
})();
//# sourceMappingURL=radio_button_group.js.map