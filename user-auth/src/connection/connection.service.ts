import { Injectable } from '@nestjs/common';
import {Connection, createConnection} from "typeorm";

class ConnectionService {
    public connections: Map<any, Promise<Connection>> = new Map();

   public async getConnection(entityType: object) {
      const key = entityType;
      if (!this.connections.has(key)) {
         const tableName = (entityType as any).tableName;
         const name = `table:${tableName}`;

         const options = {type: "mysql"}; // the rest of the config data 
         const newOptions = {...options, name, entities: [entityType] as any}
         const connection = createConnection(newOptions);
         this.connections.set(key, connection);
      }
      return this.connections.get(key) as Promise<Connection>;
   }
}

export const connectionService = new ConnectionService();