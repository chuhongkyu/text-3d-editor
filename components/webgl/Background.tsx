import React from 'react'
import { useEnvironmentController } from '@/store/useEnviornmentController'

function Background() {
    const { background } = useEnvironmentController()

    if (!background.enabled) return null

    return (
        <color attach="background" args={[ background.color]} />
    )
}

export default Background