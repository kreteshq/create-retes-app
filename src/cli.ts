#!/usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { clone } from 'tegit';

const argv = yargs(hideBin(process.argv))
  .demandCommand(1)
  .argv

// FIXME WTF?
const [name] = (argv as { _: string[] })._

// clone
await clone('kreteshq/retes-template', name);