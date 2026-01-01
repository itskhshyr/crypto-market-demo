'use client';

import { openDB } from 'idb';

const DB_NAME = 'crypto-db';
const STORE = 'coins';

export const dbPromise = openDB(DB_NAME, 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains(STORE)) {
      db.createObjectStore(STORE, { keyPath: 'id' });
    }
  },
});

export async function saveCoins(coins) {
  if (!Array.isArray(coins)) return;

  const db = await dbPromise;
  const tx = db.transaction(STORE, 'readwrite');

  coins.forEach((coin) => {
    if (coin?.id) {
      tx.store.put(coin);
    }
  });

  await tx.done;
}

export async function getAllCoins() {
  const db = await dbPromise;
  return db.getAll(STORE);
}
