import conf from '../Conf/Conf'
import { Client ,Databases,Storage,Query,ID} from 'appwrite'

export class Service{

    client = new Client();
    Databases;
    buket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectid);
        this.Databases = new Databases(this.client);
        this.buket = new Storage(this.client);

    }

    async createpost({title,slug,content,featuredImage, status, userId}){
  
        try {
            return await this.Databases.createDocument(
                conf.appwriteDatabaseid,
                conf.appwriteCollectionid,
                slug,  // use document id
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            throw error;
        }
    }

    async updatepost(slug, {title, content, featuredImage, status, userId} ){
        try {
            return await this.Databases.updateDocument(
                conf.appwriteDatabaseid,
                conf.appwriteCollectionid,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status

                }
            )
        } catch (error) {
            console.log("Appwite service :: update post :: error",error);
            
        }
    }



    async deletepost(slug){
        try {
            await this.Databases.deleteDocument(
                conf.appwriteDatabaseid,
                conf.appwriteCollectionid,
                slug
            )
            return true;
        } catch (error) {
            throw error;
            return false;
        }
    }


    async getpost(slug){
        try {
            return await this.Databases.getDocument(
                conf.appwriteDatabaseid,
                conf.appwriteCollectionid,
                slug
            )
        } catch (error) {
            throw error;
            return false;
        }
    }

    async getposts(quries = [Query.equal("status","active")]){
        try {
            return await this.Databases.listDocuments(
                conf.appwriteDatabaseid,
                conf.appwriteCollectionid,
                quries
            )
        } catch (error) {
            throw error;
            return false;
            
        }
    }


    async uploadfile(file){
         try {
            return await this.buket.createFile(
                conf.appwriteBucketid,
                ID.unique(),
                file
            )
         } catch (error) {
            throw error;
            return false;
         }
    }

    async deletefile(fileID){
        try {
            await this.buket.deleteFile(
                conf.appwriteBucketid,
                fileID
            )
            return true;

        } catch (error) {
            console.log("Appwrite service :: deletefile :: error", error);
            
        }

    }


    getFilePreview(fileID){
        return this.buket.getFilePreview(conf.appwriteBucketid, fileID);
    } 
}


const service = new Service()

export default service;
