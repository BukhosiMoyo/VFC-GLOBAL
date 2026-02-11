"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

interface AccordionContextProps {
    expanded: string | undefined
    setExpanded: (value: string | undefined) => void
}

const AccordionContext = React.createContext<AccordionContextProps>({
    expanded: undefined,
    setExpanded: () => { },
})

const Accordion = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { type?: "single"; collapsible?: boolean }
>(({ className, children, ...props }, ref) => {
    const [expanded, setExpanded] = React.useState<string | undefined>(undefined)

    return (
        <AccordionContext.Provider value={{ expanded, setExpanded }}>
            <div ref={ref} className={className} {...props}>
                {children}
            </div>
        </AccordionContext.Provider>
    )
})
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ className, value, children, ...props }, ref) => {
    // Pass value to children via cloneElement or Context?
    // Easier to just use context in children if generic. 
    // But Item needs to know its value to pass to Trigger/Content?
    // Let's wrap children in a ItemContext.

    return (
        <div ref={ref} className={cn("border-b", className)} data-value={value} {...props}>
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    // @ts-expect-error itemValue is passed via cloneElement
                    return React.cloneElement(child, { itemValue: value })
                }
                return child
            })}
        </div>
    )
})
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement> & { itemValue?: string }
>(({ className, children, itemValue, onClick, ...props }, ref) => {
    const { expanded, setExpanded } = React.useContext(AccordionContext)
    const isOpen = expanded === itemValue

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(e)
        if (isOpen) {
            setExpanded(undefined)
        } else {
            setExpanded(itemValue)
        }
    }

    return (
        <button
            ref={ref}
            onClick={handleClick}
            className={cn(
                "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:text-primary [&[data-state=open]>svg]:rotate-180",
                className
            )}
            data-state={isOpen ? "open" : "closed"}
            {...props}
        >
            {children}
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
        </button>
    )
})
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { itemValue?: string }
>(({ className, children, itemValue, ...props }, ref) => {
    const { expanded } = React.useContext(AccordionContext)
    const isOpen = expanded === itemValue

    return (
        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                >
                    <div ref={ref} className={cn("pb-4 pt-0", className)} {...props}>
                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
})
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
