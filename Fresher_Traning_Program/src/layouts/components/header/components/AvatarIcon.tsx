import { Avatar } from "antd";
import { connect } from "react-redux";

import avatar from "@/assets/images/avatar.png";
import { clearInfo } from "@/redux/modules/user/action";

const AvatarIcon = () => {
	// 退出登录

	// Dropdown Menu

	return <Avatar size="large" src={avatar} />;
};

export default connect(null, { clearInfo })(AvatarIcon);
