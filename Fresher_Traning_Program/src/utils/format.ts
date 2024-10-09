import { ftDataState, TreeDataState } from "./type";

export function formatFlatTree(
	data: Array<any>,
	_params: any = {},
	_level = 1,
	parentIds: string[] = [],
	treeData: TreeDataState[] = []
): TreeDataState[] {
	if (!data.length) {
		return treeData;
	}
	const list: TreeDataState[] = [];
	const param = {
		id: _params.id || "key",
		title: _params.title || "title",
		children: _params.children || "children",
		other: _params.other || []
	};
	const pIds: string[] = [];
	const obj: any = {};
	for (let i = 0; i < data.length; i++) {
		const node = data[i];
		const key = node[param.id];
		const child = node[param.children] || [];
		if (param.other.length) {
			param.other.forEach((element: string) => {
				obj[element] = node[element];
			});
		}
		treeData.push({
			key: key,
			title: node[param.title],
			pid: parentIds[i] || "0",
			level: _level,
			...obj
		});
		list.push(...child);
		pIds.push(...new Array(child.length).fill(key));
	}
	return formatFlatTree(list, param, _level + 1, pIds, treeData);
}

export function formatTree(list: TreeDataState) {
	const data = JSON.parse(JSON.stringify(list));
	const obj: any = {},
		trees: ftDataState[] = [];
	data.forEach((item: TreeDataState) => {
		item.children = [];
		obj[item.key] = item;
	});
	data.forEach((item: TreeDataState) => {
		const parent = obj[item.pid];
		if (parent) {
			(parent.children || (parent.children = [])).push(item);
		} else {
			trees.push(item as ftDataState);
		}
	});
	return trees;
}
