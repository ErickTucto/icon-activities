const Me = imports.misc.extensionUtils.getCurrentExtension()
const { require } = Me.imports.require
const { Icon } = require('./src/models/Icon')
const { IconActivities } = require('./src/models/IconActivities')

const icon = Me.path + "/src/icons/logo-ubuntu.svg"

let app

var init = () => {
  log("IconActivities: Init")
}

var enable = () => {
  log("IconActivities: Enable")
  app = new IconActivities(new Icon({ icon }))
}

var disable = () => {
  log("IconActivities: Disable")
  app.destroy()
  app = undefined
}
