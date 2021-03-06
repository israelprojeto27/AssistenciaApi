/* tslint:disable */
import {
  Produto
} from '../index';

declare var Object: any;
export interface ItemCestaInterface {
  "quantidade": number;
  "unidadeProduto": string;
  "dataCadastro": Date;
  "dataUltimaAtualizacao": Date;
  "idProduto": number;
  "id"?: number;
  produto?: Produto;
}

export class ItemCesta implements ItemCestaInterface {
  "quantidade": number;
  "unidadeProduto": string;
  "dataCadastro": Date;
  "dataUltimaAtualizacao": Date;
  "idProduto": number;
  "id": number;
  produto: Produto;
  constructor(data?: ItemCestaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ItemCesta`.
   */
  public static getModelName() {
    return "ItemCesta";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ItemCesta for dynamic purposes.
  **/
  public static factory(data: ItemCestaInterface): ItemCesta{
    return new ItemCesta(data);
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
      name: 'ItemCesta',
      plural: 'ItemCesta',
      path: 'ItemCesta',
      idName: 'id',
      properties: {
        "quantidade": {
          name: 'quantidade',
          type: 'number',
          default: 0
        },
        "unidadeProduto": {
          name: 'unidadeProduto',
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
        "idProduto": {
          name: 'idProduto',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        produto: {
          name: 'produto',
          type: 'Produto',
          model: 'Produto',
          relationType: 'belongsTo',
                  keyFrom: 'idProduto',
          keyTo: 'id'
        },
      }
    }
  }
}
