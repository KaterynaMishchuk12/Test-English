import css from "./Block.module.css";

export function Block() {
  return (
    <div className={css.background}>
      <div className={css.intro}>
        <p>НАШІ ДОСЯГНЕННЯ</p>
        <h1>АНГЛІЙСЬКА ДЛЯ КОЖНОГО</h1>
        <p>
          Наші курси допомагають кожного досягти високого рівня англійської
          мовизавдяки сучасним методикам і індивідуальному підходу
        </p>
        <button type="button" className={css.btn}>
          ДІЗНАТИСЯ БІЛЬШЕ
        </button>
      </div>
    </div>
  );
}
