interface ClassDictionary {
	[id: string]: boolean;
}

interface ClassNamesFn {
	(...classes: (string | ClassDictionary)[]): string;
}

declare var classNames: ClassNamesFn;

declare module "classnames" {
  export default classNames;
}
