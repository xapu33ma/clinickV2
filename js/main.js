document.addEventListener(
    'DOMContentLoaded',
    () => {
        initTabs();
    },
    false
);

function initTabs() {
    const tabsTriggers = document.querySelectorAll('[data-trigger]');
    const tabsContents = document.querySelectorAll('[data-trigger-content]');

    tabsTriggers.forEach((tabTrigger) => {
        tabTrigger.addEventListener('click', () => {
            const trigger = tabTrigger.getAttribute('data-trigger');
            const elementForShow = document.querySelector(
                `[data-trigger-content=${trigger}]`
            );

            tabsTriggers.forEach((triggerElement) => {
                triggerElement.removeAttribute('data-trigger-active');
            });

            tabsContents.forEach((contentElement) => {
                contentElement.removeAttribute('data-trigger-active');
            });

            tabTrigger.setAttribute('data-trigger-active', true);
            elementForShow.setAttribute('data-trigger-active', true);
        });
    });
}
