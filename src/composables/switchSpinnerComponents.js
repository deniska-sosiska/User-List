import { shallowRef, onMounted, onUnmounted } from 'vue';
import * as spinnersList from 'epic-spinners';
import { useCalculateSwitchDelayTime } from '@/composables/calculateSwitchDelayTime';

export function useSwitchSpinnerComponents() {
    let timerID = undefined;
    const propsName = 'animationDuration';
    const spinnersListKeys = Object.keys(spinnersList);
    const spinnersListKeysLength = spinnersListKeys.length;
    const { getDelayTime } = useCalculateSwitchDelayTime();

    function getRandomInteger(min, max, prevResult = undefined) {
        const randomValue = Math.random() * (max - min) + min;
        const result = Math.floor(randomValue);

        if (prevResult === result) {
            return getRandomInteger(...arguments);
        }

        return result;
    }

    let randomInteger = getRandomInteger(0, spinnersListKeysLength);
    const initialSpinnerName = spinnersListKeys[randomInteger];
    const currentSpinnerComponentName = shallowRef(spinnersList[initialSpinnerName]);


    const changeCurrentSpinnerComponent = () => {
        randomInteger = getRandomInteger(0, spinnersListKeysLength, randomInteger);
        currentSpinnerComponentName.value = spinnersList[spinnersListKeys[randomInteger]];
        const currentDurationComponentAnimation = currentSpinnerComponentName.value.props[propsName].default;

        const duration = getDelayTime(currentDurationComponentAnimation);
        timerID = setTimeout(changeCurrentSpinnerComponent, duration);
    };

    onMounted(changeCurrentSpinnerComponent);
    onUnmounted(() => clearTimeout(timerID));

    return { currentSpinnerComponentName, changeCurrentSpinnerComponent };
}
