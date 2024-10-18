"use client";
import { useState } from "react";
import SubmitButton from "@/components/SubmitButton/SubmitButton";

export default function Home() {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => {
        setIsLoading(true); // شروع لودینگ
        console.log("Button clicked");

        // بعد از 3 ثانیه، لودینگ به false تغییر کند
        setTimeout(() => {
            setIsLoading(false);
            console.log("Loading complete");
        }, 3000); // 3000 میلی‌ثانیه (3 ثانیه)
    };

    return (
        <main>
            <div className="flex space-x-4">
                <SubmitButton
                    className="bg-blue-500 text-white hover:bg-blue-600 rounded-md px-2 py-3"
                    onClick={handleClick}
                    isLoading={isLoading}
                >
                    Button 1
                </SubmitButton>
            </div>
        </main>
    );
}
