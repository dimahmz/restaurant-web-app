import * as React from "react";
import Menu from "@mui/material/Menu";
import { BsThreeDots } from "react-icons/bs";

export default function BasicMenu({ children, onClick }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <button
        className="text-lg"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={(event) => {
          onClick();
          setAnchorEl(event.currentTarget);
        }}
      >
        <BsThreeDots />
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        onClick={handleClose}
      >
        {children}
      </Menu>
    </>
  );
}
