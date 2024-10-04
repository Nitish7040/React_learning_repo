import conf from '../Conf/Conf'
import { Client ,Account , ID} from 'appwrite'

export class AuthSevice{

    client = new client();
    account;


    constructor(){
          this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectid);
            this.account = new Account(this.client);
    }

    //call appwrite sevices
    async createAccount({email,password,name}){
        try{

        const userAccount = await this.account.create(ID.unique(),email,password,name)
             if (userAccount) {
                // return userAccount
               return this.login({email,password});

             } else {
                return userAccount;
             }
        }catch(error){
            throw error
        }
    }

    async login({email,password}){
        try {
            await this.account.createEmailSession(email,password);
        } catch (error) {
            throw error ;
        }
    }

    async getcurrentuser(){
        try {
            return await this.account.get();
        } catch (error) {
            // throw error;
            console.log("Appwrite service:: getcurrentuser", error);
            
        }
        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthSevice();

export default  AuthSevice;
