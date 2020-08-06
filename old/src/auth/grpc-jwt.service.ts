import { Injectable } from '@nestjs/common';
import { IUser, IAuthService } from 'nestjs-guard-grpc';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
const jwksClient = require('jwks-rsa');
 
@Injectable()
export class GrpcJwtService implements IAuthService {
  client: any;
 
  constructor(private configService: ConfigService) {
    this.client = jwksClient({
      jwksUri: configService.get<string>('auth.jwks_uri'),
      issuer: configService.get<string>('auth.iss'),
      audience: configService.get<string>('auth.aud'),
    });
  }
 
  async verify(params: any): Promise<IUser | undefined> {
    let token = params;
    let self = this;
 
    return new Promise(function (resolve, reject) {
      jwt.verify(token, getKey, {}, (err, decoded) => {
        if (err) reject(err);
 
        resolve(decoded);
      });
    }).then((user) => user);
 
    function getKey(header, callback) {
      self.client.getSigningKey(header.kid, function (err, key) {
        var signingKey = key.publicKey || key.rsaPublicKey;
        callback(null, signingKey);
      });
    }
  }
}