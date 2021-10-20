import { FormEvent, useContext, useState } from "react";
import { VscGithubInverted, VscSignOut } from "react-icons/vsc";

import styles from "./styles.module.scss";

import { AuthContext } from "../../contexts/auth";
import { api } from "../../data/services/api";

export const SendMessageForm = () => {
  const { user, signOut } = useContext(AuthContext);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!message.trim()) {
      return;
    }
    try {
      await api.post("/messages", { message });
      setMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.sendMessageFormWrapper}>
      <button onClick={signOut} className={styles.signOutButton}>
        <VscSignOut size="32" />
      </button>

      <header className={styles.userInformation}>
        <div className={styles.userImage}>
          <img src={user?.avatar_url} alt={user?.name} />
        </div>
        <strong className={styles.userName}>{user?.name}</strong>
        <span className={styles.userGithub}>
          <VscGithubInverted size="16" />
          {user?.login}
        </span>
      </header>

      <form onSubmit={handleSubmit} className={styles.sendMessageForm}>
        <label htmlFor="message">Mensagem</label>
        <textarea
          name="message"
          id="message"
          placeholder="Abra seu coração..."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
