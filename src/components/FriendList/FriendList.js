import Friend from "./Friend.js";
import PropTypes from "prop-types";
import s from "./FriendList.module.css";

const FriendsList = ({ items }) => {
  return (
    <ul className={s.container}>
      {items.map(({ id, avatar, isOnline, name }) => (
        <li key={id} className={s.item}>
          <Friend avatar={avatar} isOnline={isOnline} name={name} />
        </li>
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendsList;
