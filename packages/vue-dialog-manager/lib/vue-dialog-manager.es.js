import { defineComponent as a, openBlock as l, createElementBlock as u, Fragment as f, renderList as _, createBlock as h, resolveDynamicComponent as C, mergeProps as g, shallowReactive as D, h as v, reactive as m } from "vue";
const P = /* @__PURE__ */ a({
  __name: "DynamicDialog",
  props: {
    componentStore: {}
  },
  setup(n) {
    return (s, t) => (l(!0), u(f, null, _(s.componentStore, (r, p) => (l(), h(C(r.component), g({ ref_for: !0 }, r.props, { key: p }), null, 16))), 128));
  }
}), k = () => {
  const n = D({}), s = (e) => {
    const o = e.key || e.component.name || e.component.__name || "DEFAULT_DIALOG";
    e.props.visible = !0, e.props.onClosed = () => {
      e.isCache ? n[o].props.visible = !1 : delete n[o];
    }, Reflect.has(n, o) ? e.isCache ? Object.assign(n[o].props, {
      ...e.props,
      visible: !0
    }) : (delete n[o], n[o] = { ...e, props: m(e.props) }) : n[o] = { ...e, props: m(e.props) };
  }, t = (e, o = {}, c) => {
    s({
      component: e,
      props: o,
      key: c,
      isCache: !1
    });
  }, r = (e, o = {}, c) => {
    s({
      component: e,
      props: o,
      key: c,
      isCache: !0
    });
  }, p = () => v(P, { componentStore: n });
  return p.open = t, p.openInCache = r, p;
};
export {
  k as createDialogManager
};
