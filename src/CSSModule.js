import React from "react";
import style from "./CSSModule.module.css";
import { styles } from "ansi-colors";

const CSSModule = () => {
  return (
    <div className={styles.wrpper}>
      안녕하세요. 저는 <span className="somethig">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
