import styles from './arrowSvg.module.scss';

const ArrowSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" fill="none">
      <path
        stroke="#F8F7F7"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m1 1 6 6 6-6"
      />
    </svg>
  );
};

export default ArrowSvg;
