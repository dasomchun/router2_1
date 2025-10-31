// Firebase 설정 파일
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase 설정 정보
// 실제 프로젝트에 맞게 수정해야 합니다
const firebaseConfig = {
  apiKey: "AIzaSyAVioa-GJyt3CtMWOnmvsGAn3iuzxZ3qmA",
  authDomain: "router21a.firebaseapp.com",
  projectId: "router21a",
  storageBucket: "router21a.firebasestorage.app",
  messagingSenderId: "441274497523",
  appId: "1:441274497523:web:063c3857b2889f8dc7ba86",
  measurementId: "G-6ZNFJJVGRC",
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Firestore 데이터베이스 초기화
export const db = getFirestore(app);
export default app;
