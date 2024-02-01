import { FunctionComponent, useMemo, type CSSProperties } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import styles from "./GroupComponent2.module.css";

type GroupComponent2Type = {
  /** Style props */
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
  propWidth1?: CSSProperties["width"];
};

const GroupComponent2: FunctionComponent<GroupComponent2Type> = ({
  propWidth,
  propPadding,
  propWidth1,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className={styles.rectangleParent} style={groupDivStyle}>
      <div className={styles.frameChild} style={rectangleDivStyle} />
      <TextField
        className={styles.enterYourEmail}
        variant="outlined"
        sx={{ "& .MuiInputBase-root": { height: "24px" }, width: "130px" }}
      />
      <Button
        className={styles.frameItem}
        disableElevation={true}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fefeff",
          fontSize: "16",
          background: "#1f1f1f",
          borderRadius: "40px",
          "&:hover": { background: "#1f1f1f" },
          width: 147,
          height: 60,
        }}
      >
        Get a Quote
      </Button>
    </div>
  );
};

export default GroupComponent2;
