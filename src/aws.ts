import AWS = require('aws-sdk');
import aws = require('aws-sdk');
import { any } from 'bluebird';
import { threadId } from 'worker_threads';
import { config } from './config/config';
import { filterImageFromURL } from './util/util';
import fs = require('fs');


const c = config.dev;





//Configure AWS
var credentials = new AWS.SharedIniFileCredentials({profile: 'default'});
AWS.config.credentials = credentials;
const S3=new AWS.S3();


export const s3Proxy = new AWS.S3({
    signatureVersion: 'v4',
    region: c.aws_region,
    params: {Bucket: c.aws_media_bucket}


  });

  export const s3Details=new AWS.S3();

  export function getAWSConfiguration(){


    AWS.config.update({

        accessKeyId: c.aws_access_key,
        secretAccessKey: c.aws_secret_key,
        region: c.aws_region
    })

    //const S3Proxy =new AWS.S3();
  }

  //export const S3Proxy =new AWS.S3

  // export function getObjectFromS3(req:any,res:any){

   

  //   var params ={ Bucket: 'baluudacity11', Key: 'butterfly.jfif' };

  //   S3.getObject(params, function (err, data) {
  //       if (err) {
  //           console.log(err, err.stack);
  //       }
  //       else {
  //           //console.log(data.Body.toString('utf-8'))
  //           console.log(data.Body)
  //           filterImageFromURL('https://baluudacity11.s3.amazonaws.com/images+(3).jpeg')
  //       }
  //   })
  // }

  // export function upLoadImageToAWS(req:any,res:any){

  //   //const fileContent = fs.readFileSync(req.file.originalname);
  //   //aws.config.setPromisesDependency();
  //   getAWSConfiguration();
  //   const params = {
  //     Bucket: config.dev.aws_media_bucket,
  //     Key: req.file.originalname, // File name you want to save as in S3
  //     Body: req.file.originalname
  // };
  //   S3.upload(params, function (err, data) {
  //     if (err) {
  //         throw err;
  //     }
  //     console.log(`File uploaded successfully. ${data.Location}`);
  // });
  // }

  // export function getSignedUrl(){
 
  //   const S3=new AWS.S3();

  //    let params = {
  //         Bucket: 'baluudacity11',
  //         Key: 'butterfly.jfif',
  //     };

  //     //req.params = params;

  //   S3.getSignedUrl('putObject', params, function (err, signedUrl) {
  //       if (err) {
  //           console.log(err);
  //           //return next(err);
  //       }
  //       else {

  //         const urlFromAWS=signedUrl.split("?")[0];
  //         const signedUrlFromAWS=signedUrl;

  //         console.log(urlFromAWS);
  //         console.log(signedUrlFromAWS);

  //         return signedUrlFromAWS;

  //           // return res.json({
  //           //     postUrl: signedUrl,
  //           //     getUrl: signedUrl.split("?")[0]
  //           // })
  //       }
  //   });

  


  // }

  

