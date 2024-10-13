"use client";

import { Button, ButtonWeb } from "@repo/ui";

import styles from "../styles/index.module.css";

export default function Web() {
  return (
    <div className={styles.container}>
      <h1 className="text-3xl text-red-600 font-bold underline">Webo</h1>
      <Button onClick={() => console.log("Pressed?!")} text="Boop" />
      <ButtonWeb onClick={() => console.log("Pressed?!")} text="Boop" />
    </div>
  );
}
