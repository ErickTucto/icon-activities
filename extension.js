imports.gi.versions.St = "1.0";

const Me = imports.misc.extensionUtils.getCurrentExtension();
const St = imports.gi.St;
const Gio = imports.gi.Gio;
const Main = imports.ui.main;
const Clutter = imports.gi.Clutter;

function init(){
}

function enable(){
    _changeActivities({ icon: Me.path + "/icons/logo-ubuntu.svg" });
}

function disable() {
    let text = _("Activities");
    _changeActivities({ text: text });
}

function _changeActivities(prop) {
    let Activities = Main.panel.statusArea['activities'];
    Activities.actor.destroy_all_children();
    Activities._label = _getLabel(prop);
    Activities.actor.add_actor(Activities._label);
    Activities.actor.label_actor = Activities._label;
}

function _getLabel(prop) {
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
        icon.set_size(35, 35);
        return icon;
    }
}