module.exports = function(grunt) {
	//Configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		typescript: {
			base: {
				src: ['src/ts/**/*.ts'],
				dest: 'src/_js/',
				options: {
					module: 'amd', //or commonjs
					target: 'es5', //or es3
					base_path: 'src/ts',
					sourcemap: true,
					fullSourceMapPath: true,
					declaration: true
				}
			}
		},
		qunit: {
			all: ['test/index.html']
		},
		uglify: {
			options: {
				banner: '/* typescript-demo <%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd") %>) | Outright Mental Inc. - https://github.com/outrightmental/typescript-demo.git */\n'
			},
			all: {
				files: [
					{expand: true, cwd: 'src/_js/', src: ['**/*.js'], dest: 'build/js/', ext:'.min.js'}
				]
			}
		},
		htmlmin: {
			all: {  
				options: { 
					removeComments: true,
					collapseWhitespace: true
				},
				files: [
					// Index HTML
                    {expand: true, cwd: 'src/', src: ['*.html'], dest: 'build/'}
				]
			}
		},
		copy: {
			all: {
				files: [
					// Copy CSS files
					{expand: true, cwd: 'src/css/', src: ['*.css'], dest: 'build/css/'},
					// Copy Images
					{expand: true, cwd: 'src/img/', src: ['**'], dest: 'build/img/'}
				]
			}
		},
		watch: {
			typescript: {
				files: ['src/ts/**/*.ts'],
				tasks: ['typescript','qunit','uglify'],
				options: {
					nospawn: true
				}
			},
			html: {
				files: ['src/*.html'],
				tasks: ['htmlmin'],
				options: {
					nospawn: true
				}
			},
			css: {
				files: ['src/css/*.css'],
				tasks: ['copy'],
				options: {
					nospawn: true
				}
			}
		}
	});

	//Dependencies.
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-typescript');

	//Tasks.
	grunt.registerTask('default', ['typescript','qunit', 'uglify', 'htmlmin', 'copy']);
//	grunt.registerTask('travis', ['jshint', 'qunit']);
};