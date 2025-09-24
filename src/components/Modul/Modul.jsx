// src/components/Modul.jsx
import React from "react";
import styles from "./Modul.module.css";

const modules = [
  {
    title: "01 - Intro Pembelajaran Belajar Komputer ",
    file: "/pdfs/intro_pembelajaran.pdf",
    image: "/images/intro.png",
  },
  {
    title: "01 - Pengenalan Komputer & Manajemen File",
    file: "/pdfs/01_Fondasi_Komputer.pdf",
    image: "/images/per1.png",
  },
  {
    title: "02 - Pengenalan Keyboard, Mouse dan Latihan Mengetik",
    file: "/pdfs/02_Fondasi_Komputer.pdf",
    image: "/images/per2.png",
  },
  {
    title: "03 - Sistem Operasi Windows",
    // file: "#",
    image: "/images/per3.png",
  },
  {
    title: "04 - Internet basics (browser, searching Google)",
    // file: "#",
    image: "/images/per4.png",
  },
  {
    title: "05 - Email dasar (buat akun Gmail, kirim pesan sederhana)",
    // file: "#",
    image: "/images/per5.png",
  },
];

export default function Modul() {
  return (
    <div className={styles.dashboard}>
      <h1>Dashboard Modul Pembelajaran</h1>
      <div className={styles.grid}>
        {modules.map((modul, index) => (
          <div key={index} className={styles.card}>
            {/* Background gambar */}
            <div
              className={styles.cardImage}
              style={{ backgroundImage: `url(${modul.image})` }}
            >
              <div className={styles.overlay}></div>
            </div>

            {/* Body card */}
            <div className={styles.cardBody}>
              <h2>{modul.title}</h2>
              {/* Download otomatis */}
              <a href={modul.file} download>
                Buka Modul
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
