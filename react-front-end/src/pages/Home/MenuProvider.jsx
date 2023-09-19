import SnackBar from "../../components/snackBar";
import { createContext, useState } from "react";

const MenuContext = createContext();

function MenuProvider({ children }) {
    const [message, setMessage] = useState("Order has been sent");
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState("success");

    function onOrderSent(response) {
        if (!response.success) {
            setMessage(response.message);
            setSeverity("error");
        }
        setOpen(true);
    }
    return (
        <>
            <SnackBar
                message={message}
                open={open}
                severity={severity}
                handleClose={() => {
                    setOpen(false);
                }}
            />
            <MenuContext.Provider value={{ onOrderSent }}>
                {children}
            </MenuContext.Provider>
        </>
    );
}

export { MenuContext, MenuProvider };
