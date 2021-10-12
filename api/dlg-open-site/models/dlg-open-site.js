'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

const { spawn } = require('child_process');

module.exports = {
    lifecycles: {
        afterUpdate() {
            strapi.log.info("Rebuilding App...");

            const child = spawn('npm', [
                'run',
                '--prefix',
                '/home/pamo80/dev/projects/dlgopen/dlgopen-app',
                'rebuild'
            ]);
            
            child.stdout.on('data', data => {
                strapi.log.info(`\n${data}`);
            });
              
            child.stderr.on('data', data => {
                strapi.log.fatal(`\n${data}`);
            });

            child.on('error', (error) => {
                strapi.log.fatal(error);
            });
              
            child.on('close', (code) => {
                strapi.log.info(`Process exited with code ${code}.`);
                strapi.log.info(`Rebuilding completed ${code != 0 ? "with errors" : "successfully"}.`);
            });
        }
    }
};
