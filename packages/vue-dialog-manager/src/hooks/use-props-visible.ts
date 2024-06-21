import { DialogComponent } from "@/types/dialog";
import { ref, watch } from "vue";

export const usePropsVisible = (props: DialogComponent.Props) => {
  const visible = ref(props.visible);
  watch(
    () => props.visible,
    () => {
      visible.value = props.visible;
    }
  );
  return visible;
};
