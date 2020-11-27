function plugin(CodeMirror) {
}

module.exports = {
	default: function(_context) { 
		return {
			plugin: plugin,
			codeMirrorOptions: {'lineNumbers': true},
		}
	},
}