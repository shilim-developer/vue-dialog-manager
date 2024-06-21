import { DialogComponent } from '../types/dialog';
import { ComponentProps } from '../types/vue-type-helper';
import { Component } from 'vue';

export interface ComponentStore<T extends Component> {
    component: Component;
    props: (ComponentProps<T> extends any ? {} : ComponentProps<Component>) & DialogComponent.Props;
    key?: string;
    isCache?: boolean;
}
export declare const createDialogManager: () => {
    (): import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }>;
    open: <T extends Component>(component: T, props?: Omit<ComponentProps<T>, "visible" | "onClosed">, key?: string) => string;
    openInCache: <T_1 extends Component>(component: T_1, props?: Omit<ComponentProps<T_1>, "visible" | "onClosed">, key?: string) => string;
    close: (key: string) => void;
    closeAll: () => void;
};
