const Me = imports.misc.extensionUtils.getCurrentExtension();
const App = Me.imports.iconActivities;

let app;

function init(){
}

function enable(){
    app = new App.IconActivities();
}

function disable() {
    app.destroy();
    app = undefined;
}