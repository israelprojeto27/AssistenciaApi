/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Usuario } from '../../models/Usuario';
import { Produto } from '../../models/Produto';
import { PessoaRecebimentoCesta } from '../../models/PessoaRecebimentoCesta';
import { ItemCesta } from '../../models/ItemCesta';
import { Financeiro } from '../../models/Financeiro';
import { Celula } from '../../models/Celula';
import { ItemPessoaCesta } from '../../models/ItemPessoaCesta';
import { HistoricoProduto } from '../../models/HistoricoProduto';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Usuario: Usuario,
    Produto: Produto,
    PessoaRecebimentoCesta: PessoaRecebimentoCesta,
    ItemCesta: ItemCesta,
    Financeiro: Financeiro,
    Celula: Celula,
    ItemPessoaCesta: ItemPessoaCesta,
    HistoricoProduto: HistoricoProduto,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
