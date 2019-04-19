imports.gi.versions.St = "1.0";

const St = imports.gi.St;
const Gio = imports.gi.Gio;
const Clutter = imports.gi.Clutter;

var Icon = class {
  constructor(params) {
    this.content = this._setLabel(params);
  }
  getLabel() {
    return this.content;
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
}
