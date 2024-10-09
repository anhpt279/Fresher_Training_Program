/**
 * @description 全局主题设置
 * */
const useTheme = (themeConfig: any) => {
	const initTheme = () => {
		// 灰色和弱色切换
		const body = document.documentElement as HTMLElement;

		// 切换暗黑模式
		let head = document.getElementsByTagName("head")[0];
		const getStyle = head.getElementsByTagName("style");
		if (getStyle.length > 0) {
			for (let i = 0, l = getStyle.length; i < l; i++) {
				if (getStyle[i]?.getAttribute("data-type") === "dark") getStyle[i].remove();
			}
		}
		let styleDom = document.createElement("style");
		styleDom.dataset.type = "dark";
		head.appendChild(styleDom);
	};
	initTheme();

	return {
		initTheme
	};
};

export default useTheme;
