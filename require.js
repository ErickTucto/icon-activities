/*
  Copyright (c) 2019, Erick Tucto <https://twitter.com/erick_tucto>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:
    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.
    * Neither the name of the GNOME nor the
      names of its contributors may be used to endorse or promote products
      derived from this software without specific prior written permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
  ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
  DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
const __dirname = imports.misc.extensionUtils.getCurrentExtension().path
const GLib = imports.gi.GLib

var getConfig = (path) => {
  if (typeof path == "object") {
    return path
  }
  if (GLib.file_test(path, GLib.FileTest.EXISTS)) {
    return JSON.parse(GLib.file_get_contents(path)[1])
  }
  return {
    separator: "/",
    home: __dirname
  }
}

/**
 * @todo Agregar alias de rutas
 */
var require = (path, config = `${__dirname}/require.config.json`) => {
  config = getConfig(config)
  let module
  if (path.slice(0,2) === './') {
    path = path.slice(2)
    let abs_path = `${config.home}/${path}`
    module = 'imports.misc.extensionUtils.getCurrentExtension().imports'

    for(let p of path.split(config.separator)) {
      module = module.concat(`["${p}"]`)
    }

    return eval(module)
  } else {
    module = 'imports'
    for(let p of path.split(config.separator)) {
      module = module.concat(`["${p}"]`)
    }
    return eval(module)
  }
}
