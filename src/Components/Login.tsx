import { Tooltip } from "antd";
import { useEffect, useState } from "react";
import styles from "../Styles/Login.module.scss";
import user from "../utils/user";

interface IComponentProps {
  isAuthen: boolean;
}

export default function Login({ isAuthen }: IComponentProps) {
  const [content, setContent] = useState("");
  const [tooltip, setTooltip] = useState("");

  useEffect(() => {
    if (isAuthen) {
      setContent(user.username);
      setTooltip("Click to logout");
    } else {
      setContent("Login");
      setTooltip("Login to save your data!");
    }
  }, [isAuthen]);

  const onClick = async () => {
    const handler = isAuthen ? user.logout() : user.login();
    return await handler;
  };

  return (
    <Tooltip placement="bottomRight" title={tooltip} arrowPointAtCenter>
      <div className={styles.loginContainer} onClick={onClick}>
        {content}
      </div>
    </Tooltip>
  );
}
