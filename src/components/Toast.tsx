import { CheckIcon } from "@heroicons/react/16/solid";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

 // Example: using Heroicons
interface ToastProps {
    message: string;
    duration?: number;
    activate?: boolean;
    deactivate?: (value: boolean) => void;
    }

export default function Toast(props: ToastProps) {
    const duration = props.duration ?? 2000;

    useEffect(() => {
        const timer = setTimeout(() => {
            if (props.deactivate) props.deactivate(false);
        }, duration);
        return () => clearTimeout(timer); 
    }, [props.activate]);
    return (
        <AnimatePresence>
            {props.activate && (
                <div className="h-screen w-screen fixed top-0 left-0 flex z-0">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="mx-auto mt-4 px-2 py-3 bg-black/40 backdrop-blur-sm border h-fit border-white/30 z-55 rounded-md flex items-center justify-center"
                >
                    <CheckIcon className="w-6 h-6 text-white mr-2" />
                    <span className="text-white font-semibold text-sm">{props.message}</span>
                </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
