import { ref } from 'vue';

const isPopupActive = ref(false);

export function usePopupState() {
    return {
        isPopupActive,
        popupToggle: () => isPopupActive.value = !isPopupActive.value,
    };
}
