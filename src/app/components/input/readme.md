# signal => same as useState in react
    -- Reactive state
    -- set() or update(cb) used for updating the value
    -- writable signal

# computed Signal => Readonly signal made up of signal, unable to  update directly
    -- computed signals using the computed function and specifying a derivation
eg:
    const count: WritableSignal<number> = signal(0);
    const doubleCount: Signal<number> = computed(() => count() * 2);


# effect => same purpose as useEffect
    -- here it doest not need dependency array
    -- angular automatically tracks the changes in the signal used
    -- we can either distroy the effect manually calling distroy or we can pass a function instead
    eg :
        effect((onCleanup) => {
            const user = currentUser();
            const timer = setTimeout(() => {
                console.log(`1 second ago, the user became ${user}`);
            }, 1000);
            onCleanup(() => {
                clearTimeout(timer);
            });
        });