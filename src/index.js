#!/usr/bin/env bash
":" //# comment; exec /usr/bin/env node --input-type=module - "$@" < "$0"

import chalk from 'chalk';
import { processConvertingToHTML } from './service/file.js';
import { getParams } from './service/util.js';

const { argv } = getParams();

console.log(argv)
try {
    const { input: filename } = argv;
    processConvertingToHTML(filename);
} catch(err) {
    console.error(chalk.red(err.message));
}