import chalk from 'chalk';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const getParams = () => yargs(hideBin(process.argv))
                                .usage('Usage: fast-ssg [options]')
                                .example(`1. How to install: npm i -g https://github.com/tpark43/fast-ssg.git.\n2. Run: fast-ssg -i 'test.txt'`)
                                .option('i', {
                                    alias: 'input',
                                    describe: 'Input a file or a directory',
                                    type: 'string',
                                    required: true
                                })
                                .alias('v', 'version')
                                .version('v', chalk.green(`Version is 0.0.1`))
                                .alias('h', 'help')
                                .help('h', 'Display the usage information');