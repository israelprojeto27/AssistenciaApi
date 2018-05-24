/* tslint:disable */
import {
  Celula
} from '../index';

declare var Object: any;
export interface PessoaRecebimentoCestaInterface {
  "nome": string;
  "email"?: string;
  "telefone"?: string;
  "status": string;
  "idCelula": number;
  "id"?: number;
  celula?: Celula;
}

export class PessoaRecebimentoCesta implements PessoaRecebimentoCestaInterface {
  "nome": string;
  "email": string;
  "telefone": string;
  "status": string;
  "idCelula": number;
  "id": number;
  celula: Celula;
  constructor(data?: PessoaRecebimentoCestaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PessoaRecebimentoCesta`.
   */
  public static getModelName() {
    return "PessoaRecebimentoCesta";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PessoaRecebimentoCesta for dynamic purposes.
  **/
  public static factory(data: PessoaRecebimentoCestaInterface): PessoaRecebimentoCesta{
    return new PessoaRecebimentoCesta(data);
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
      name: 'PessoaRecebimentoCesta',
      plural: 'PessoaRecebimentoCesta',
      path: 'PessoaRecebimentoCesta',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "telefone": {
          name: 'telefone',
          type: 'string'
        },
        "status": {
          name: 'status',
          type: 'string'
        },
        "idCelula": {
          name: 'idCelula',
          type: 'number'
        },
        "id": {
          name: 'id',
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
