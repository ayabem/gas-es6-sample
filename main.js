import { greetGas } from './src/controllers/sample';

global.helloGas = function helloGas() {
  greetGas();
};
