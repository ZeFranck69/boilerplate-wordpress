acf.add_filter('color_picker_args', function (args, $field) {
	args.palettes = [];
	console.log(acfAdminColors);
	for (var color in acfAdminColors) {
		args.palettes.push('#' + color);
	}

	return args;
});
