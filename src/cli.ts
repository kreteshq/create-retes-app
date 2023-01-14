#!/usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import C from 'picocolors';

import { clone } from 'tegit';

const argv = yargs(hideBin(process.argv))
  .demandCommand(1)
  .argv

// FIXME WTF?
const [name] = (argv as { _: string[] })._

await clone('kreteshq/retes-template', name);

console.log(`\nProject initialized ${C.green(C.bold('successfully'))}.\n`);
console.log(`Enter the project directory using:\n
  ${C.cyan(`cd ${name}`)}
`);
console.log(`Then, install dependencies with:\n
  ${C.cyan('pnpm install')}\n`);
console.log(`Then, run:\n
  ${C.cyan('pnpm start')}\n
to start your application and ${C.cyan('CTRL-C')} to stop.`);
