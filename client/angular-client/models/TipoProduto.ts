/* tslint:disable */

declare var Object: any;
export interface TipoProdutoInterface {
  "nome": string;
  "id"?: number;
}

export class TipoProduto implements TipoProdutoInterface {
  "nome": string;
  "id": number;
  constructor(data?: TipoProdutoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TipoProduto`.
   */
  public static getModelName() {
    return "TipoProduto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TipoProduto for dynamic purposes.
  **/
  public static factory(data: TipoProdutoInterface): TipoProduto{
    return new TipoProduto(data);
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
      name: 'TipoProduto',
      plural: 'TipoProdutos',
      path: 'TipoProdutos',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
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
