import { Injectable, Inject, Logger } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseService {
  private readonly logger = new Logger(FirebaseService.name);

  constructor(
    @Inject('FIREBASE_ADMIN') private readonly firebaseAdmin: admin.app.App,
  ) {}

  // 예시: Firestore에 데이터 저장
  async addDocument(collection: string, data: any) {
    try {
      const docRef = await this.firebaseAdmin
        .firestore()
        .collection(collection)
        .add({
          created_at: Date.now(),
          ...data,
        });
      return docRef.id;
    } catch (error) {
      this.logger.error(`Failed to add document to ${collection}`, error.stack);
      throw new Error('Failed to add document');
    }
  }

  // 예시: Firestore에서 데이터 조회
  async getDocument(collection: string, id: string) {
    // 개별 조회
    if (id) {
      const doc = await this.firebaseAdmin
        .firestore()
        .collection(collection)
        .doc(id)
        .get();

      return doc.exists ? { id: doc.id, ...doc.data() } : null;
      // 전체 조회
    } else {
      const snapshot = await this.firebaseAdmin
        .firestore()
        .collection(collection)
        .get();

      return snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
    }
  }

  async updateDocument(collection: string, id: string, data: any) {
    const docRef = this.firebaseAdmin
      .firestore()
      .collection(collection)
      .doc(id);
    await docRef.update(data);
    return { id: id, ...data };
  }

  async deleteDocument(collection: string, id: string) {
    // 개별 삭제
    if (id) {
      await this.firebaseAdmin
        .firestore()
        .collection(collection)
        .doc(id)
        .delete();
      return { id: id };

      // 전체 삭제
    } else {
      const snapshot = await this.firebaseAdmin
        .firestore()
        .collection(collection)
        .get();

      const batch = this.firebaseAdmin.firestore().batch();

      snapshot.docs.forEach((doc) => {
        batch.delete(doc.ref);
      });

      await batch.commit();
    }
  }
}
