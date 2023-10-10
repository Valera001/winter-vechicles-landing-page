import Card from './Card/Card';
import styles from './WhyIsItImportantBlock.module.scss';
import { data } from './data';
import Container from '../Container/Container';

const WhyIsItImportantBlock = () => {
  return (
    <section className={styles.wrapper}>
      <Container>
      <p className={styles.title}>Чому це важливо</p>
      <div className={styles.cards}>
        {!!data.length &&
          data.map(item => {
            return (
              <div key={item.id} className={styles.card}>
                <Card item={item} />
              </div>
            );
          })}
        </div>
        </Container>
    </section>
  );
};
export default WhyIsItImportantBlock;
