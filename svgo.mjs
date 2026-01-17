export default {
	multipass: true,
	//js2svg: {
	//	indent: '\t',
	//	pretty: true,
	//},
	plugins: [
		"convertStyleToAttrs",
		"removeDimensions",
		//"removeXMLNS",
		"removeXlink",
		"removeUnusedNS",
		
		//"removeDoctype",
		//"removeXMLProcInst",
		"removeComments",
		"removeMetadata",
		"removeEditorsNSData",
		"cleanupAttrs",
		//"mergeStyles",
		//"inlineStyles",
		//"minifyStyles",
		"cleanupIds",
		"removeUselessDefs",
		"cleanupNumericValues",
		"convertColors",
		"removeUnknownsAndDefaults",
		"removeNonInheritableGroupAttrs",
		"removeUselessStrokeAndFill",
		"cleanupEnableBackground",
		"removeHiddenElems",
		"removeEmptyText",
		//"convertShapeToPath",
		"convertEllipseToCircle",
		"moveElemsAttrsToGroup",
		//"moveGroupAttrsToElems",
		"collapseGroups",
		"convertPathData",
		"convertTransform",
		"removeEmptyAttrs",
		"removeEmptyContainers",
		//"mergePaths",
		"sortAttrs",
		"sortDefsChildren",
		"removeDesc",
		
		{
			name: "removeAttrs",
			params: {
				attrs: ["path:color", "*:style"]
			}
		}
	]
}
