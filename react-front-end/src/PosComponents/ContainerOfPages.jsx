import React, { useResolvedPath, useMatch } from "react";
import { Link } from "react-router-dom";
function ContainerOfPages({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}

export default ContainerOfPages;
