import { useState, useEffect } from "react";
import { ImClock } from "react-icons/im";
function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const formattedDate = time.toLocaleDateString("en-US", options);
    const formattedTime = time.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true, // Adds AM/PM
    });

    return (
        <div className="h-[50px] w-[384px] bg-purple-600">
            <div className="px-[30px] text-white ">
                <div className="flex justify-center">
                    <div className="p-2 bg-white mr-2 mt-[2px] rounded-sm">
                        <ImClock size={25} className="text-purple-600" />
                    </div>
                    <div className="flex-col">
                        <div className="text-[16px] font-extrabold">
                            {formattedTime}
                        </div>
                        <div className="text-[10px] font-bold">
                            {formattedDate}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Clock;
