/* tslint:disable */
import {
  Usuario,
  Produto
} from '../index';

declare var Object: any;
export interface HistoricoProdutoInterface {
  "acao"?: string;
  "quantidade"?: number;
  "dataValidade"?: Date;
  "idProduto"?: number;
  "idMembroResponsavel"?: number;
  "id"?: number;
  usuario?: Usuario;
  produto?: Produto;
}

export class HistoricoProduto implements HistoricoProdutoInterface {
  "acao": string;
  "quantidade": number;
  "dataValidade": Date;
  "idProduto": number;
  "idMembroResponsavel": number;
  "id": number;
  usuario: Usuario;
  produto: Produto;
  constructor(data?: HistoricoProdutoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `HistoricoProduto`.
   */
  public static getModelName() {
    return "HistoricoProduto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of HistoricoProduto for dynamic purposes.
  **/
  public static factory(data: HistoricoProdutoInterface): HistoricoProduto{
    return new HistoricoProduto(data);
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
      name: 'HistoricoProduto',
      plural: 'historicosProdutos',
      path: 'historicosProdutos',
      idName: 'id',
      properties: {
        "acao": {
          name: 'acao',
          type: 'string'
        },
        "quantidade": {
          name: 'quantidade',
          type: 'number',
          default: 0
        },
        "dataValidade": {
          name: 'dataValidade',
          type: 'Date'
        },
        "idProduto": {
          name: 'idProduto',
          type: 'number'
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
