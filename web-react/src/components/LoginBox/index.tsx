import styles from "./styles.module.scss";
import { VscGithubInverted } from "react-icons/vsc";
import { signInUrl } from "../../data/services/signInUrl";

export const LoginBox = () => {
  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Faça login para deixar sua mensagem.</strong>
      <a href={signInUrl} className={styles.signInWithGithub}>
        <VscGithubInverted size="24" />
        Entrar com GitHub
      </a>
    </div>
  );
};
