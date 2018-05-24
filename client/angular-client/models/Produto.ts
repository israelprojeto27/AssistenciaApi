/* tslint:disable */

declare var Object: any;
export interface ProdutoInterface {
  "nome": string;
  "quantidade"?: number;
  "dataValidade"?: Date;
  "dataCadastro": Date;
  "idTipoProduto"?: number;
  "acao": string;
  "id"?: number;
}

export class Produto implements ProdutoInterface {
  "nome": string;
  "quantidade": number;
  "dataValidade": Date;
  "dataCadastro": Date;
  "idTipoProduto": number;
  "acao": string;
  "id": number;
  constructor(data?: ProdutoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Produto`.
   */
  public static getModelName() {
    return "Produto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Produto for dynamic purposes.
  **/
  public static factory(data: ProdutoInterface): Produto{
    return new Produto(data);
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
      name: 'Produto',
      plural: 'produtos',
      path: 'produtos',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "quantidade": {
          name: 'quantidade',
          type: 'number'
        },
        "dataValidade": {
          name: 'dataValidade',
          type: 'Date'
        },
        "dataCadastro": {
          name: 'dataCadastro',
          type: 'Date'
        },
        "idTipoProduto": {
          name: 'idTipoProduto',
          type: 'number'
        },
        "acao": {
          name: 'acao',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
