/* tslint:disable */

declare var Object: any;
export interface ProdutoInterface {
  "nome"?: string;
  "totalDisponivel"?: number;
  "totalEntrada"?: number;
  "totalSaida"?: number;
  "dataValidadeAntiga"?: Date;
  "dataCadastro": Date;
  "id"?: number;
}

export class Produto implements ProdutoInterface {
  "nome": string;
  "totalDisponivel": number;
  "totalEntrada": number;
  "totalSaida": number;
  "dataValidadeAntiga": Date;
  "dataCadastro": Date;
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
        "totalDisponivel": {
          name: 'totalDisponivel',
          type: 'number'
        },
        "totalEntrada": {
          name: 'totalEntrada',
          type: 'number'
        },
        "totalSaida": {
          name: 'totalSaida',
          type: 'number'
        },
        "dataValidadeAntiga": {
          name: 'dataValidadeAntiga',
          type: 'Date'
        },
        "dataCadastro": {
          name: 'dataCadastro',
          type: 'Date'
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
