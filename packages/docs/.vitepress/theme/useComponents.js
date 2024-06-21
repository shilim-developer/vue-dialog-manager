// Don't remove this file, because it registers the demo components.
import AntDesignVueDialog from '../../components/ant-design-vue/Dialog.vue'
import AntDesignVueDrawer from '../../components/ant-design-vue/Drawer.vue'
import AntDesignVueExample from '../../components/ant-design-vue/Example.vue'
import ElementPlusDialog from '../../components/element-plus/Dialog.vue'
import ElementPlusDrawer from '../../components/element-plus/Drawer.vue'
import ElementPlusExample from '../../components/element-plus/Example.vue'
import NaiveUiDialog from '../../components/naive-ui/Dialog.vue'
import NaiveUiDrawer from '../../components/naive-ui/Drawer.vue'
import NaiveUiExample from '../../components/naive-ui/Example.vue'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'

export function useComponents(app) {
  app.component('AntDesignVueDialog', AntDesignVueDialog)
  app.component('AntDesignVueDrawer', AntDesignVueDrawer)
  app.component('AntDesignVueExample', AntDesignVueExample)
  app.component('ElementPlusDialog', ElementPlusDialog)
  app.component('ElementPlusDrawer', ElementPlusDrawer)
  app.component('ElementPlusExample', ElementPlusExample)
  app.component('NaiveUiDialog', NaiveUiDialog)
  app.component('NaiveUiDrawer', NaiveUiDrawer)
  app.component('NaiveUiExample', NaiveUiExample)
  app.component('Demo', Demo)
  app.component('DemoBlock', DemoBlock)
}
