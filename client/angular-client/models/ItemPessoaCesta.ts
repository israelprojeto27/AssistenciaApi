/* tslint:disable */
import {
  PessoaRecebimentoCesta,
  Usuario
} from '../index';

declare var Object: any;
export interface ItemPessoaCestaInterface {
  "dataRecebimento": Date;
  "idMembroResponsavel": number;
  "idPessoaRecebimentoCesta": number;
  "id"?: number;
  pessoaRecebimentoCesta?: PessoaRecebimentoCesta;
  usuario?: Usuario;
}

export class ItemPessoaCesta implements ItemPessoaCestaInterface {
  "dataRecebimento": Date;
  "idMembroResponsavel": number;
  "idPessoaRecebimentoCesta": number;
  "id": number;
  pessoaRecebimentoCesta: PessoaRecebimentoCesta;
  usuario: Usuario;
  constructor(data?: ItemPessoaCestaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ItemPessoaCesta`.
   */
  public static getModelName() {
    return "ItemPessoaCesta";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ItemPessoaCesta for dynamic purposes.
  **/
  public static factory(data: ItemPessoaCestaInterface): ItemPessoaCesta{
    return new ItemPessoaCesta(data);
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
      name: 'ItemPessoaCesta',
      plural: 'itemPessoasCestas',
      path: 'itemPessoasCestas',
      idName: 'id',
      properties: {
        "dataRecebimento": {
          name: 'dataRecebimento',
          type: 'Date'
        },
        "idMembroResponsavel": {
          name: 'idMembroResponsavel',
          type: 'number'
        },
        "idPessoaRecebimentoCesta": {
          name: 'idPessoaRecebimentoCesta',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        pessoaRecebimentoCesta: {
          name: 'pessoaRecebimentoCesta',
          type: 'PessoaRecebimentoCesta',
          model: 'PessoaRecebimentoCesta',
          relationType: 'belongsTo',
                  keyFrom: 'idPessoaRecebimentoCesta',
          keyTo: 'id'
        },
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
