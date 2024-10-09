import { connect } from "react-redux";

const ThemeIcon = ({ isDark, setTheme }: any) => {
	function changeTheme() {
		setTheme(!isDark);
	}

	return (
		<div className="mx-[8px] flex cursor-pointer" onClick={changeTheme} title="换肤">
			<i className="iconfont icon-Clothes font-black text-[20px]" />
		</div>
	);
};
export default connect((state: any) => state.theme, {})(ThemeIcon);
