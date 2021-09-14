#!/usr/bin/env bash
":" //# comment; exec /usr/bin/env node --input-type=module - "$@" < "$0"

import chalk from 'chalk';

console.log(chalk.yellow('Hello tony'));