const Navigation = ({route}) => {
    return (
            <li><a href={route.path}>{route.name}</a></li>
    );
};

export default Navigation;