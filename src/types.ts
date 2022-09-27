// name of this file could be <project_name>.types.ts
// project name - wisa; then file name = wisa.types.ts

export type IEnvironmentType = 'production' | 'staging' | 'development';

export interface IPopulate {
  path: string;
  model?: string;
  populate?: IPopulate;
}

export interface IFindPaginationQuery{
  page_size?: number,
  page_number?:number
}

export interface IEnv {
  stage?: string;
  port: number;
  db: IMongoDBCfg;
  domain: string;
  apiPath: string;
  staticPath: string;
}

export interface IMongoDBCfg {
  name: string;
  user: string;
  pw: string;
  account: string;
  uri: (user: string, pw: string, name: string, account: string) => string;
}