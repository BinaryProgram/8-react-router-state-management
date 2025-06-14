const Link = (props) => {
  const { route } = props;
  return (
    <ul>
      <li>
        <a href={route.path}> {route.name}</a>
      </li>
    </ul>
  );
};

export default Link;
