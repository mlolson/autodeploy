// Listen on port 9001
var gith = require('gith').create( 9001 );
// Import execFile, to run our bash script
var execFile = require('child_process').execFile;

gith({
    repo: 'mlolson/org.geppetto.frontend'
}).on( 'push', function( payload ) {
    if( payload.branch === 'master' )
    {
            // Exec a shell script
           execFile('./hook.sh', function(error, stdout, stderr) {
                    console.log( 'Build deployed' );
           });
    }
});