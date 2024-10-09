import useTheme from "@/hooks/useTheme";
import Router from "@/routers/index";
import { ConfigProvider } from "antd";
import enUS from "antd/lib/locale/en_US";
import zhCN from "antd/lib/locale/zh_CN";
import "moment/dist/locale/zh-cn";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { HashRouter } from "react-router-dom";

const App = (props: any) => {
	const { language, assemblySize, themeConfig, setLanguage } = props;
	const [i18nLocale, setI18nLocale] = useState(zhCN);

	useTheme(themeConfig);

	const setAntdLanguage = () => {
		if (language && language == "zh") return setI18nLocale(zhCN);
		if (language && language == "en") return setI18nLocale(enUS);
	};

	useEffect(() => {
		// 全局使用国际化
		setAntdLanguage();
	}, [language]);

	return (
		<HashRouter>
			<ConfigProvider locale={i18nLocale} componentSize={assemblySize}>
				<Router />
			</ConfigProvider>
		</HashRouter>
	);
};

const mapStateToProps = (state: any) => state.global;
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(App);
