"use client";

import { CreateServerModal } from "@/components/modals/create-server-modal";
import React from "react";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = React.useState(false)

    React.useEffect(() => {
        setIsMounted(true)
    }, [])

    if(!isMounted) {
        return null
    }

    return (
        <>
            <CreateServerModal />
        </>
    )
}