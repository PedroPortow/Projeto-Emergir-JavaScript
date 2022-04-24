interface Action<T = string>{
    action: T
}

const step: Action<number>= {
    action: 0
}

step.action = 290

///////////////////////////////////////////

interface ActionI<T extends number | string, U>{
    action: T,
    timestamp: U
}

const step5: ActionI<string, number> = {
    action: 'delete',
    timestamp: 123
}

////////////////////////////

const historyActions: Array<ActionI> = []

historyActions.push(step5)