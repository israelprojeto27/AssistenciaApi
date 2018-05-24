/* tslint:disable */
import {
  Celula
} from '../index';

declare var Object: any;
export interface UsuarioInterface {
  "nome": string;
  "sobreNome": string;
  "email": string;
  "password": string;
  "perfilUsuario": string;
  "status": string;
  "dataCadastro": Date;
  "id"?: number;
  "idCelula"?: number;
  celula?: Celula;
}

export class Usuario implements UsuarioInterface {
  "nome": string;
  "sobreNome": string;
  "email": string;
  "password": string;
  "perfilUsuario": string;
  "status": string;
  "dataCadastro": Date;
  "id": number;
  "idCelula": number;
  celula: Celula;
  constructor(data?: UsuarioInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Usuario`.
   */
  public static getModelName() {
    return "Usuario";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Usuario for dynamic purposes.
  **/
  public static factory(data: UsuarioInterface): Usuario{
    return new Usuario(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Usuario',
      plural: 'usuarios',
      path: 'usuarios',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "sobreNome": {
          name: 'sobreNome',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
        "perfilUsuario": {
          name: 'perfilUsuario',
          type: 'string'
        },
        "status": {
          name: 'status',
          type: 'string'
        },
        "dataCadastro": {
          name: 'dataCadastro',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "idCelula": {
          name: 'idCelula',
          type: 'number'
        },
      },
      relations: {
        celula: {
          name: 'celula',
          type: 'Celula',
          model: 'Celula',
          relationType: 'belongsTo',
                  keyFrom: 'idCelula',
          keyTo: 'id'
        },
      }
    }
  }
}
