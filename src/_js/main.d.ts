module Backbone {
    class Model {
        constructor(attr?, opts?);
        public get(name: string): any;
        public set(name: string, val: any): void;
        public set(obj: any): void;
        public save(attr?, opts?): void;
        public destroy(): void;
        public bind(ev: string, f: Function, ctx?: any): void;
        public toJSON(): any;
    }
    class Collection {
        constructor(models?, opts?);
        public bind(ev: string, f: Function, ctx?: any): void;
        public length: number;
        public create(attrs, opts?): any;
        public each(f: (elem: any) => void): void;
        public fetch(opts?: any): void;
        public last(): any;
        public last(n: number): any[];
        public filter(f: (elem: any) => any): any[];
        public without(...values: any[]): any[];
    }
    class View {
        constructor(options?);
        public $(selector: string): any;
        public el: HTMLElement;
        public $el: any;
        public model: Model;
        public remove(): void;
        public delegateEvents: any;
        public make(tagName: string, attrs?, opts?): View;
        public setElement(element: HTMLElement, delegate?: bool): void;
        public tagName: string;
        public events: any;
        static extend: any;
    }
}
var Todos: TodoList;
