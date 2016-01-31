  // Grunt is such complete horse shit. 
module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            dev: {
                options: {
                    paths: ["src/assets/css"]
                },

                // All this shit, because turning .less into .css is
                // an oddball use case.
                files: [{
                    src: '*.less',
                    cwd: 'src/assets/css',
                    expand: true,
                    dest: 'src/static/css',
                    ext: '.css'
                }]
            }
        },

        watch: {
            scripts: {
                files: ['src/assets/**/*'],
                tasks: ['less'],
                options: { spawn: false, },
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['less']);
};