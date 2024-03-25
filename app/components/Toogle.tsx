import React from "react";
import { Switch, Space, Tooltip } from "antd";
import { useTheme } from "../constants/theme";

const Toogle: React.FC = () => {
  const { toogleTheme } = useTheme();
  return (
    <Space direction="vertical">
      <Tooltip placement="bottom" title={"Change Theme"}>
        <Switch defaultChecked onClick={toogleTheme} />
      </Tooltip>
    </Space>
  );
};

export default Toogle;
