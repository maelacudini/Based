export const generals = {
    initial: {
        opacity: 0,
        y: 20
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.3,
            duration: 0.3
        }
    },
    exit: {
        opacity: 0,
        y: -20
    },
}

export const intro = {
    initial: { backgroundColor: "rgb(0, 0, 0)" },
    exit: {
        backgroundColor: "rgb(255, 255, 255)",
        transform: { duration: 0.5 },
    },
}

export const titleintro = {
    initial: {
        y: "-100%",
    },
    animate: i => ({
        filter: "invert(100%)",
        y: "0%",
        transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.02 * i }
    }),
    exit: {
        filter: "invert(0%)",
    },
}

export const titles = {
    initial: {
        y: "100%"
    },
    animate: i => ({ y: "0", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.02 * i } })
}

export const arrow = {
    initial: {
        x: -20,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: { delay: 0.5 }
    },
    exit: {
        x: -20,
        opacity: 0
    },
}

export const menu = {
    initial: { x: '-100%' },
    enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    exit: { x: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
}

export const line = {
    initial: { width: '0%' },
    animate: { width: '100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    exit: { width: '0%' }
}