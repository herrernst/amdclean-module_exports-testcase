({
    "name": "main",
    "out": "dist/main.js",
    'optimize': 'none',
  //https://github.com/gfranko/amdclean/
		onModuleBundleComplete: function (data) {
		  var fs = module.require('fs'),
		    amdclean = module.require('amdclean'),
		    outputFile = data.path,
		    cleanedCode = amdclean.clean({
		      'filePath': outputFile
		    });

		  fs.writeFileSync(outputFile, cleanedCode);
		}
})
