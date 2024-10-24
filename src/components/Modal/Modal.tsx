"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

interface ModalComponentProps {
    children: React.ReactNode;
    classNameContainer: string;
    classNameBackGround: string;
    setClose: React.Dispatch<React.SetStateAction<boolean>>;
    show: boolean;
    closeSvgBtnSize: number;
    positionCloseBtn: string;
}

const Modal: React.FC<ModalComponentProps> = ({
    children,
    classNameContainer,
    setClose,
    show,
    classNameBackGround,
    closeSvgBtnSize,
    positionCloseBtn,
}) => {
    const modalRef = useRef<HTMLDivElement | null>(null);

    // Handle outside click, Escape key press, and Back button
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target as Node)
            ) {
                setClose(false);
            }
        };

        const handleEscapeKey = (event: KeyboardEvent): void => {
            if (event.key === "Escape") {
                setClose(false);
            }
        };

        const handlePopState = (): void => {
            setClose(false);
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscapeKey);
        window.addEventListener("popstate", handlePopState);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscapeKey);
            window.removeEventListener("popstate", handlePopState);
        };
    }, [setClose]);

    // Disable scroll when modal is open
    useEffect(() => {
        if (show) {
            document.body.style.overflow = "hidden";
            window.history.pushState(null, "", window.location.href);
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [show]);

    return (
        <div
            className={`${classNameBackGround} ${show ? "flex" : "hidden"}`}
            role="dialog"
            aria-modal="true"
        >
            <div
                ref={modalRef}
                className={`${classNameContainer} ${show ? "" : "hidden"}`}
            >
                <button
                    className={`${positionCloseBtn} outline-none`}
                    onClick={() => {
                        setClose(false);
                    }}
                    aria-label="Close modal"
                >
                    <Image
                        src="/icons/closeSVG.svg"
                        alt="Close.svg"
                        width={closeSvgBtnSize}
                        height={closeSvgBtnSize}
                    />
                </button>

                {children}
            </div>
        </div>
    );
};

export default Modal;
