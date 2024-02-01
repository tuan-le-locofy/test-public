import { FunctionComponent } from "react";
import VuesaxlinearmessagesIcon from "./VuesaxlinearmessagesIcon";
import styles from "./GroupComponent1.module.css";

type GroupComponent1Type = {
  vuesaxlinearmessages?: string;
  answerQuestions?: string;
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  vuesaxlinearmessages,
  answerQuestions,
}) => {
  return (
    <div className={styles.vuesaxlinearmessagesParent}>
      <VuesaxlinearmessagesIcon />
      <h2 className={styles.answerQuestions}>{answerQuestions}</h2>
      <div
        className={styles.loremIpsumDolor}
      >{`Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum. `}</div>
    </div>
  );
};

export default GroupComponent1;
