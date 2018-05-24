/* tslint:disable */

declare var Object: any;
export interface CelulaInterface {
  "nome": string;
  "status": string;
  "id"?: number;
}

export class Celula implements CelulaInterface {
  "nome": string;
  "status": string;
  "id": number;
  constructor(data?: CelulaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Celula`.
   */
  public static getModelName() {
    return "Celula";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Celula for dynamic purposes.
  **/
  public static factory(data: CelulaInterface): Celula{
    return new Celula(data);
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
      name: 'Celula',
      plural: 'celulas',
      path: 'celulas',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "status": {
          name: 'status',
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
