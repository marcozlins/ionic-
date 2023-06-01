import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, addDoc } from '@angular/fire/firestore';
import { User } from '../model/user';
import { getDocs, query } from 'firebase/firestore';




@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private firestore: Firestore = inject(Firestore); // inject Cloud Firestore 

  private userCollection = collection(this.firestore, 'users');

  add(user: User) {
    return addDoc(this.userCollection, <User>{
      email: user.email,
      nome: user.nome,
      senha: user.senha,
      telefone: user.telefone
    })

  }

   async list() {
    const result = await getDocs(query(this.userCollection));
    
  }
}