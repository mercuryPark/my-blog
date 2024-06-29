// src/firebase/firebase.module.ts
import { Module } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { firebaseConfig } from './firebase-config';
import { FirebaseService } from './firebase.service';
import * as serviceAccount from '../firebase/core-c3958-firebase-adminsdk-oq4ew-2b19f32c24.json';

@Module({
  providers: [
    {
      provide: 'FIREBASE_ADMIN',
      useFactory: () => {
        return admin.initializeApp({
          credential: admin.credential.cert(
            serviceAccount as admin.ServiceAccount,
          ),
          ...firebaseConfig,
        });
      },
    },
    FirebaseService,
  ],
  exports: ['FIREBASE_ADMIN', FirebaseService],
})
export class FirebaseModule {}
