// this file mainly caters the secret management for the codebase.
// it provides the useful environment variables via env() function.

import { exit } from "process";
import { IEnv } from "./types";
import { IEnvironmentType } from "./types";

export const env = (): IEnv => {
  const _environment: IEnvironmentType = <IEnvironmentType>process.env.ENVIRONMENT || 'development';

  if (_environment === 'development') return require("./environment/dev.env");
  else if (_environment === "production") return require("./environment/prod.env");
  else if (_environment === "staging") return require("./environment/qa.env");
  else {
    console.log(`Error. shell variable ENVIRONMENT not set. Acceptable values are 'dev' | 'production'`);
    exit(1);
  }

};