import s from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div className={s.statistics}>
      <span>
        Good:<span className={s.statisticsValue}>{good}</span>
      </span>
      <span>
        Neutral:<span className={s.statisticsValue}>{neutral}</span>
      </span>
      <span>
        Bad:<span className={s.statisticsValue}>{bad}</span>
      </span>
      <span>
        Total:<span className={s.statisticsValue}>{total}</span>
      </span>
      <span>
        Positive feedback:
        <span className={s.statisticsValue}>{positivePercentage}</span>%
      </span>
    </div>
  );
}
