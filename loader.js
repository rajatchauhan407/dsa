import { register } from 'ts-node/esm';
import { pathToFileURL } from 'url';

// Register ts-node/esm
register('ts-node/esm', pathToFileURL('./'));