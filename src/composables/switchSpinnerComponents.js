import { shallowRef, onMounted, onUnmounted } from 'vue';
import * as spinnersList from 'epic-spinners';

export function useSwitchSpinnerComponents() {
    let timerID = undefined;
    const propsName = 'animationDuration';
    const spinnersListKeys = Object.keys(spinnersList);
    const spinnersListKeysLength = spinnersListKeys.length;

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

    const getDelayTime = (componentAnimationDuration) => {
        if (componentAnimationDuration >= 4000) {
            return componentAnimationDuration;
        }
        if (componentAnimationDuration >= 2000) {
            return componentAnimationDuration * 2;
        }

        return componentAnimationDuration * 3;
    };

    const changeCurrentSpinnerComponent = () => {
        randomInteger = getRandomInteger(0, spinnersListKeysLength, randomInteger);
        currentSpinnerComponentName.value = spinnersList[spinnersListKeys[randomInteger]];
        const currentDurationComponentAnimation = currentSpinnerComponentName.value.props[propsName].default;

        const duration = getDelayTime(currentDurationComponentAnimation);
        timerID = setTimeout(changeCurrentSpinnerComponent, duration);
    };

    onMounted(changeCurrentSpinnerComponent);
    onUnmounted(() => clearTimeout(timerID));

    return { currentSpinnerComponentName };
}
