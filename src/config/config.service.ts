import * as fs from 'fs';
import { parse } from 'dotenv';

export class ConfigServise {
    private readonly envConfig: {[ Key: string]: string};
    
    constructor(){
        const isDevelopmentEnv  = process.env.NODE_ENV !== "productin";
        
        if(isDevelopmentEnv){
            const envFilePath  = __dirname + '/../../.env';
            const existsPath  = fs.existsSync(envFilePath);

            if(!existsPath){
                console.log('.env file does not exist');
                process.exit(0);
                
            }
            this.envConfig = parse(fs.readFileSync(envFilePath));

        } else {
            this.envConfig = {
                PORT: process.env.PORT,

            };
        }
    }

    get(key: string): string{
        return this.envConfig[key];
    }
}