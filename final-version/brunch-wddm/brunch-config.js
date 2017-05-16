// See http://brunch.io for documentation.
exports.files = {
  javascripts: {joinTo: {
      'js/app.js': [
				'app/initialize.js',
				'app/app.js',
				'app/tablescript.js'
			]
  }},
  stylesheets: {joinTo: {
			'css/app.css': [
				'app/tablestyle.css',
				'app/styles.css'
			]
	}}
};
