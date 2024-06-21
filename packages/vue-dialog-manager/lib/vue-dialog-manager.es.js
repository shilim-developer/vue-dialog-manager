import { defineComponent as f, openBlock as i, createElementBlock as v, Fragment as h, renderList as b, createBlock as _, resolveDynamicComponent as C, mergeProps as g, shallowReactive as D, h as P, reactive as m, ref as k, watch as y } from "vue";
const A = /* @__PURE__ */ f({
  __name: "DynamicDialog",
  props: {
    componentStore: {}
  },
  setup(o) {
    return (s, l) => (i(!0), v(h, null, b(s.componentStore, (c, p) => (i(), _(C(c.component), g({ ref_for: !0 }, c.props, { key: p }), null, 16))), 128));
  }
}), I = () => {
  const o = D({}), s = (e) => {
    const n = e.key || e.component.name || e.component.__name || "DEFAULT_DIALOG";
    return e.props.visible = !0, e.props.onClosed = () => {
      e.isCache ? o[n].props.visible = !1 : delete o[n];
    }, Reflect.has(o, n) ? e.isCache ? Object.assign(o[n].props, {
      ...e.props,
      visible: !0
    }) : (delete o[n], o[n] = { ...e, props: m(e.props) }) : o[n] = { ...e, props: m(e.props) }, n;
  }, l = (e, n = {}, t) => s({
    component: e,
    props: n,
    key: t,
    isCache: !1
  }), c = (e, n = {}, t) => s({
    component: e,
    props: n,
    key: t,
    isCache: !0
  }), p = (e) => {
    Reflect.has(o, e) && (o[e].props.visible = !1);
  }, a = () => {
    for (const e in o)
      o[e].props.visible = !1;
  }, r = () => P(A, { componentStore: o });
  return r.open = l, r.openInCache = c, r.close = p, r.closeAll = a, r;
}, L = (o) => {
  const s = k(o.visible);
  return y(
    () => o.visible,
    () => {
      s.value = o.visible;
    }
  ), s;
};
export {
  I as createDialogManager,
  L as usePropsVisible
};
