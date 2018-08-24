const Main = imports.ui.main;

const Me = imports.misc.extensionUtils.getCurrentExtension();
const Icon = Me.imports.icon;

class IconActivities {
    constructor() {
        this._activities = Main.panel.statusArea['activities'];
        this._icon = new Icon.Icon({ icon: Me.path + "/icons/logo-ubuntu.svg" });
        this._build(this._icon);
    }
    _build(icon) {
        this._activities.actor.destroy_all_children();
        this._activities._label = icon.getLabel();
        this._activities.actor.add_actor(this._activities._label);
        this._activities.actor.label_actor = this._activities._label;
    }
    destroy() {
        let text = _("Activities");
        this._build(new Icon.Icon({ text: text }));
    }
}