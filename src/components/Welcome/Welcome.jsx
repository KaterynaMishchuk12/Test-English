import { Block } from "../Block/Block";
import { TODOList } from "../TODOList/TODOList";
import css from "./Welcome.module.css";

export function Welcome() {
  return (
    <div className={css.thumb}>
      <Block />
      <TODOList />
    </div>
  );
}
