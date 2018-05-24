/* tslint:disable */
import {
  Usuario
} from '../index';

declare var Object: any;
export interface FinanceiroInterface {
  "acao": string;
  "dataAcao": Date;
  "valor": number;
  "motivo"?: string;
  "dataCadastro": Date;
  "dataUltimaAtualizacao": Date;
  "idMembroResponsavel": number;
  "id"?: number;
  usuario?: Usuario;
}

export class Financeiro implements FinanceiroInterface {
  "acao": string;
  "dataAcao": Date;
  "valor": number;
  "motivo": string;
  "dataCadastro": Date;
  "dataUltimaAtualizacao": Date;
  "idMembroResponsavel": number;
  "id": number;
  usuario: Usuario;
  constructor(data?: FinanceiroInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Financeiro`.
   */
  public static getModelName() {
    return "Financeiro";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Financeiro for dynamic purposes.
  **/
  public static factory(data: FinanceiroInterface): Financeiro{
    return new Financeiro(data);
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
      name: 'Financeiro',
      plural: 'financeiros',
      path: 'financeiros',
      idName: 'id',
      properties: {
        "acao": {
          name: 'acao',
          type: 'string'
        },
        "dataAcao": {
          name: 'dataAcao',
          type: 'Date'
        },
        "valor": {
          name: 'valor',
          type: 'number'
        },
        "motivo": {
          name: 'motivo',
          type: 'string'
        },
        "dataCadastro": {
          name: 'dataCadastro',
          type: 'Date'
        },
        "dataUltimaAtualizacao": {
          name: 'dataUltimaAtualizacao',
          type: 'Date'
        },
        "idMembroResponsavel": {
          name: 'idMembroResponsavel',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        usuario: {
          name: 'usuario',
          type: 'Usuario',
          model: 'Usuario',
          relationType: 'belongsTo',
                  keyFrom: 'idMembroResponsavel',
          keyTo: 'id'
        },
      }
    }
  }
}
