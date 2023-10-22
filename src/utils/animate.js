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
        y: "100%",
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

export const transforms = [
    {
        x: -0.8,
        y: -0.6,
        rotationZ: -29
    },
    {
        x: -0.2,
        y: -0.4,
        rotationZ: -6
    },
    {
        x: -0.05,
        y: 0.1,
        rotationZ: 12
    },
    {
        x: -0.05,
        y: -0.1,
        rotationZ: -9
    },
    {
        x: -0.1,
        y: 0.55,
        rotationZ: 3
    },
    {
        x: 0,
        y: -0.1,
        rotationZ: 9
    },
    {
        x: 0,
        y: 0.15,
        rotationZ: -12
    },
    {
        x: 0,
        y: 0.15,
        rotationZ: -17
    },
    {
        x: 0,
        y: -0.65,
        rotationZ: 9
    },
    {
        x: 0.1,
        y: 0.4,
        rotationZ: 12
    },
    {
        x: 0,
        y: -0.15,
        rotationZ: -9
    },
    {
        x: 0.2,
        y: 0.15,
        rotationZ: 12
    },
    {
        x: 0.8,
        y: 0.6,
        rotationZ: 20
    }
]

export const disperse = {
    open: (i) => ({
        x: transforms[i].x + "em",
        y: transforms[i].y + "em",
        rotateZ: transforms[i].rotationZ,
        transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1] },
        zIndex: 1
    }),
    closed: {
        x: 0,
        y: 0,
        rotateZ: 0,
        transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1] },
        zIndex: 0
    }
}

export const line = {
    initial: (i) => ({
        width: '0%',

    }),
    animate: (i) => ({
        width: '100%',
        transition: { duration: 0.5 },
    }),
    exit: (i) => ({
        width: '0%',
    }),
}