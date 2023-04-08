import { Router } from "next/router";

interface Store {
	user: IUser;
	token: string;
}

export class State {
	public static set(key: keyof Store, value: any) {
		const data = State.getData();
		data[key] = value;
		localStorage.setItem("data", JSON.stringify(data));
	}

	public static get(key: keyof Store) {
		if (key in State.getData()) return State.getData()[key];
		else return null;
	}

	public static getData() {
		return JSON.parse(localStorage.getItem("data") || "{}") as Store;
	}

	public static reload() {
		(Router as any).reload();
	}

	public static clear() {
		localStorage.removeItem("data");
	}
}
