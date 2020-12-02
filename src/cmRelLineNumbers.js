function showRelativeLines(cm) {
  const lineNum = cm.getCursor().line + 1;
  if (cm.state.curLineNum === lineNum) {
    return;
  }
  cm.state.curLineNum = lineNum;
  cm.setOption('lineNumberFormatter', l => 
    l === lineNum ? lineNum : Math.abs(lineNum - l));
}

module.exports = {
	default: function(_context) { 
		return {
			plugin: function(CodeMirror) {
                var editor = document.querySelector(".CodeMirror").CodeMirror;
                editor.on("cursorActivity", showRelativeLines);
            },
			codeMirrorOptions: {'lineNumbers': true},
		}
	},
}
