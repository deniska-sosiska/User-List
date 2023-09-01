export const useCalculateSwitchDelayTime = () => {
    const getDelayTime = (componentAnimationDuration) => {
        if (componentAnimationDuration >= 4000) {
            return componentAnimationDuration;
        }
        if (componentAnimationDuration >= 2000) {
            return componentAnimationDuration * 2;
        }

        return componentAnimationDuration * 3;
    };

    return { getDelayTime };
};
