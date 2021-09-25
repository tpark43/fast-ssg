#!/usr/bin/env bash
":" //# comment; exec /usr/bin/env node --input-type=module - "$@" < "$0"

import chalk from 'chalk';
import { processConvertingToHTML } from '@fast-ssg/service';
import { getParams } from '@fast-ssg/service';

const { argv } = getParams();

console.log(argv)
try {
    const { input: filename } = argv;
    processConvertingToHTML(filename);
} catch(err) {
    console.error(chalk.red(err.message));
}