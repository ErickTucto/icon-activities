imports.gi.versions.St = "1.0";

const St = imports.gi.St;
const Gio = imports.gi.Gio;
const Main = imports.ui.main;
const Clutter = imports.gi.Clutter;

const Me = imports.misc.extensionUtils.getCurrentExtension();

class IconActivities {
    constructor() {
        this._activities = Main.panel.statusArea['activities'];
        this._build({ icon: Me.path + "/icons/logo-ubuntu.svg" });
    }
    _build(prop) {
        this._activities.actor.destroy_all_children();
        this._activities._label = this._setLabel(prop);
        this._activities.actor.add_actor(this._activities._label);
        this._activities.actor.label_actor = this._activities._label;
    }
    _setLabel(prop) {
        if (prop.text) {
            return new St.Label({
                text: prop.text,
                y_align: Clutter.ActorAlign.CENTER
            });
        } else if (prop.icon) {
            let gicon = Gio.icon_new_for_string(prop.icon);
            let icon = new St.Icon({
                gicon: gicon,
                style_class: 'iconActivities'
            });
            icon.set_size(32, 32);
            return icon;
        }
    }
    destroy() {
        let text = _("Activities");
        this._build({ text: text });
    }
}