// Listen on port 9001
var gith = require('gith').create( 9001 );
// Import execFile, to run our bash script
var execFile = require('child_process').execFile;
console.log("Server listening on port 9001");

gith({
    repo: 'ReseauBiodiversiteQuebec/BDQC-shiny-inat-time-series'
}).on( 'all', function( payload ) {
    if( payload.branch === 'master' )
    {
            // Exec a shell script
            execFile('/home/shiny/shiny_inat_time_series_webhook.sh', function(error, stdout, stderr) {
                    // Log success in some manner
                    console.log( 'Tableau inat time series updated' );
            });
    }
});

gith({
    repo: 'ReseauBiodiversiteQuebec/tableau-explo-sites'
}).on( 'all', function( payload ) {
    if( payload.branch === 'master' )
    {
            // Exec a shell script
            execFile('/home/shiny/shiny_explo_sites_webhook.sh', function(error, stdout, stderr) {
                    // Log success in some manner
                    console.log( 'Tableau explo sites updated' );
            });
    }
});

gith({
    repo: 'ReseauBiodiversiteQuebec/tableau-composition'
}).on( 'all', function( payload ) {
    if( payload.branch === 'master' )
    {
            // Exec a shell script
            execFile('/home/shiny/tableau_composition_webhook.sh', function(error, stdout, stderr) {
                    // Log success in some manner
                    console.log( 'Tableau composition' );
            });
    }
});

gith({
    repo: 'ReseauBiodiversiteQuebec/tableau-rarefaction'
}).on( 'all', function( payload ) {
    if( payload.branch === 'master' )
    {
            // Exec a shell script
            execFile('/home/shiny/tableau_rarefaction_webhook.sh', function(error, stdout, stderr) {
                    // Log success in some manner
                    console.log( 'Tableau rarefaction updated' );
            });
    }
});

gith({
    repo: 'ReseauBiodiversiteQuebec/tableau-lpi-bdi'
}).on( 'all', function( payload ) {
    if( payload.branch === 'master' )
    {
            // Exec a shell script
            execFile('/home/shiny/tableau_lpi_bdi_webhook.sh', function(error, stdout, stderr) {
                    // Log success in some manner
                    console.log( 'Tableau lpi bdi' );
            });
    }
});


gith({
    repo: 'ReseauBiodiversiteQuebec/tableauphenologie'
}).on( 'all', function( payload ) {
    if( payload.branch === 'master' )
    {
            // Exec a shell script
            execFile('/home/shiny/tableauphenologie_webhook.sh', function(error, stdout, stderr) {
                    // Log success in some manner
                    console.log( 'Tableau phenologie' );
            });
    }
});

gith({
    repo: 'ReseauBiodiversiteQuebec/tableau-atlas'
}).on( 'all', function( payload ) {
    if( payload.branch === 'master' )
    {
            // Exec a shell script
            execFile('/home/shiny/tableau_atlas_webhook.sh', function(error, stdout, stderr) {
                    // Log success in some manner
                    console.log( 'Tableau Atlas' );
            });
    }
});

gith({
    repo: 'ReseauBiodiversiteQuebec/tableaubdi'
}).on( 'all', function( payload ) {
    if( payload.branch === 'main' )
    {
            // Exec a shell script
            execFile('/home/shiny/tableaubdi_webhook.sh', function(error, stdout, stderr) {
                    // Log success in some manner
                    console.log( 'Tableau BDI' );
		    console.log( error );
            });
    }
});

gith({
    repo: 'ReseauBiodiversiteQuebec/tableaulpi'
}).on( 'all', function( payload ) {
    if( payload.branch === 'main' )
    {
            // Exec a shell script
            execFile('/home/shiny/tableaulpi_webhook.sh', function(error, stdout, stderr) {
                    // Log success in some manner
                    console.log( 'Tableau LPI' );
            });
    }
});

gith({
    repo: 'ReseauBiodiversiteQuebec/tableauatlas'
}).on( 'all', function( payload ) {
    if( payload.branch === 'main' )
    {
            // Exec a shell script
            execFile('/home/shiny/tableauatlas_webhook.sh', function(error, stdout, stderr) {
                    // Log success in some manner
                    console.log( 'Tableau Atlas' );
            });
    }
});

gith({
    repo: 'ReseauBiodiversiteQuebec/tableauchangementstemporels'
}).on( 'all', function( payload ) {
    if( payload.branch === 'main' )
    {
            // Exec a shell script
            execFile('/home/shiny/tableauchangementstemporels_webhook.sh', function(error, stdout, stderr) {
                    // Log success in some manner
                    console.log( 'Tableau Changements Temporels' );
            });
    }
});

gith({
    repo: 'ReseauBiodiversiteQuebec/tableauexplosites'
}).on( 'all', function( payload ) {
    if( payload.branch === 'main' )
    {
            // Exec a shell script
            execFile('/home/shiny/tableauexplosites_webhook.sh', function(error, stdout, stderr) {
                    // Log success in some manner
                    console.log( 'Tableau Explo Sites' );
            });
    }
});

gith({
    repo: 'ReseauBiodiversiteQuebec/tableaurarefaction'
}).on( 'all', function( payload ) {
    if( payload.branch === 'main' )
    {
            // Exec a shell script
            execFile('/home/shiny/tableaurarefaction_webhook.sh', function(error, stdout, stderr) {
                    // Log success in some manner
                    console.log( 'Tableau Rarefaction' );
            });
    }
});

gith({
    repo: 'ReseauBiodiversiteQuebec/tableaucomposition'
}).on( 'all', function( payload ) {
    if( payload.branch === 'main' )
    {
            // Exec a shell script
            execFile('/home/shiny/tableaucomposition_webhook.sh', function(error, stdout, stderr) {
                    // Log success in some manner
                    console.log( 'Tableau Composition' );
            });
    }
});

gith({
    repo: 'ReseauBiodiversiteQuebec/tableaucoleo'
}).on( 'all', function( payload ) {
    if( payload.branch === 'main' )
    {
            // Exec a shell script
            execFile('/home/shiny/tableaucoleo_webhook.sh', function(error, stdout, stderr) {
                    // Log success in some manner
                    console.log( 'Tableau Coleo' );
            });
    }
});


gith({
    repo: 'ReseauBiodiversiteQuebec/shiny-src'
}).on( 'all', function( payload ) {
    if( payload.branch === 'main' )
    {
            // Exec a shell script
            execFile('/home/shiny/shiny-src_webhook.sh', function(error, stdout, stderr) {
                    // Log success in some manner
                    console.log( 'CSS JS Update' );
            });
    }
});

gith({
    repo: 'ReseauBiodiversiteQuebec/mapselector'
}).on( 'all', function( payload ) {
    if( payload.branch === 'main' )
    {
            // Exec a shell script
            execFile('/home/shiny/mapselector_webhook.sh', function(error, stdout, stderr) {
                    // Log success in some manner
                    console.log( 'Map selector update' );
            });
    }
});

gith({
    repo: 'ReseauBiodiversiteQuebec/COLEO_injection_app'
}).on( 'all', function( payload ) {
    if( payload.branch === 'validation_only' )
    {
            // Exec a shell script
            execFile('/home/shiny/tableauvalidation_webhook.sh', function(error, stdout, stderr) {
                    // Log success in some manner
                    console.log( 'Tableau validation update' );
            });
    }
});

gith({
    repo: 'ReseauBiodiversiteQuebec/SDM_benchmark_remote'
}).on( 'all', function( payload ) {
    if( payload.branch === 'main' )
    {
            // Exec a shell script
            execFile('/home/shiny/tableau-comparateur_sdm_webhook.sh', function(error, stdout, stderr>
                    // Log success in some manner
                    console.log( 'Tableau comparateur_sdm update' );
            });
    }
});
