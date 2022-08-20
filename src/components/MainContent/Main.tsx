import styles from "./Main.module.css";
import Form from "./Form/Form";
import List from "./List/List";
import { useState } from "react";

const Main = () => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <main className={styles.main__content}>
      <section className={styles.main__content_form}>
        <h2>Crie uma tarefa:</h2>
        <Form counter={counter} setCounter={setCounter} />
      </section>
      <section className={styles.main__content_list}>
        <h2>Suas Tarefas:</h2>
        <List counter={counter} />
      </section>
    </main>
  );
};

export default Main;
