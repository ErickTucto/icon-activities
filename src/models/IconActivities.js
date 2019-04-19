const Main = imports.ui.main;

const { require } = imports.misc.extensionUtils.getCurrentExtension().imports.require
const { Icon } = require('./src/models/Icon');

var IconActivities = class {
  constructor(icon) {
    this._activities = Main.panel.statusArea['activities'];
    this._icon = icon; // type Icon
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
    this._build(new Icon({ text: text }));
  }
}
