import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, getDoc, query, getDocs, doc } from '@angular/fire/firestore';
import { Produto } from '../model/produto';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {;

  constructor() { }

  private firestore: Firestore = inject(Firestore); // inject Cloud Firestore
  private produtoCollection = collection(this.firestore, 'Produto');

  add(produto: Produto) {
    return addDoc(this.produtoCollection, <Produto><unknown>{
        nome: produto.nome,
        categoria: produto.categoria,
        descricao: produto.descricao,
        quantidade: produto.quantidade,
        valor: produto.valor,
        foto: produto['foto'],
    })
  }

  async list() {
    //return collectionData(query(this.userCollection));
    const result = await getDocs(query(this.produtoCollection));
    return result.docs.map(doc => ({ _id: doc.id, ...doc.data() }));
  }

  async get(id: string) {
    const result = await getDoc(doc(this.firestore, 'produto', id))
    //return result.data() 
    return { _id: result.id, ...result.data() }
  }

}
