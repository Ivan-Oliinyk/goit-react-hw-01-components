import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";
import color from "./randomRGB";

function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={s.item}
              key={id}
              style={{ backgroundColor: color() }}
            >
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default Statistics;